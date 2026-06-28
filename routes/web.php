<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

Route::get('/', function () {
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    $users = DB::table('users')->select('id', 'name', 'email', 'system_role', 'committee_role', 'phone', 'profile_picture')->get();
    return view('app', [
        'dbEvents' => $events,
        'dbUsers'  => $users
    ]);
});

Route::post('/register-event', function (Request $request) {
    $data = $request->json()->all();
    DB::table('registrations')->insert([
        'player_name' => $data['player_name'] ?? '',
        'email'       => $data['email'] ?? '',
        'phone'       => $data['phone'] ?? '',
        'event_name'  => $data['event_name'] ?? '',
        'department'  => $data['department'] ?? '',
        'created_at'  => now(),
        'updated_at'  => now(),
    ]);
    return response()->json(['success' => true, 'message' => 'Registered Successfully!']);
});

// Admin — Get Registrations
Route::get('/admin/registrations', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $registrations = DB::table('registrations')->orderBy('created_at', 'desc')->get();
    return response()->json(['success' => true, 'data' => $registrations]);
});

// Admin — Delete Registration
Route::delete('/admin/registrations/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('registrations')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// Admin — Get Members
Route::get('/admin/members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $members = DB::table('users')->select('id', 'name', 'email', 'system_role', 'committee_role', 'phone', 'profile_picture')->get();
    return response()->json(['success' => true, 'data' => $members]);
});

// Admin — Add Member
Route::post('/admin/members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $data = $request->json()->all();
    DB::table('users')->insert([
        'name'            => $data['name'] ?? '',
        'email'           => $data['email'] ?? '',
        'phone'           => $data['phone'] ?? '',
        'committee_role'  => $data['committee_role'] ?? '',
        'system_role'     => $data['system_role'] ?? 'member',
        'profile_picture' => $data['profile_picture'] ?? '',
        'password'        => bcrypt('musc2026'),
        'created_at'      => now(),
        'updated_at'      => now(),
    ]);
    return response()->json(['success' => true]);
});

// Admin — Update Member
Route::put('/admin/members/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    $data = $request->json()->all();
    DB::table('users')->where('id', $id)->update([
        'name'            => $data['name'] ?? '',
        'email'           => $data['email'] ?? '',
        'phone'           => $data['phone'] ?? '',
        'committee_role'  => $data['committee_role'] ?? '',
        'system_role'     => $data['system_role'] ?? 'member',
        'profile_picture' => $data['profile_picture'] ?? '',
        'updated_at'      => now(),
    ]);
    return response()->json(['success' => true]);
});

// Admin — Delete Member
Route::delete('/admin/members/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    DB::table('users')->where('id', $id)->delete();
    return response()->json(['success' => true]);
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
    $data = $request->json()->all();
    DB::table('events')->insert([
        'title'      => $data['title'] ?? '',
        'type'       => $data['type'] ?? 'Tournament',
        'event_date' => $data['date'] ?? '',
        'details'    => $data['details'] ?? '',
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
    $data = $request->json()->all();
    DB::table('events')->where('id', $id)->update([
        'title'      => $data['title'] ?? '',
        'type'       => $data['type'] ?? 'Tournament',
        'event_date' => $data['date'] ?? '',
        'details'    => $data['details'] ?? '',
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