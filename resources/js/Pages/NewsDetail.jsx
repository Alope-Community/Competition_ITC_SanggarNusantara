import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

import { IconArrowLeftFill } from "justd-icons";

// components
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import MostPopularComponent from "../components/MostPopular";
import AdvertisementComponent from "../components/Advertisement";

export default function NewsDetail() {
    const { news, oldestNews } = usePage().props;

    return (
        <>
            <NavbarComponent />

            <main className="grid grid-cols-3 container mx-auto pt-36 gap-10">
                <div className="col-span-2 text-gray-50">
                    <Link
                        href="/news"
                        className="inline-flex gap-2 items-center bg-gray-900 hover:bg-black px-5 py-2 rounded shadow hover:shadow-none shadow-gray-700 hover:text-red-500"
                    >
                        <IconArrowLeftFill />
                        Kembali
                    </Link>
                    <h1 className="text-3xl font-semibold mb-5 mt-10">
                        {news.title}
                    </h1>
                    <img
                        src={news.cover}
                        alt="news cover"
                        className="w-full min-h-[400px] max-h-[500px] object-cover"
                    />
                    <div className="border-l-2 border-red-500 pl-3 py-5 mt-5 mb-10">
                        <p>{news.description}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: news.body }} />
                </div>
                <div className="relative">
                    <div className="sticky top-0">
                        <MostPopularComponent oldestNews={oldestNews} />
                        <AdvertisementComponent />
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}
