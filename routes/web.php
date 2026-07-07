<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

// ── Public ──────────────────────────────────────────────────────────────────

Route::get('/', function () {
    $events = DB::table('events')->orderBy('event_date', 'asc')->get();
    $users  = DB::table('users')->select('id','name','email','system_role','committee_role','phone','profile_picture')->get();
    return view('app', ['dbEvents' => $events, 'dbUsers' => $users]);
});

Route::post('/register-event', function (Request $request) {
    try {
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
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::post('/register-member', function (Request $request) {
    try {
        $data = $request->json()->all();
        $exists = DB::table('members')
            ->where('email', $data['email'] ?? '')
            ->orWhere('student_id', $data['student_id'] ?? '')
            ->exists();
        if ($exists) {
            return response()->json(['success' => false, 'message' => 'Email or Student ID already registered!']);
        }
        DB::table('members')->insert([
            'name'       => $data['name'] ?? '',
            'student_id' => $data['student_id'] ?? '',
            'department' => $data['department'] ?? '',
            'semester'   => $data['semester'] ?? '',
            'phone'      => $data['phone'] ?? '',
            'email'      => $data['email'] ?? '',
            'status'     => 'active',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return response()->json(['success' => true, 'message' => 'Welcome to MU Sports Club!']);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::post('/register-team', function (Request $request) {
    try {
        $data = $request->json()->all();
        DB::table('team_registrations')->insert([
            'tournament_name' => $data['tournament_name'] ?? '',
            'team_name'       => $data['team_name'] ?? '',
            'captain_name'    => $data['captain_name'] ?? '',
            'captain_phone'   => $data['captain_phone'] ?? '',
            'captain_email'   => $data['captain_email'] ?? '',
            'department'      => $data['department'] ?? '',
            'players'         => json_encode($data['players'] ?? []),
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
        return response()->json(['success' => true, 'message' => 'Team registered successfully!']);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::get('/tournament-games/{tournament}', function ($tournament) {
    $games = DB::table('tournament_games')
        ->where('tournament_name', $tournament)
        ->where('is_active', true)
        ->get();
    return response()->json(['success' => true, 'data' => $games]);
});

Route::get('/news', function () {
    return response()->json(['success' => true, 'data' => DB::table('news')->orderBy('is_pinned','desc')->orderBy('created_at','desc')->get()]);
});

Route::get('/match-gallery', function () {
    return response()->json(['success' => true, 'data' => DB::table('match_gallery')->orderBy('created_at','desc')->get()]);
});

Route::get('/match-gallery/{tournament}', function ($tournament) {
    return response()->json(['success' => true, 'data' => DB::table('match_gallery')->where('tournament_name', $tournament)->orderBy('created_at','desc')->get()]);
});

Route::get('/member-card/{identifier}', function ($identifier) {
    $member = DB::table('members')->where('student_id', $identifier)->orWhere('email', $identifier)->first();
    if (!$member) return response()->json(['success' => false, 'message' => 'Member not found']);
    return response()->json(['success' => true, 'data' => $member]);
});

// ── Admin helper ─────────────────────────────────────────────────────────────

function adminCheck(Request $request) {
    return $request->header('X-Admin-Key') === env('ADMIN_SECRET_KEY', 'musc2026admin');
}

// ── Admin: Registrations ─────────────────────────────────────────────────────

Route::get('/admin/registrations', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('registrations')->orderBy('created_at','desc')->get()]);
});

Route::delete('/admin/registrations/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('registrations')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Committee Members (users table) ───────────────────────────────────

Route::get('/admin/members', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('users')->select('id','name','email','system_role','committee_role','phone','profile_picture')->get()]);
});

Route::post('/admin/members', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('users')->insert([
            'name'              => $data['name'] ?? '',
            'email'             => $data['email'] ?? '',
            'committee_role'    => $data['committee_role'] ?? '',
            'system_role'       => $data['system_role'] ?? 'member',
            'phone'             => $data['phone'] ?? '',
            'profile_picture'   => $data['profile_picture'] ?? '',
            'password'          => bcrypt('musc2026'),
            'email_verified_at' => now(),
            'remember_token'    => \Illuminate\Support\Str::random(10),
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::put('/admin/members/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('users')->where('id', $id)->update([
            'name'            => $data['name'] ?? '',
            'email'           => $data['email'] ?? '',
            'committee_role'  => $data['committee_role'] ?? '',
            'system_role'     => $data['system_role'] ?? 'member',
            'phone'           => $data['phone'] ?? '',
            'profile_picture' => $data['profile_picture'] ?? '',
            'updated_at'      => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::delete('/admin/members/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('users')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Club Members (members table) ──────────────────────────────────────

Route::get('/admin/club-members', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('members')->orderBy('created_at','desc')->get()]);
});

Route::delete('/admin/club-members/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('members')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Team Registrations ─────────────────────────────────────────────────

Route::get('/admin/team-registrations', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('team_registrations')->orderBy('created_at','desc')->get()]);
});

Route::delete('/admin/team-registrations/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('team_registrations')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Events ─────────────────────────────────────────────────────────────

Route::get('/admin/events', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('events')->orderBy('event_date','asc')->get()]);
});

Route::post('/admin/events', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
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
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::put('/admin/events/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('events')->where('id', $id)->update([
            'title'      => $data['title'] ?? '',
            'type'       => $data['type'] ?? 'Tournament',
            'event_date' => $data['date'] ?? '',
            'details'    => $data['details'] ?? '',
            'updated_at' => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::delete('/admin/events/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('events')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Tournament Games ───────────────────────────────────────────────────

Route::get('/admin/tournament-games', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('tournament_games')->get()]);
});

Route::post('/admin/tournament-games', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('tournament_games')->insert([
            'tournament_name' => $data['tournament_name'] ?? '',
            'game_name'       => $data['game_name'] ?? '',
            'game_icon'       => $data['game_icon'] ?? '🎯',
            'entry_type'      => $data['entry_type'] ?? 'solo',
            'max_players'     => $data['max_players'] ?? 1,
            'is_active'       => true,
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::delete('/admin/tournament-games/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('tournament_games')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: News ───────────────────────────────────────────────────────────────

Route::get('/admin/news', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('news')->orderBy('created_at','desc')->get()]);
});

Route::post('/admin/news', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('news')->insert([
            'title'      => $data['title'] ?? '',
            'content'    => $data['content'] ?? '',
            'image'      => $data['image'] ?? null,
            'is_pinned'  => $data['is_pinned'] ?? false,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::put('/admin/news/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('news')->where('id', $id)->update([
            'title'      => $data['title'] ?? '',
            'content'    => $data['content'] ?? '',
            'image'      => $data['image'] ?? null,
            'is_pinned'  => $data['is_pinned'] ?? false,
            'updated_at' => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::delete('/admin/news/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('news')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});

// ── Admin: Match Gallery ──────────────────────────────────────────────────────

Route::get('/admin/match-gallery', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    return response()->json(['success' => true, 'data' => DB::table('match_gallery')->orderBy('created_at','desc')->get()]);
});

Route::post('/admin/match-gallery', function (Request $request) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    try {
        $data = $request->json()->all();
        DB::table('match_gallery')->insert([
            'tournament_name' => $data['tournament_name'] ?? '',
            'image_url'       => $data['image_url'] ?? '',
            'caption'         => $data['caption'] ?? '',
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);
        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

Route::delete('/admin/match-gallery/{id}', function (Request $request, $id) {
    if (!adminCheck($request)) return response()->json(['error' => 'Unauthorized'], 401);
    DB::table('match_gallery')->where('id', $id)->delete();
    return response()->json(['success' => true]);
});