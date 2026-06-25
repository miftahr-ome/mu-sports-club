    <?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// use App\Http\Controllers\TodoController;

// Route::get('/todos', [TodoController::class, 'index']);
// Route::post('/todos', [TodoController::class, 'store']);
// Route::put('/todos/{id}', [TodoController::class, 'update']);
// Route::delete('/todos/{id}', [TodoController::class, 'destroy']);



// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;
// use App\Http\Controllers\TaskController;




// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);


// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/user', [AuthController::class, 'user']);
    

//     Route::get('/tasks', [TaskController::class, 'index']);
//     Route::post('/tasks', [TaskController::class, 'store']);
//     Route::get('/tasks/{id}', [TaskController::class, 'show']);
//     Route::put('/tasks/{id}', [TaskController::class, 'update']);
//     Route::delete('/tasks/{id}', [TaskController::class, 'destroy']);
//     Route::patch('/tasks/{id}/status', [TaskController::class, 'updateStatus']);
// });
//    -->


use App\Http\Controllers\API\ClubController;

Route::get('/club/dashboard', [ClubController::class, 'getDashboardData']);
Route::post('/club/register', [ClubController::class, 'registerPlayer']);