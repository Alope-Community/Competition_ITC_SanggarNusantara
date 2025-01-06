<?php

use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [LandingPageController::class, 'index']);
Route::get('/news', [LandingPageController::class, 'news']);
Route::get('/news/{slug}', [LandingPageController::class, 'news_detail']);

// API
Route::apiResource('api/news', NewsController::class);
