<?php

use App\Http\Controllers\API\{_UploadImageController, DashboardController, NewsController, EventController, TransactionEventController};

use App\Http\Controllers\{_PaymentCallbackController, AuthController,};
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\SubscribeController;
use Illuminate\Support\Facades\Route;


Route::get('/', [LandingPageController::class, 'index']);
Route::get('/news', [LandingPageController::class, 'news']);
Route::get('/news/{slug}', [LandingPageController::class, 'news_detail']);
Route::get('/events', [LandingPageController::class, 'events']);
Route::get('/events/{slug}', [LandingPageController::class, 'events_detail']);
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
Route::apiResource('api/events', EventController::class);
Route::post('api/upload-image', _UploadImageController::class);

Route::get('/api/transaction-events', [TransactionEventController::class, "index"]);
Route::post('api/midtrans/token', [TransactionEventController::class, "store"]);
Route::patch('/api/transaction-events/{invoice}', [TransactionEventController::class, "update"]);

// PAYMENT CALLBACK
Route::post('api/payment-callback', _PaymentCallbackController::class);
