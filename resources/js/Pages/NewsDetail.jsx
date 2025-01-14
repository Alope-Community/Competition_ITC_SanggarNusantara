import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

import { IconArrowLeftFill } from "justd-icons";

// components
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import MostPopularNewsComponent from "../components/MostPopularNews";
import AdvertisementComponent from "../components/Advertisement";

export default function NewsDetail() {
    const { news, oldestNews } = usePage().props;

    return (
        <>
            <NavbarComponent />

            <main className="grid lg:grid-cols-3 container mx-auto pt-36 gap-10 xl:px-0 md:px-10 px-2">
                <div className="lg:col-span-2 text-gray-50">
                    <Link
                        href="/news"
                        className="inline-flex gap-2 items-center bg-gray-900 hover:bg-black md:px-5 py-2 px-3 rounded shadow hover:shadow-none shadow-gray-700 hover:text-red-500 md:text-base text-xs"
                    >
                        <IconArrowLeftFill />
                        Kembali
                    </Link>
                    <h1 className="md:text-3xl text-2xl font-semibold mb-5 mt-10">
                        {news.title}
                    </h1>
                    <img
                        src={`https://alope.site/storage/news/${news.cover}`}
                        alt="news cover"
                        className="w-full md:min-h-[400px] md:max-h-[500px] min-h-[300px] max-h-[400px] object-cover"
                    />
                    <div className="border-l-2 border-red-500 pl-3 py-5 mt-5 mb-10 md:text-base text-sm">
                        <p>{news.description}</p>
                    </div>
                    <div
                        id="tiptap"
                        className="md:text-base text-sm"
                        dangerouslySetInnerHTML={{ __html: news.body }}
                    />
                </div>
                <div className="relative">
                    <div className="sticky top-0 grid lg:grid-cols-1 md:grid-cols-2">
                        <MostPopularNewsComponent oldestNews={oldestNews} />
                        <AdvertisementComponent />
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}
