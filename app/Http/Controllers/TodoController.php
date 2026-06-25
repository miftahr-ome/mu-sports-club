<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        return Todo::all();
    }

    public function store(Request $request)
    {
        $request->validate(['title' => 'required|string|max:255']);
        return Todo::create(['title' => $request->title, 'completed' => false]);
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $request->validate(['title' => 'required|string|max:255', 'completed' => 'boolean']);
        $todo->update(['title' => $request->title, 'completed' => $request->completed]);
        return $todo;
    }

    public function destroy($id)
    {
        $todo = Todo::findOrFail($id);
        $todo->delete();
        return response()->json(['message' => 'Deleted']);
    }
}