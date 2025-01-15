<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ETicket;
use Illuminate\Support\Facades\Mail;
use Exception;
use App\Models\{TransactionEvent, User};
use Illuminate\Support\Facades\Log;

class _PaymentCallbackController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        try {
            $transaction = TransactionEvent::whereInvoice($request->order_id)->first();

            
            if (!$transaction) {
                throw new Exception("Transaction account not found");
            }
            
            if ($request->transaction_status === "settlement") {
                $transaction->update([
                    "updated_at" => $request->settlement_time,
                    "status" => "success"
                ]);

                // Ambil user yang beli tiket
                $user = User::whereId($transaction->user_id)->first();

                Mail::to($user->email)->send(new ETicket($transaction));
            }

            return response()->json($request);

        } catch (Exception $e) {
            Log::error('Transaction update failed: ' . $e->getMessage());

            // Return error response
            return response()->json([
                "code" => "ASN-003",
                "success" => false,
                "message" => "Transaction update failed",
                "result" => [],
            ], 500);
        }
    }
}
