<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Event;
use Illuminate\Support\Str;


class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::insert([
            [
                'title'       => 'Tech Conference 2025',
                'slug'        => Str::slug('Tech Conference 2025'),
                'description' => 'An annual technology conference showcasing the latest trends.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-02-15 09:00:00',
                'ended'       => '2025-02-16 17:00:00',
                'fee'         => 50000,
                'location'    => 'Jakarta Convention Center',
                'longitude'   => '-6.21462',
                'latitude'    => '106.84513',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'Startup Meetup',
                'slug'        => Str::slug('Startup Meetup'),
                'description' => 'A networking event for startup enthusiasts.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-03-10 10:00:00',
                'ended'       => '2025-03-10 15:00:00',
                'fee'         => 20000,
                'location'    => 'Bandung Creative Hub',
                'longitude'   => '-6.91746',
                'latitude'    => '107.61912',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'Art Expo 2025',
                'slug'        => Str::slug('Art Expo 2025'),
                'description' => 'Explore art from local and international artists.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-04-01 10:00:00',
                'ended'       => '2025-04-05 20:00:00',
                'fee'         => 75000,
                'location'    => 'Yogyakarta Art Center',
                'longitude'   => '-7.79558',
                'latitude'    => '110.36949',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'Music Fest 2025',
                'slug'        => Str::slug('Music Fest 2025'),
                'description' => 'An electrifying music festival featuring top artists.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-06-20 15:00:00',
                'ended'       => '2025-06-22 23:59:00',
                'fee'         => 150000,
                'location'    => 'Bali Beach Park',
                'longitude'   => '-8.40952',
                'latitude'    => '115.18892',
                'for'         => 'mature',
            ],
            [
                'title'       => 'Cooking Workshop',
                'slug'        => Str::slug('Cooking Workshop'),
                'description' => 'A hands-on workshop for cooking enthusiasts.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-07-05 09:00:00',
                'ended'       => '2025-07-05 13:00:00',
                'fee'         => 100000,
                'location'    => 'Surabaya Culinary School',
                'longitude'   => '-7.25044',
                'latitude'    => '112.76884',
                'for'         => 'all ages',
            ],
            // Tambahkan data lainnya
            [
                'title'       => 'Coding Bootcamp',
                'slug'        => Str::slug('Coding Bootcamp'),
                'description' => 'Learn the basics of web development in this 2-day workshop.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-08-10 10:00:00',
                'ended'       => '2025-08-11 16:00:00',
                'fee'         => 50000,
                'location'    => 'Online (Zoom)',
                'longitude'   => '',
                'latitude'    => '',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'Fitness Marathon 2025',
                'slug'        => Str::slug('Fitness Marathon 2025'),
                'description' => 'A challenging fitness event for enthusiasts.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-09-10 06:00:00',
                'ended'       => '2025-09-10 12:00:00',
                'fee'         => 80000,
                'location'    => 'Medan Sports Park',
                'longitude'   => '3.58333',
                'latitude'    => '98.66667',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'Movie Screening: Classics Night',
                'slug'        => Str::slug('Movie Screening: Classics Night'),
                'description' => 'A night of classic movie screenings under the stars.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-10-20 19:00:00',
                'ended'       => '2025-10-20 23:00:00',
                'fee'         => 30000,
                'location'    => 'Jakarta Rooftop Cinema',
                'longitude'   => '-6.21462',
                'latitude'    => '106.84513',
                'for'         => 'mature',
            ],
            [
                'title'       => 'Photography Walk',
                'slug'        => Str::slug('Photography Walk'),
                'description' => 'Capture scenic views in a guided photography walk.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-11-15 07:00:00',
                'ended'       => '2025-11-15 10:00:00',
                'fee'         => 40000,
                'location'    => 'Bogor Botanical Garden',
                'longitude'   => '-6.59627',
                'latitude'    => '106.80604',
                'for'         => 'all ages',
            ],
            [
                'title'       => 'New Year Gala 2025',
                'slug'        => Str::slug('New Year Gala 2025'),
                'description' => 'Celebrate the new year with an exclusive gala event.',
                'banner'      => "https://images.unsplash.com/photo-1644080144721-3837d0a02fcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                'started'     => '2025-12-31 20:00:00',
                'ended'       => '2026-01-01 01:00:00',
                'fee'         => 250000,
                'location'    => 'Jakarta Grand Hotel',
                'longitude'   => '-6.21462',
                'latitude'    => '106.84513',
                'for'         => 'mature',
            ],
        ]);
    }
}
