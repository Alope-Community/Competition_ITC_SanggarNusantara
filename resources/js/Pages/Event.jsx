import React from "react";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Link, usePage } from "@inertiajs/inertia-react";
import {
    IconCalendar2Fill,
    IconCalendarFill,
    IconLocationFill,
    IconMapFill,
} from "justd-icons";
import AdvertisementComponent from "../components/Advertisement";
import UpcomingEventComponent from "../components/UpcomingEvent";
import formatDate from "../tools/formatDate";
import EventMap from "../components/EventMap";

export default function EventPage() {
    const { events, upcomingEvents, googleMapsApiKey } = usePage().props;

    return (
        <>
            <NavbarComponent />
            <main className="text-gray-200 pt-32 container mx-auto grid lg:grid-cols-3 gap-10 xl:px-0 md:px-10 px-3">
                <div className="lg:col-span-2">
                    <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-10">
                        <div className="text-left">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                                    <IconCalendar2Fill className="text-white" />
                                </span>
                                <h3 className="md:text-4xl text-xl font-bold text-gray-200">
                                    Ragam Event
                                </h3>
                            </div>
                            <p className="text-gray-300 md:text-base text-xs mt-2">
                                Jelajahi cerita dan informasi terkini tentang
                                kekayaan budaya Indonesia.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="#interactive-map"
                                className="flex items-center gap-2 border border-red-500 md:px-4 md:py-2 px-3 py-2 md:text-base text-sm whitespace-nowrap rounded hover:bg-gradient-to-r from-red-500 to-red-600"
                            >
                                <IconMapFill />
                                Peta Interaktif
                            </Link>
                        </div>
                    </div>

                    <hr className="my-5 border-gray-700" />

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="grid mb-10 lg:grid-cols-5 gap-5 items-center hover:bg-gray-900/30 rounded py-3 px-4"
                        >
                            <div className="w-full rounded-md overflow-hidden lg:col-span-2">
                                <img
                                    src={`https://alope.site/storage/${event.banner}`}
                                    alt={`Event Cover`}
                                    className="object-cover w-full min-h-[200px] max-h-[300px]"
                                />
                            </div>
                            <div className="lg:col-span-3">
                                <Link href={`/events/${event.slug}`}>
                                    <span>
                                        <h2 className="font-bold md:text-3xl text-gray-50 text-xl">
                                            {event.title}
                                        </h2>
                                    </span>
                                </Link>
                                <p className="text-gray-200 mt-5 md:text-base text-[12px]">
                                    {event.description}
                                </p>
                                <div className="flex flex-col gap-2 mt-5 text-gray-300 md:text-base text-sm">
                                    <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                        <IconCalendarFill className="size-5" />
                                        <small>
                                            {`${formatDate(event.started)} -
                                                ${formatDate(event.ended)}`}
                                        </small>
                                    </span>
                                    <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                        <IconLocationFill className="size-5" />
                                        <small>{event.location}</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <div className="sticky top-0 grid lg:grid-cols-1 md:grid-cols-2">
                        <UpcomingEventComponent
                            upcomingEvents={upcomingEvents}
                        />
                        <AdvertisementComponent />
                    </div>
                </div>
                <hr className="lg:col-span-3 border-gray-700 my-5" />
                <section
                    id="interactive-map"
                    className="lg:col-span-3 mb-10 scroll-mt-32"
                >
                    <div className="text-left mb-3">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                                <IconMapFill className="text-white" />
                            </span>
                            <h3 className="md:text-4xl text-xl font-bold text-gray-200">
                                Peta Interaktif
                            </h3>
                        </div>
                        <p className="text-gray-300 md:text-base text-xs mt-2">
                            Jelajahi cerita dan informasi terkini tentang
                            kekayaan budaya Indonesia.
                        </p>
                    </div>
                    <div className="border border-red-500/70 rounded">
                        <EventMap apiKey={googleMapsApiKey} events={events} />
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    );
}
