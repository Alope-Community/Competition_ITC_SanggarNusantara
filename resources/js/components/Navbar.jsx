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
                <div className="border-b-2 py-5 border-red-500 px-14">
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
                                className={isActive("/news") ? "font-bold" : ""}
                            >
                                Berita
                            </Link>
                        </li>
                        {/* <li>Gallery</li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
