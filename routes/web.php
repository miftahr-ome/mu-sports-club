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

// Admin — Get Members
Route::get('/admin/members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $members = DB::table('users')->select('id', 'name', 'email', 'system_role', 'committee_role', 'phone')->get();
    return response()->json(['success' => true, 'data' => $members]);
});

// Admin — Get Events
Route::get('/admin/events', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    return response()->json(['success' => true, 'data' => $events]);
});

// Admin — Add Event
Route::post('/admin/events', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('events')->insert([
        'title' => $request->title,
        'type' => $request->type,
        'event_date' => $request->date,
        'details' => $request->details,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    return response()->json(['success' => true]);
});

// Admin — Update Event
Route::put('/admin/events/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('events')->where('id', $id)->update([
        'title' => $request->title,
        'type' => $request->type,
        'event_date' => $request->date,
        'details' => $request->details,
        'updated_at' => now(),
    ]);
    return response()->json(['success' => true]);
});

// Admin — Delete Event
Route::delete('/admin/events/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('events')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// Admin — Delete Registration
Route::delete('/admin/registrations/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('registrations')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});