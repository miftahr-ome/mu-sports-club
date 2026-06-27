<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

Route::get('/', function () {
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    $users = DB::table('users')->select('id', 'name', 'email', 'system_role', 'committee_role', 'phone')->get();
    return view('app', [
        'dbEvents' => $events,
        'dbUsers'  => $users
    ]);
});

Route::post('/register-event', function (Request $request) {
    DB::table('registrations')->insert([
        'player_name' => $request->player_name,
        'email'       => $request->email,
        'phone'       => $request->phone,
        'event_name'  => $request->event_name,
        'department'  => $request->department ?? '',
        'created_at'  => now(),
    ]);
    return response()->json(['success' => true, 'message' => 'Registered Successfully!']);
});

Route::get('/admin/registrations', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $registrations = DB::table('registrations')->orderBy('created_at', 'desc')->get();
    return response()->json(['success' => true, 'data' => $registrations]);
});