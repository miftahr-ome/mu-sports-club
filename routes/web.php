<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


Route::get('/', function () {
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    $users  = DB::table('users')->select('id','name','email','system_role','committee_role','phone')->get();
    return view('app', ['dbEvents' => $events, 'dbUsers' => $users]);
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


Route::post('/register-member', function (Request $request) {
    $exists = DB::table('members')->where('email', $request->email)
        ->orWhere('student_id', $request->student_id)->exists();
    if ($exists) {
        return response()->json(['success' => false, 'message' => 'Email or Student ID already registered!']);
    }
    DB::table('members')->insert([
        'name'       => $request->name,
        'student_id' => $request->student_id,
        'department' => $request->department,
        'semester'   => $request->semester,
        'phone'      => $request->phone,
        'email'      => $request->email,
        'status'     => 'active',
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    return response()->json(['success' => true, 'message' => 'Welcome to MU Sports Club!']);
});

Route::post('/register-team', function (Request $request) {
    DB::table('team_registrations')->insert([
        'tournament_name' => $request->tournament_name,
        'team_name'       => $request->team_name,
        'captain_name'    => $request->captain_name,
        'captain_phone'   => $request->captain_phone,
        'captain_email'   => $request->captain_email,
        'department'      => $request->department ?? '',
        'players'         => json_encode($request->players ?? []),
        'created_at'      => now(),
        'updated_at'      => now(),
    ]);
    return response()->json(['success' => true, 'message' => 'Team registered successfully!']);
});

Route::get('/tournament-games/{tournament}', function ($tournament) {
    $games = DB::table('tournament_games')
        ->where('tournament_name', $tournament)
        ->where('is_active', true)
        ->get();
    return response()->json(['success' => true, 'data' => $games]);
});

Route::get('/admin/registrations', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('registrations')->orderBy('created_at','desc')->get()]);
});

Route::delete('/admin/registrations/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('registrations')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

Route::get('/admin/members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('users')->select('id','name','email','system_role','committee_role','phone')->get()]);
});

Route::get('/admin/club-members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('members')->orderBy('created_at','desc')->get()]);
});

Route::get('/admin/team-registrations', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('team_registrations')->orderBy('created_at','desc')->get()]);
});

Route::get('/admin/events', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('events')->orderBy('event_date','asc')->get()]);
});

Route::post('/admin/events', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('events')->insert([
        'title'      => $request->title,
        'type'       => $request->type,
        'event_date' => $request->date,
        'details'    => $request->details,
        'created_at' => now(), 'updated_at' => now(),
    ]);
    return response()->json(['success' => true]);
});

Route::put('/admin/events/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('events')->where('id', $id)->update([
        'title'      => $request->title,
        'type'       => $request->type,
        'event_date' => $request->date,
        'details'    => $request->details,
        'updated_at' => now(),
    ]);
    return response()->json(['success' => true]);
});

Route::delete('/admin/events/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('events')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});


Route::get('/admin/tournament-games', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('tournament_games')->get()]);
});

Route::post('/admin/tournament-games', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('tournament_games')->insert([
        'tournament_name' => $request->tournament_name,
        'game_name'       => $request->game_name,
        'game_icon'       => $request->game_icon ?? '🎯',
        'entry_type'      => $request->entry_type ?? 'solo',
        'max_players'     => $request->max_players ?? 1,
        'is_active'       => true,
        'created_at'      => now(), 'updated_at' => now(),
    ]);
    return response()->json(['success' => true]);
});

Route::delete('/admin/tournament-games/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('tournament_games')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

Route::post('/admin/members', function (Request $request) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('users')->insert([
        'name'           => $request->name,
        'email'          => $request->email,
        'committee_role' => $request->committee_role,
        'phone'          => $request->phone,
        'password'       => bcrypt('musc2026'),
        'created_at'     => now(),
        'updated_at'     => now(),
    ]);
    return response()->json(['success' => true]);
});

Route::put('/admin/members/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('users')->where('id', $id)->update([
        'name'           => $request->name,
        'committee_role' => $request->committee_role,
        'phone'          => $request->phone,
        'updated_at'     => now(),
    ]);
    return response()->json(['success' => true]);
});

Route::delete('/admin/members/{id}', function (Request $request, $id) {
    if ($request->header('X-Admin-Key') !== env('ADMIN_SECRET_KEY', 'musc2026admin')) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('users')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});