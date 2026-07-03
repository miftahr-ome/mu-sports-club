<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $games = [
            // Indoor Season games
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Chess',           'game_icon' => '♟️',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Carrom',           'game_icon' => '🎯',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Table Tennis',     'game_icon' => '🏓',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Badminton',        'game_icon' => '🏸',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Arm Wrestling',    'game_icon' => '💪',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Ludo',             'game_icon' => '🎲',  'entry_type' => 'team', 'max_players' => 4],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Dart',             'game_icon' => '🎯',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Scrabble',         'game_icon' => '🔤',  'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Video Games (eFootball)', 'game_icon' => '🎮', 'entry_type' => 'solo', 'max_players' => 1],
            ['tournament_name' => 'INDOOR GAMES SEASON-15', 'game_name' => 'Carom Billiards',  'game_icon' => '🎱',  'entry_type' => 'solo', 'max_players' => 1],

            // Futsal — team
            ['tournament_name' => 'INTRA-MUSC FUTSAL', 'game_name' => 'Futsal',    'game_icon' => '⚽', 'entry_type' => 'team', 'max_players' => 5],
            ['tournament_name' => 'INTRA FUTSAL',       'game_name' => 'Futsal',    'game_icon' => '⚽', 'entry_type' => 'team', 'max_players' => 5],
            ['tournament_name' => 'LEAGUE M',            'game_name' => 'Football',  'game_icon' => '⚽', 'entry_type' => 'team', 'max_players' => 9],

            // Cricket
            ['tournament_name' => 'UPL',    'game_name' => 'Cricket', 'game_icon' => '🏏', 'entry_type' => 'team', 'max_players' => 11],
            ['tournament_name' => 'MPL-15', 'game_name' => 'Cricket', 'game_icon' => '🏏', 'entry_type' => 'team', 'max_players' => 11],
        ];

        foreach ($games as $game) {
            DB::table('tournament_games')->insertOrIgnore(array_merge($game, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}