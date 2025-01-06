<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index(){
        return inertia('Index');
    }
    public function news(){
        $news= News::latest()->get();

        return inertia('News', [
            'news' => $news
        ]);
    }
    public function news_detail(Request $request){
        $news= News::whereSlug($request->slug)->first();

        return inertia('NewsDetail', [
            'news' => $news
        ]);
    }
}
