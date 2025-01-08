import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { IconCalendar, IconCalendarFill } from "justd-icons";
import formatDate from "../tools/formatDate";

export default function UpcomingEventComponent(upcomingEvents) {
    return (
        <div className="w-full text-gray-100">
            <div className="mb-6">
                <div className="p-4 bg-red-500">
                    <h2 className="text-lg font-bold text-gray-50">
                        Event Mendatang
                    </h2>
                </div>
                <ul className="post-number">
                    {upcomingEvents.upcomingEvents.map((event, index) => (
                        <li
                            key={index}
                            className={`${
                                index < 4 ? "border-b" : ""
                            } border-slate-700 hover:bg-red-500/40 hover:border-red-600 px-6 py-3`}
                        >
                            <Link
                                className="md:text-lg md:font-bold font-medium flex flex-row items-center"
                                href={`/events/${event.slug}`}
                            >
                                {event.title}
                            </Link>
                            <p className="text-gray-300 flex gap-1 items-center mt-2 text-sm">
                                <IconCalendarFill />
                                {`${formatDate(event.started)} - ${formatDate(
                                    event.ended
                                )}`}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
