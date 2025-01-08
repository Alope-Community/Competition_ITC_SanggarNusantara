import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import {
    IconBarsThree,
    IconChevronLgDown,
    IconCirclePersonFill,
} from "justd-icons";
import formatDate from "../tools/formatDate";

export default function NavbarComponent() {
    const { url } = usePage();
    const { auth } = usePage().props;

    // Dropdown
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Hamburger Menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (path) => url.startsWith(path);

    // logout
    const handleLogout = () => {
        Inertia.post("/logout");
    };

    // subcribe
    const handleConfirmationSubscribe = () => {
        Inertia.post("/subscribe", { email: auth.user.email });
    };

    return (
        <>
            <nav className="fixed z-50 w-full backdrop-blur shadow-sm">
                <div className="container flex justify-between items-center mx-auto lg:px-0 md:px-10 px-3">
                    <div className="py-5">
                        <Link href="/">
                            <h5 className="md:text-2xl text-xl text-white">
                                Sanggar Nusantara
                            </h5>
                        </Link>
                    </div>
                    <div className="md:flex hidden items-center lg:gap-5 gap-3">
                        <div className="border-b-2 py-5 border-red-500 lg:px-8 px-5 lg:mr-5 mr-3">
                            <ul className="flex gap-6 items-center text-white">
                                <li>
                                    <Link
                                        href="/"
                                        className={
                                            url == "/" ? "font-bold" : ""
                                        }
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/news"
                                        className={
                                            isActive("/news") ? "font-bold" : ""
                                        }
                                    >
                                        Berita
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/events"
                                        className={
                                            isActive("/events")
                                                ? "font-bold"
                                                : ""
                                        }
                                    >
                                        Event
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {auth.user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-4 py-2 rounded-full text-white text-sm"
                                >
                                    <IconCirclePersonFill className="size-5" />
                                    <span>{auth.user.name}</span>
                                    <IconChevronLgDown
                                        className={`w-3 h-3 transition-transform ${
                                            isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-black shadow-md rounded-md z-10 pt-3">
                                        <ul className="py-1">
                                            <li className="text-gray-200 text-sm font-semibold px-5">
                                                <p className="text-xs text-gray-300">
                                                    Email:
                                                </p>
                                                {auth.user.email}
                                                {/*  */}
                                                {auth.user
                                                    .email_subscribed_at ? (
                                                    <div className="mt-2 text-gray-200 text-sm font-semibold">
                                                        <p className="text-xs text-gray-300">
                                                            Berlangganan Sejak :
                                                        </p>
                                                        <p>
                                                            {formatDate(
                                                                auth.user
                                                                    .email_subscribed_at
                                                            )}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                            {auth.user.email_subscribed_at ? (
                                                <li className="mt-3">
                                                    <button
                                                        onClick={() =>
                                                            toggleModal()
                                                        }
                                                        className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                    >
                                                        Berhenti Langganan
                                                    </button>
                                                </li>
                                            ) : (
                                                <li className="mt-3">
                                                    <button
                                                        onClick={() =>
                                                            toggleModal()
                                                        }
                                                        className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                    >
                                                        Berlangganan
                                                    </button>
                                                </li>
                                            )}
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        handleLogout()
                                                    }
                                                    className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className={
                                    "bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-6 py-2 rounded-full text-white text-sm"
                                }
                            >
                                Login
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden block">
                        <button onClick={toggleHamburger}>
                            <IconBarsThree className="text-white size-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {isHamburgerOpen && (
                <div className="md:hidden fixed top-16 z-50 left-0 right-0 backdrop-blur border-b border-red-500">
                    <ul className="flex flex-col gap-4 items-center py-5 text-white">
                        <li>
                            <Link
                                href="/"
                                className={url == "/" ? "font-bold" : ""}
                                onClick={toggleHamburger}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/news"
                                className={isActive("/news") ? "font-bold" : ""}
                                onClick={toggleHamburger}
                            >
                                Berita
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                className={
                                    isActive("/events") ? "font-bold" : ""
                                }
                                onClick={toggleHamburger}
                            >
                                Event
                            </Link>
                        </li>
                        {auth.user ? (
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-4 py-2 rounded-full text-white text-sm"
                                >
                                    <IconCirclePersonFill className="size-5" />
                                    <span>{auth.user.name}</span>
                                    <IconChevronLgDown
                                        className={`w-3 h-3 transition-transform ${
                                            isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-black shadow-md rounded-md z-10 pt-3">
                                        <ul className="py-1">
                                            <li className="text-gray-200 text-sm font-semibold px-5">
                                                <p className="text-xs text-gray-300">
                                                    Email:
                                                </p>
                                                {auth.user.email}
                                                {/*  */}
                                                {auth.user
                                                    .email_subscribed_at ? (
                                                    <div className="mt-2 text-gray-200 text-sm font-semibold">
                                                        <p className="text-xs text-gray-300">
                                                            Berlangganan Sejak :
                                                        </p>
                                                        <p>
                                                            {formatDate(
                                                                auth.user
                                                                    .email_subscribed_at
                                                            )}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                            {auth.user.email_subscribed_at ? (
                                                <li className="mt-3">
                                                    <button
                                                        onClick={() =>
                                                            toggleModal()
                                                        }
                                                        className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                    >
                                                        Berhenti Langganan
                                                    </button>
                                                </li>
                                            ) : (
                                                <li className="mt-3">
                                                    <button
                                                        onClick={() =>
                                                            toggleModal()
                                                        }
                                                        className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                    >
                                                        Berlangganan
                                                    </button>
                                                </li>
                                            )}
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        handleLogout()
                                                    }
                                                    className="w-full text-left block px-4 py-1.5 text-sm text-gray-200 hover:bg-red-500"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className={
                                    "bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-6 py-2 rounded-full text-white text-sm"
                                }
                            >
                                Login
                            </Link>
                        )}
                    </ul>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black rounded-lg shadow-lg w-96 p-5 shadow-gray-900">
                        <h2 className="text-lg font-semibold text-gray-200">
                            {auth.user.email_subscribed_at
                                ? "Konfirmasi Berhenti Berlangganan"
                                : "Konfirmasi Berlangganan"}
                        </h2>
                        <p className="text-sm text-gray-300 mt-2">
                            {!auth.user.email_subscribed_at
                                ? "Dengan berlangganan, Anda akan menerima notifikasi melalui email setiap kali ada acara atau berita terbaru."
                                : "Dengan berhenti berlangganan, Anda tidak akan lagi menerima notifikasi setiap kali ada acara atau berita terbaru."}
                        </p>
                        <div className="flex justify-end mt-5">
                            <button
                                onClick={() => toggleModal()}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-lg mr-2 text-sm"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => handleConfirmationSubscribe()}
                                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l text-white rounded-lg text-sm"
                            >
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
