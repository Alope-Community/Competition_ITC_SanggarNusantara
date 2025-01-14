<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;
use App\Mail\EventNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EventResource::collection(Event::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $event= Event::create([
            "title" => $request->title,
            "slug" => Str::slug($request->title),
            "description" => $request->description,
            "banner" => $request->banner,
            "started" => $request->startedDate . " " . $request->startedTime,
            "ended" => $request->endedDate . " " . $request->endedTime,
            "fee" => $request->fee,
            "location" => $request->location,
            "for" => $request->for,
            "latitude" => $request->lat,
            "longitude" => $request->lng,
            "maximum_visitor" => $request->maximumVisitor,
        ]);

        // Ambil semua user yang subscribe
        $users = User::whereNotNull('email_subscribed_at')->get();

        foreach ($users as $user) {
            Mail::to($user->email)->send(new EventNotification($event));
        }

        return response()->json([
            "message" => "Insert data Event success",
            "status_code" => "WN-01"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $event = Event::whereSlug($slug)->first();
        return response()->json([
            "data" => $event,
            "message" => "Get data Event success",
            "status_code" => "WN-01"
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $slug)
    {
        $event = Event::whereSlug($slug)->first();
        $event->update([
            "title" => $request->title,
            "description" => $request->description,
            "banner" => $request->banner,
            "started" => $request->startedDate . " " . $request->startedTime,
            "ended" => $request->endedDate . " " . $request->endedTime,
            "fee" => $request->fee,
            "location" => $request->location,
            "for" => $request->for,
            "maximum_visitor" => $request->maximumVisitor,
        ]);

        return response()->json([
            "message" => "Update data Event success",
            "status_code" => "WN-01"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $event = Event::whereSlug($slug)->first();

        if (!$event) {
            return response()->json(['message' => 'Event not found'], 404);
        }

        $event->delete();

        return response()->json(['message' => 'Event deleted successfully'], 200);
    }
}
