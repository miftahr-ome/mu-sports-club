<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Competition extends Model {
    protected $fillable = ['title', 'description', 'start_date', 'end_date', 'status', 'organizer_id'];

    // কম্পিটিশনের দায়িত্বে থাকা অর্গানাইজার বা সেক্রেটারি
    public function organizer(): BelongsTo {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    // একটি কম্পিটিশনে অনেক প্লেয়ার থাকতে পারে
    public function players(): BelongsToMany {
        return $this->belongsToMany(User::class)->withPivot('player_role', 'status')->withTimestamps();
    }
}