<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\{Event, News};
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index(){
        $news= News::limit(5)->latest()->get();
        $indonesiaInTheEyesOfWorld = News::limit(3)->get();
        
        $events= Event::limit(4)->latest()->get();


        return inertia('Index', [
            'news' => $news, 
            "indonesiaInTheEyesOfWorld" => $indonesiaInTheEyesOfWorld,
            'events' => $events, 
        ]);
    }
    // 
    public function news(){
        $news= News::latest()->get();
        $oldestNews= News::limit(5)->get();

        return inertia('News', [
            'news' => $news,
            "oldestNews" => $oldestNews
        ]);
    }
    public function news_detail(Request $request){
        $news= News::whereSlug($request->slug)->first();
        $oldestNews= News::limit(5)->get();

        return inertia('NewsDetail', [
            'news' => $news,
            "oldestNews" => $oldestNews
        ]);
    }
    // 
    public function events(){
        $events= Event::latest()->get();
        $upcomingEvents= Event::limit(5)->get();

        return inertia('Event', [
            'events' => $events,
            "upcomingEvents" => $upcomingEvents,
            'googleMapsApiKey' => config('services.google_maps.key'),
        ]);
    }
    public function events_detail(Request $request){
        $news= News::whereSlug($request->slug)->first();
        $oldestNews= News::limit(5)->get();

        return inertia('NewsDetail', [
            'news' => $news,
            "oldestNews" => $oldestNews
        ]);
    }
}
