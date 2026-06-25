<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Competition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClubController extends Controller {
    // ১. সকল কম্পিটিশন এবং তাদের অর্গানাইজারদের লিস্ট (With Joins/Eager Loading)
    public function getDashboardData() {
        $competitions = Competition::with('organizer:id,name,committee_role')
                                    ->withCount('players')
                                    ->get();
        return response()->json($competitions);
    }

    // ২. কম্পিটিশনে প্লেয়ার রেজিস্টার করার প্রফেশনাল ট্রানজেকশন মেথড
    public function registerPlayer(Request $request) {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'competition_id' => 'required|exists:competitions,id',
            'player_role' => 'required|string'
        ]);

        // Database Transaction নিশ্চিত করে যে ডেটাবেজে কোনো আংশিক বা ভাঙা ডেটা ঢুকবে না
        DB::beginTransaction();
        try {
            $competition = Competition::findOrFail($request->competition_id);
            
            // প্লেয়ার অলরেডি রেজিস্টার্ড কি না চেক
            if ($competition->players()->where('user_id', $request->user_id)->exists()) {
                return response()->json(['message' => 'Already registered!'], 400);
            }

            // Junction টেবিলে ডেটা ইনসার্ট
            $competition->players()->attach($request->user_id, [
                'player_role' => $request->player_role,
                'status' => 'Approved'
            ]);

            DB::commit(); // সবকিছু ঠিক থাকলে ডেটাবেজে পার্মানেন্ট সেভ হবে
            return response()->json(['message' => 'Player registered successfully!'], 200);

        } catch (\Exception $e) {
            DB::rollBack(); // কোনো এরর হলে আগের অবস্থায় ব্যাক করবে
            return response()->json(['message' => 'Registration Failed', 'error' => $e->getMessage()], 500);
        }
    }
}