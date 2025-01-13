<?php
namespace App\Providers;

use Midtrans\Config;
use Midtrans\Snap;

class MidtransService
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.serverKey');
        Config::$isProduction = config('midtrans.isProduction');
        Config::$clientKey = config('midtrans.clientKey');
        Config::$isSanitized = true; // Sanitasi input data
        Config::$is3ds = true; // Gunakan 3DS untuk pembayaran kartu kredit
    }

    public function createTransaction($order)
    {
        return Snap::createTransaction($order);
    }
}
