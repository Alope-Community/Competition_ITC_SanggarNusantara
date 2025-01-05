import React from "react";

export default function NavbarComponent() {
    return (
        <nav className="fixed z-50 w-full backdrop-blur shadow-sm">
            <div className="container flex justify-between items-center mx-auto">
                <div className="py-5">
                    <h5 className="text-2xl text-white">Sanggar Nusantara</h5>
                </div>
                <div className="border-b-2 py-5 border-red-500 px-14">
                    <ul className="flex gap-6 items-center text-white">
                        {/* <li className="font-semibold relative after:content-[''] after:absolute after:size-1 after:bg-red-500 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1">
                    Home
                </li> */}
                        <li className="font-semibold">Home</li>
                        <li>About</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
