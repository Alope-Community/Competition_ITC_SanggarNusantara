<!DOCTYPE html>
<html>
<head>
    <title>Notifikasi Event Baru</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background-color: #ef4444; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Event Baru!</h1>
        </div>

        <!-- Content -->
        <div style="padding: 20px;">
            <h2 style="font-size: 20px; color: #333;">{{ $event->title }}</h2>
            <p style="color: #666; line-height: 1.6;">{{ $event->description }}</p>
            <a href={{"https://alope.site/".$event->slug}} style="display: inline-block; margin-top: 10px; padding: 10px 15px; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Baca Selengkapnya</a>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9f9f9; color: #888; text-align: center; padding: 10px; font-size: 12px;">
            <p style="margin: 0;">&copy; 2025 Sanggar Nusantara. Semua Hak Dilindungi.</p>
        </div>
    </div>
</body>
</html>
