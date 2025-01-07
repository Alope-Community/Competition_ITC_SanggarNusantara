<!DOCTYPE html>
<html>
<head>
    <title>Berita Baru</title>
</head>
<body>
    <h1>{{ $news->title }}</h1>
    <p>{{ $news->description }}</p>
    <a href="{{ url('/news/' . $news->slug) }}">Baca Selengkapnya</a>
</body>
</html>
