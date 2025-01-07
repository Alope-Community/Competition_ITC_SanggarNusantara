<?php

use App\Http\Controllers\API\{_UploadImageController, DashboardController, NewsController};

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\SubscribeController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [LandingPageController::class, 'index']);
Route::get('/news', [LandingPageController::class, 'news']);
Route::get('/news/{slug}', [LandingPageController::class, 'news_detail']);
// 
Route::post('/subscribe', SubscribeController::class);

// AUTH
Route::middleware(['web'])->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name("auth.login");
    Route::post('/login', [AuthController::class, 'authenticated'])->name("auth.authenticated");
    Route::get('/register', [AuthController::class, 'register']);
    Route::post('/register', [AuthController::class, 'registration']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

// API
Route::get('api/dashboard', DashboardController::class);

Route::apiResource('api/news', NewsController::class);
Route::post('api/upload-image', _UploadImageController::class);
