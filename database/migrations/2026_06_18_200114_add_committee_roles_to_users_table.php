<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->string('system_role')->default('Member')->after('email'); 
            $table->string('committee_role')->nullable()->after('system_role'); // President, Secretary
            $table->string('phone')->nullable()->after('committee_role');
        });
    }

    public function down(): void {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['system_role', 'committee_role', 'phone']);
        });
    }
};