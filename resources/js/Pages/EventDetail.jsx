import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/Navbar";
import AdvertisementComponent from "../components/Advertisement";
import UpcomingEventComponent from "../components/UpcomingEvent";
import {
    IconArrowLeftFill,
    IconCalendar2Fill,
    IconMapFill,
    IconMoneybagFill,
    IconPeopleFill,
    IconTicket,
    IconTicketFill,
} from "justd-icons";
import FooterComponent from "../components/Footer";
import formatDate from "../tools/formatDate";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function EventDetailPage() {
    const { event, upcomingEvents, auth } = usePage().props;

    const [formData, setFormData] = useState({
        name: "",
        user_id: auth.user ? auth.user.id : 0,
        event_id: event.id ? event.id : 0,
        purhaced_ticket: 1,
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute(
            "data-client-key",
            "SB-Mid-client-DfZFhqjpc0UT0_LU"
        );
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const handleBuyTicket = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("/api/midtrans/token", formData);

        setFormData({
            name: "",
            user_id: auth.user ? auth.user.id : 0,
            event_id: event.id ? event.id : 0,
            purhaced_ticket: 1,
        });

        toast.success("Berhasil Order");

        window.snap.pay(data.token);
    };

    return (
        <>
            <NavbarComponent />
            <ToastContainer theme="dark" />

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
                            {auth.user ? (
                                <Link
                                    href="#buy-ticket"
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-3 py-2 rounded flex items-center gap-2"
                                >
                                    <IconTicketFill />
                                    Beli Tiket
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-3 py-2 rounded flex items-center gap-2"
                                >
                                    <IconTicket />
                                    Login untuk Beli Tiket
                                </Link>
                            )}
                        </div>
                    </div>
                    <p className="mt-5 text-gray-300">{event.description}</p>

                    {auth.user ? (
                        <div
                            id="buy-ticket"
                            className="mt-10 border border-red-500 p-5 rounded bg-red-500/10 relative"
                        >
                            <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                                <IconTicketFill />
                                Beli Tiket
                            </h3>
                            <form action="" onSubmit={handleBuyTicket}>
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        className="px-3 py-2 rounded bg-gray-200 text-gray-900"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                event: e.target.event,
                                            });
                                        }}
                                        value={formData.event_id}
                                        hidden
                                    />
                                    <input
                                        type="text"
                                        className="px-3 py-2 rounded bg-gray-200 text-gray-900"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                user_id: e.target.event,
                                            });
                                        }}
                                        value={formData.user_id}
                                        hidden
                                    />
                                    <div className="flex flex-col w-1/3">
                                        <label htmlFor="" className="mb-2">
                                            Nama Pemesan:
                                        </label>
                                        <input
                                            type="text"
                                            className="px-3 py-2 rounded bg-gray-200 text-gray-900"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                });
                                            }}
                                            value={formData.name}
                                        />
                                    </div>
                                    <div className="flex flex-col w-1/3">
                                        <label htmlFor="" className="mb-2">
                                            Total Tiket:
                                        </label>
                                        <input
                                            type="number"
                                            className="px-3 py-2 rounded bg-gray-200 text-gray-900"
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    purhaced_ticket:
                                                        e.target.value,
                                                });
                                            }}
                                            value={formData.purhaced_ticket}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-end">
                                        <button className="bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-3 py-2 rounded flex items-center gap-2">
                                            Bayar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        ""
                    )}
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
