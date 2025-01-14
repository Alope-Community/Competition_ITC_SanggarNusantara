import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

// components
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import MostPopularNewsComponent from "../components/MostPopularNews";
import AdvertisementComponent from "../components/Advertisement";

import { IconCalendar2Fill } from "justd-icons";

// tools
import formatDate from "../tools/formatDate";
import strLimit from "../tools/strLimit";

export default function News() {
    const { news, oldestNews } = usePage().props;

    console.log(news);

    return (
        <>
            <NavbarComponent />

            <main className="pt-36">
                <div className="container mx-auto grid lg:grid-cols-3 gap-10 xl:px-0 md:px-8 px-2">
                    {/* post */}
                    <div className="overflow-hidden order-1 lg:col-span-2">
                        <div className="text-left">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                                    <IconCalendar2Fill className="text-white" />
                                </span>
                                <h3 className="md:text-4xl text-xl font-bold text-gray-200">
                                    Ragam Berita
                                </h3>
                            </div>
                            <p className="text-gray-300 md:text-base text-xs mt-2">
                                Jelajahi cerita dan informasi terkini tentang
                                kekayaan budaya Indonesia.
                            </p>
                        </div>
                        <hr className="my-5 border-gray-700" />
                        <div className="flex flex-row flex-wrap">
                            {news.map((data, index) =>
                                index == 0 ? (
                                    <div className="flex-shrink max-w-full w-full px-2 pb-5">
                                        <div className="relative hover-img max-h-98 overflow-hidden">
                                            {/*thumbnail*/}
                                            <Link
                                                href={`/news/${data.slug}`}
                                                className="text-gray-50"
                                            >
                                                <img
                                                    className="max-w-full w-full mx-auto lg:h-[600px] h-[400px] object-cover"
                                                    src={`https://alope.site/storage/news/${news.cover}`}
                                                    alt="Image description"
                                                />
                                            </Link>
                                            <div className="absolute lg:px-5 lg:pt-8 lg:pb-5 px-3 pb-3 bottom-0 w-full bg-gradient-cover">
                                                {/*title*/}
                                                <Link
                                                    href={`/news/${data.slug}`}
                                                    className="text-gray-50"
                                                >
                                                    <h2 className="md:text-3xl text-xl font-bold capitalize text-white mb-3">
                                                        {data.title}
                                                    </h2>
                                                </Link>
                                                <p className="text-gray-100 hidden sm:inline-block">
                                                    {strLimit(
                                                        data.description,
                                                        100
                                                    )}
                                                </p>
                                                {/* author and date */}
                                                <div className="pt-2">
                                                    <div className="text-gray-100">
                                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2 md:text-base text-xs" />
                                                        {formatDate(
                                                            data.created_at
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex-shrink max-w-full w-full sm:w-1/3 hover:bg-gray-900/30 rounded p-3 mb-4">
                                        <div className="grid md:grid-cols-1 grid-cols-2 items-center">
                                            <Link href={`/news/${data.slug}`}>
                                                <img
                                                    className="max-w-full w-full mx-auto lg:h-[200px] h-[150px] object-cover rounded"
                                                    src={`https://alope.site/storage/news/${news.cover}`}
                                                    alt="alt title"
                                                />
                                            </Link>
                                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                <h3 className="lg:text-lg font-bold leading-tight mb-2">
                                                    <Link
                                                        href={`/news/${data.slug}`}
                                                        className="text-gray-50 lg:text-base text-sm"
                                                    >
                                                        {data.title}
                                                    </Link>
                                                </h3>
                                                <p className="hidden md:block text-gray-200 leading-tight mb-1 lg:text-base text-sm">
                                                    {strLimit(
                                                        data.description,
                                                        100
                                                    )}
                                                </p>
                                                <Link
                                                    href={`/news/${data.slug}`}
                                                    className="text-gray-300 italic lg:text-base text-sm"
                                                >
                                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                    {formatDate(
                                                        data.created_at
                                                    )}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    {/* sidebar */}
                    <div className="order-2 relative">
                        <div className="sticky top-0 grid lg:grid-cols-1 md:grid-cols-2">
                            <MostPopularNewsComponent oldestNews={oldestNews} />
                            <AdvertisementComponent />
                        </div>
                    </div>
                </div>
            </main>

            <FooterComponent />
        </>
    );
}
