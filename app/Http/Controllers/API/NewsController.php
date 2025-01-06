<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return NewsResource::collection(News::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'cover' => 'required',
            'description' => 'required|string',
            'body' => 'required|string',
        ]);

        // Buat slug awal dari title
        $slug = Str::slug($validated['title']);

        // Tambahkan string acak 3 digit ke slug
        $randomString = Str::random(3); // 3 karakter acak
        $slugWithRandom = $slug . '-' . $randomString;


        // Tetapkan slug yang unik ke data yang divalidasi
        $validated['slug'] = $slugWithRandom;

        // Simpan data berita
        $news = News::create($validated);

        // Kembalikan data berita dengan format resource
        return new NewsResource($news);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $news = News::whereSlug($slug)->first();

        if (!$news) {
            return response()->json(['message' => 'News not found'], 404);
        }

        $news->delete();

        return response()->json(['message' => 'News deleted successfully'], 200);
    }
}
