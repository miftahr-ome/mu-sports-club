<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('team_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('tournament_name');
            $table->string('team_name');
            $table->string('captain_name');
            $table->string('captain_phone');
            $table->string('captain_email');
            $table->string('department')->nullable();
            $table->json('players')->nullable();
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('team_registrations'); }
};