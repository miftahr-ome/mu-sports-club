<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

// 🎯 ১. সব পেজের রিকোয়েস্টকে হ্যান্ডেল করবে এই একটি রুট (Direct React Routing Support)
Route::get('/', function () {
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    $users = DB::table('users')->select('id', 'name', 'email', 'system_role', 'committee_role', 'phone')->get();

    return view('app', [
        'dbEvents' => $events,
        'dbUsers' => $users
    ]);
});

// 🎯 ২. রিয়েল ডাটাবেজ সাবমিশন অ্যাকশন (Clickable Form Handler)
Route::post('/register-event', function (Request $request) {
    DB::table('registrations')->insert([
        'player_name' => $request->player_name,
        'email'       => $request->email,
        'phone'       => $request->phone,
        'event_name'  => $request->event_name,
        'created_at'  => now(),
    ]);

    return response()->json(['success' => true, 'message' => 'Data Saved Successfully!']);
});