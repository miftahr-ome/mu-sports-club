<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::table('users', function (Blueprint $table) {
        // কলামগুলো অলরেডি না থাকলে এটি নতুন করে যোগ করবে
        if (!Schema::hasColumn('users', 'committee_role')) {
            $table->string('committee_role')->default('Member');
        }
        if (!Schema::hasColumn('users', 'profile_picture')) {
            $table->string('profile_picture')->nullable();
        }
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
