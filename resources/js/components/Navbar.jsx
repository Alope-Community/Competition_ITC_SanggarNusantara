import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import { IconChevronLgDown, IconCirclePersonFill } from "justd-icons";

export default function NavbarComponent() {
    const { url } = usePage();
    const { auth } = usePage().props;

    // Dropdown
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (path) => url.startsWith(path);

    // logout
    const handleLogout = () => {
        Inertia.post("/logout");
    };

    return (
        <nav className="fixed z-50 w-full backdrop-blur shadow-sm">
            <div className="container flex justify-between items-center mx-auto">
                <div className="py-5">
                    <Link href="/">
                        <h5 className="text-2xl text-white">
                            Sanggar Nusantara
                        </h5>
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <div className="border-b-2 py-5 border-red-500 px-8 mr-5">
                        <ul className="flex gap-6 items-center text-white">
                            <li>
                                <Link
                                    href="/"
                                    className={url == "/" ? "font-bold" : ""}
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
                                        isActive("/events") ? "font-bold" : ""
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
                                <div className="absolute right-0 mt-2 w-48 bg-black shadow-md rounded-md z-10 pt-3">
                                    <ul className="py-1">
                                        <li className="text-gray-200 text-sm font-semibold px-5">
                                            <p className="text-xs text-gray-300">
                                                Email:
                                            </p>
                                            {auth.user.email}
                                        </li>
                                        <li className="mt-3">
                                            <button
                                                onClick={() => handleLogout()}
                                                className="w-full text-left block px-4 py-2 text-sm text-gray-200 hover:bg-red-500"
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
            </div>
        </nav>
    );
}
