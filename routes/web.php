<?php

use App\Http\Controllers\API\_UploadImageController;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [LandingPageController::class, 'index']);
Route::get('/news', [LandingPageController::class, 'news']);
Route::get('/news/{slug}', [LandingPageController::class, 'news_detail']);

// AUTH
Route::get('/login', [AuthController::class, 'login'])->name("auth.login");
Route::get('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'registration']);


// API
Route::apiResource('api/news', NewsController::class);
Route::post('api/upload-image', _UploadImageController::class);
