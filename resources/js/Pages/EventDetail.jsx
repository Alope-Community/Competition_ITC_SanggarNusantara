import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import NavbarComponent from "../components/Navbar";
import MostPopularNewsComponent from "../components/MostPopularNews";
import AdvertisementComponent from "../components/Advertisement";
import UpcomingEventComponent from "../components/UpcomingEvent";
import {
    IconArrowLeftFill,
    IconCalendar2Fill,
    IconMapFill,
    IconMoneybagFill,
    IconPeopleFill,
    IconTicketFill,
} from "justd-icons";
import FooterComponent from "../components/Footer";
import formatDate from "../tools/formatDate";

export default function EventDetailPage() {
    const { event, upcomingEvents } = usePage().props;

    return (
        <>
            <NavbarComponent />

            <main className="grid lg:grid-cols-3 container mx-auto pt-36 gap-10 lg:px-0 md:px-10 px-2">
                <div className="lg:col-span-2 text-gray-50">
                    <Link
                        href="/events"
                        className="inline-flex gap-2 items-center bg-gray-900 hover:bg-black md:px-5 py-2 px-3 rounded shadow hover:shadow-none shadow-gray-700 hover:text-red-500 md:text-base text-xs"
                    >
                        <IconArrowLeftFill />
                        Kembali
                    </Link>
                    <h1 className="md:text-3xl text-2xl font-semibold mb-5 mt-10">
                        {event.title}
                    </h1>
                    <img
                        src={event.banner}
                        alt="event banner"
                        className="w-full md:min-h-[400px] md:max-h-[500px] min-h-[300px] max-h-[400px] object-cover"
                    />
                    {/* <div className="border-l-2 border-red-500 pl-3 py-5 mt-5 mb-10 md:text-base text-sm">
                        <p>{event.description}</p>
                    </div> */}
                    <div className="flex items-center justify-between ">
                        <ul className="mt-10 pl-5 border-l-2 border-red-500 py-4">
                            <li className="flex items-center gap-2 mb-2">
                                <IconCalendar2Fill />
                                <p>{`${formatDate(
                                    event.started
                                )} - ${formatDate(event.ended)}`}</p>
                            </li>
                            <li className="flex items-center gap-2 mb-2">
                                <IconMoneybagFill />
                                <p>
                                    {event.fee
                                        ? event.fee.toLocaleString("id-ID", {
                                              style: "currency",
                                              currency: "IDR",
                                              minimumFractionDigits: 0,
                                          })
                                        : "Gratis"}
                                </p>
                            </li>
                            {event.mazimum_visitor ? (
                                <li className="flex items-center gap-2 mb-2">
                                    <IconPeopleFill />
                                    <p>{event.maximum_visitor}</p>
                                </li>
                            ) : (
                                ""
                            )}
                            <li className="flex items-center gap-2 mb-2">
                                <IconMapFill />
                                <p>{event.location}</p>
                            </li>
                        </ul>
                        <div>
                            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-3 py-2 rounded flex items-center gap-2">
                                <IconTicketFill />
                                Daftar Event
                            </button>
                        </div>
                    </div>
                    <p className="mt-5 text-gray-300">{event.description}</p>
                </div>
                <div className="relative">
                    <div className="sticky top-0 grid lg:grid-cols-1 md:grid-cols-2">
                        <UpcomingEventComponent
                            upcomingEvents={upcomingEvents}
                        />
                        <AdvertisementComponent />
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}
