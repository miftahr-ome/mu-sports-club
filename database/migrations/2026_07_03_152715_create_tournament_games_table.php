<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('tournament_games', function (Blueprint $table) {
            $table->id();
            $table->string('tournament_name');
            $table->string('game_name');
            $table->string('game_icon')->default('🎯');
            $table->enum('entry_type', ['solo', 'team'])->default('solo');
            $table->integer('max_players')->default(1);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('tournament_games'); }
};