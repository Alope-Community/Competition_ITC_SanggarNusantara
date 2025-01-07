<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SubscribeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        try {
            $message = "";
            // Cari pengguna berdasarkan email
            $user = User::whereEmail($request->email)->first();

            if ($user) {
                // Berlanggan / berhenti berlangganan
                if($user->email_subscribed_at){
                    $user->email_subscribed_at = null;
                    $message = "successUnsubscribe";
                } else {
                    $user->email_subscribed_at = Carbon::now();
                    $message = "successSubscribe";
                }
                $user->save();
            }

            // Redirect ke URL dengan parameter sukses
            return Inertia::location('/?'. $message .'=true');
        } catch (\Exception $e) {
            // Log error untuk debugging
            Log::error("Gagal memperbarui email_subscribed_at: " . $e->getMessage());

            // Redirect ke URL dengan parameter error
            return Inertia::location('/?'. $message .'=false');
        }
    }

}
