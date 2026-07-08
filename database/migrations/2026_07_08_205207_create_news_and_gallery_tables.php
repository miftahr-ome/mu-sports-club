<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        if (!Schema::hasTable('news')) {
            Schema::create('news', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->text('content');
                $table->string('image')->nullable();
                $table->boolean('is_pinned')->default(false);
                $table->timestamps();
            });
        }
        if (!Schema::hasTable('match_gallery')) {
            Schema::create('match_gallery', function (Blueprint $table) {
                $table->id();
                $table->string('tournament_name');
                $table->text('image_url');
                $table->string('caption')->nullable();
                $table->timestamps();
            });
        }
    }
    public function down(): void {
        Schema::dropIfExists('news');
        Schema::dropIfExists('match_gallery');
    }
};