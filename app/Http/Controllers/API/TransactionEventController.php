<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{Event, TransactionEvent, User};
use App\Providers\MidtransService;
use Illuminate\Support\Str;
use App\Http\Resources\TransactionEventResource;
use App\Mail\ETicket;
use Illuminate\Support\Facades\Mail;

class TransactionEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TransactionEventResource::collection(TransactionEvent::with("event")->with("user")->latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, MidtransService $midtransService)
    {

        // GENERATE INVOICE
        $date = date('Ymd');
        $randomString = Str::random(4);
        
        $invoice = "ASN-{$date}-{$randomString}";

        // Get ticket price
        $event= Event::find($request->event_id);
        $total_pay= $event->fee * $request->purhaced_ticket;
        
        // Get ticket price
        $user= User::find($request->user_id);
        $user_email= $user->email;
        
        // CREATE INVOICE DI TABLE TRANSACTION EVENTS
        TransactionEvent::create([
            "invoice" => $invoice,
            "orderer_name" => $request->name,
            "purhaced_ticket" => $request->purhaced_ticket,
            "user_id" => $request->user_id,
            "total_pay" => $total_pay,
            "event_id" => $request->event_id
        ]);

        $order = [
            'transaction_details' => [
                'order_id' => $invoice,
                'gross_amount' => $total_pay,
            ],
            'customer_details' => [
                'first_name' => $request->name,
                'email' => $user_email,
            ],
        ];

        return $midtransService->createTransaction($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $invoice)
    {
        $transactionEvent = TransactionEvent::whereInvoice($invoice)->first();

        $transactionEvent->update([
            "status" => $request->status
        ]);

        // Ambil user yang beli tiket
        $user = User::whereId($transactionEvent->user_id)->first();

        if($request->status == "success"){
            Mail::to($user->email)->send(new ETicket($transactionEvent));
        }

        return response()->json($transactionEvent);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
