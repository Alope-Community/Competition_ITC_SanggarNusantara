import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function NavbarComponent() {
    const { url } = usePage(); // Dapatkan URL saat ini dari Inertia

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (path) => url.startsWith(path);

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
                            {/* <li>Gallery</li> */}
                        </ul>
                    </div>
                    <Link
                        href="/login"
                        className={
                            "bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l px-6 py-2 rounded-full text-white text-sm"
                        }
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
