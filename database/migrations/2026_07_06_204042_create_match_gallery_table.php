<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('match_gallery', function (Blueprint $table) {
            $table->id();
            $table->string('tournament_name');
            $table->string('image_url');
            $table->string('caption')->nullable();
            $table->timestamps();
        });
    }
    public function down(): void { Schema::dropIfExists('match_gallery'); }
};