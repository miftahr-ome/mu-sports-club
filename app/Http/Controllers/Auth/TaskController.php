<?php

namespace App\Http\Controllers\Auth; 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class TaskController extends Controller
{

    public function index(Request $request): JsonResponse
    {
        $userId = Auth::id();
        
        $query = Task::where('user_id', $userId);

        // Filter by status
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Filter by priority
        if ($request->has('priority')) {
            $query->where('priority', $request->priority);
        }

        // Search by title
        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        $tasks = $query->with('user')->orderBy('created_at', 'desc')->get();

        return response()->json([
            'tasks' => $tasks,
            'count' => $tasks->count(),
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|string|in:pending,in_progress,completed',
            'priority' => 'nullable|string|in:low,medium,high',
            'due_date' => 'nullable|date',
        ]);

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status ?: 'pending',
            'priority' => $request->priority ?: 'medium',
            'user_id' => Auth::id(),
            'due_date' => $request->due_date,
        ]);

        return response()->json([
            'message' => 'Task created successfully',
            'task' => $task->load('user'),
        ], 201);
    }

    public function show(string $id): JsonResponse
    {
        $task = Task::with('user')->find($id);

        if (!$task) {
            return response()->json([
                'message' => 'Task not found',
            ], 404);
        }

        if ($task->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        return response()->json([
            'task' => $task,
        ], 200);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json([
                'message' => 'Task not found',
            ], 404);
        }

        if ($task->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|string|in:pending,in_progress,completed',
            'priority' => 'nullable|string|in:low,medium,high',
            'due_date' => 'nullable|date',
        ]);

        $task->update([
            'title' => $request->title ?: $task->title,
            'description' => $request->description ?: $task->description,
            'status' => $request->status ?: $task->status,
            'priority' => $request->priority ?: $task->priority,
            'due_date' => $request->due_date ?: $task->due_date,
        ]);

        return response()->json([
            'message' => 'Task updated successfully',
            'task' => $task->load('user'),
        ], 200);
    }

    public function destroy(string $id): JsonResponse
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json([
                'message' => 'Task not found',
            ], 404);
        }

        if ($task->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $task->delete();

        return response()->json([
            'message' => 'Task deleted successfully',
        ], 200);
    }

    public function updateStatus(Request $request, string $id): JsonResponse
    {
        $request->validate([
            'status' => 'required|string|in:pending,in_progress,completed',
        ]);

        $task = Task::find($id);

        if (!$task) {
            return response()->json([
                'message' => 'Task not found',
            ], 404);
        }

        if ($task->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }

        $task->update(['status' => $request->status]);

        return response()->json([
            'message' => 'Task status updated successfully',
            'task' => $task->load('user'),
        ], 200);
    }
}