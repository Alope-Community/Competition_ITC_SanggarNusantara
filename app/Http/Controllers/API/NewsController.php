<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Mail\NewsNotification;
use Illuminate\Support\Facades\Mail;

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
    // public function store(Request $request)
    // {
    //     // Validasi input
    //     $validated = $request->validate([
    //         'title' => 'required|string|max:255',
    //         'cover' => 'required',
    //         'description' => 'required|string',
    //         'body' => 'required|string',
    //     ]);

    //     // Buat slug awal dari title
    //     $slug = Str::slug($validated['title']);

    //     // Tambahkan string acak 3 digit ke slug
    //     $randomString = Str::random(3); // 3 karakter acak
    //     $slugWithRandom = $slug . '-' . $randomString;


    //     // Tetapkan slug yang unik ke data yang divalidasi
    //     $validated['slug'] = $slugWithRandom;

    //     // Simpan data berita
    //     $news = News::create($validated);

    //     // Kembalikan data berita dengan format resource
    //     return new NewsResource($news);
    // }
    public function store(Request $request)
    {
        try {
            // Validasi input
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'cover' => 'required',
                'description' => 'required|string',
                'body' => 'required|string',
            ]);

            // Buat Slug
            $slug = Str::slug($validated['title']);
            $randomString = Str::random(3); // 3 karakter acak
            $slugWithRandom = $slug . '-' . $randomString;
            $validated['slug'] = $slugWithRandom;

            // Simpan data berita
            $news = News::create($validated);

            // Ambil semua user yang subscribe
            $users = User::whereNotNull('email_subscribed_at')->get();

            foreach ($users as $user) {
                Mail::to($user->email)->send(new NewsNotification($news));
            }

            // Kembalikan data berita dengan format resource
            return new NewsResource($news);

        } catch (\Exception $e) {
            // Log error untuk debugging
            Log::error("Gagal menyimpan berita: " . $e->getMessage());

            // Berikan respons kesalahan dengan pesan error
            return response()->json([
                'error' => 'Terjadi kesalahan saat menyimpan berita.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }



    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $news = News::whereSlug($slug)->first();

        if (!$news) {
            return response()->json(['message' => 'News not found'], 404);
        }

        return new NewsResource($news);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $news = News::whereSlug($slug)->first();

        if (!$news) {
            return response()->json(['message' => 'News not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            // 'slug' => 'sometimes|string|unique:news,slug,' . $id,
            'cover' => 'sometimes',
            'description' => 'sometimes|string',
            'body' => 'sometimes|string',
        ]);

        // Buat slug awal dari title
        $slug = Str::slug($validated['title']);

        // Tambahkan string acak 3 digit ke slug
        $randomString = Str::random(3); // 3 karakter acak
        $slugWithRandom = $slug . '-' . $randomString;


        // Tetapkan slug yang unik ke data yang divalidasi
        $validated['slug'] = $slugWithRandom;

        $news->update($request->all());

        return response()->json($news, 200);
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
