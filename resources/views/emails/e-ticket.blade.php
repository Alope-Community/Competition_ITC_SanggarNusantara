<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Ticket Sanggar Nusantara</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        .email-container {
            max-width: 600px;
            margin: auto;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: #ef4444;
            color: #fff;
            text-align: center;
            padding: 20px;
        }
        .content {
            padding: 20px;
        }
        .content h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .content p {
            margin-bottom: 20px;
        }
        .ticket-details {
            background: #f1f1f1;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            background: #004aad;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>E-Ticket Sanggar Nusantara</h1>
        </div>
        <div class="content">
            <h1>{{ $transaction->event->title }}</h1>
            <p>Halo {{ $transaction->user->name }},</p>
            <p>Terima kasih telah membeli tiket untuk acara <strong>{{ $transaction->event->title }}</strong>. Berikut adalah detail tiket Anda:</p>

            <div class="ticket-details">
                <p><strong>Acara:</strong> {{ $transaction->event->title }}</p>
                <p><strong>Tanggal:</strong> {{ \Carbon\Carbon::parse($transaction->event->started)->format('d M Y, H:i') }}</p>
                <p><strong>Lokasi:</strong> {{ $transaction->event->location }}</p>
                <p><strong>Invoice Tiket:</strong> {{ $transaction->invoice }}</p>
            </div>

            <p>Silakan Tunjukan tiket ini ke panitia!</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} Sanggar Nusantara. Semua Hak Dilindungi.</p>
            <p>Jika Anda memiliki pertanyaan, hubungi kami di <a href="mailto:support@sanggarnusantara.com">support@sanggarnusantara.com</a></p>
        </div>
    </div>
</body>
</html>
