import React from "react";

import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconHome1Fill,
} from "justd-icons";

export default function FooterComponent() {
    return (
        <footer className="pt-16 pb-5 text-center text-gray-100">
            <span className="size-10 bg-red-500 inline-flex items-center justify-center rounded-full">
                <IconHome1Fill className="size-5" />
            </span>

            <h3 className="text-3xl font-semibold mb-5 mt-2">
                Sanggar Nusantara
            </h3>
            <ul className="flex justify-center gap-6 items-center text-white mb-5">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
            </ul>

            <div className="inline-flex gap-3 my-3">
                <span
                    className="bg-[#f09433] flex items-center justify-center size-10 rounded-full"
                    style={{
                        background:
                            "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        background:
                            "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                        background:
                            "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    }}
                >
                    <IconBrandInstagram className="size-6" />
                </span>
                <span className="bg-gradient-to-t from-[#015ddd] to-[#19aeff] flex items-center justify-center size-10 rounded-full">
                    <IconBrandFacebook className="size-6" />
                </span>
            </div>

            <hr className="w-5/6 border-t border-gray-700 mx-auto mt-5" />

            <p className="mt-7">Copyright &copy; by ALOPE</p>
        </footer>
    );
}
