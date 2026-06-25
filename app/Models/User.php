<!-- <?php

// namespace App\Models;

// // use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Database\Factories\UserFactory;
// use Illuminate\Database\Eloquent\Attributes\Fillable;
// use Illuminate\Database\Eloquent\Attributes\Hidden;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Notifications\Notifiable;

// #[Fillable(['name', 'email', 'password'])]
// #[Hidden(['password', 'remember_token'])]
// class User extends Authenticatable
// {
//     /** @use HasFactory<UserFactory> */
//     use HasFactory, Notifiable;

//     /**
//      * Get the attributes that should be cast.
//      *
//      * @return array<string, string>
//      */
//     protected function casts(): array
//     {
//         return [
//             'email_verified_at' => 'datetime',
//             'password' => 'hashed',
//         ];
//     }
// } -->




// namespace App\Models;

// use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;

// class User extends Authenticatable
// {
//     use HasApiTokens, Notifiable;

//     protected $fillable = [
//         'name',
//         'email',
//         'password',
//     ];

//     protected $hidden = [
//         'password',
//     ];

//     protected $casts = [
//         'email_verified_at' => 'datetime',
//     ];
// }

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable {
    protected $fillable = ['name', 'email', 'phone', 'system_role', 'committee_role', 'password'];

    // একজন ইউজার অনেকগুলো কম্পিটিশনে অংশ নিতে পারেন (Many-to-Many)
    public function competitions(): BelongsToMany {
        return $this->belongsToMany(Competition::class)->withPivot('player_role', 'status')->withTimestamps();
    }

    // একজন অর্গানাইজিং সেক্রেটারি অনেকগুলো কম্পিটিশন ম্যানেজ করতে পারেন (One-to-Many)
    public function managedCompetitions(): HasMany {
        return $this->hasMany(Competition::class, 'organizer_id');
    }
}