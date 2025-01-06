import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Link, usePage } from "@inertiajs/inertia-react";
import formatDate from "../tools/formatDate";
import strLimit from "../tools/strLimit";

export default function News() {
    const { news } = usePage().props;

    console.log(news);

    return (
        <>
            <NavbarComponent />

            <main className="pt-36">
                <div className="container mx-auto grid grid-cols-3 gap-10">
                    {/* post */}
                    <div className="overflow-hidden order-1 col-span-2">
                        <div className="flex flex-row flex-wrap -mx-3">
                            {news.map((data, index) =>
                                index == 0 ? (
                                    <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                        <div className="relative hover-img max-h-98 overflow-hidden">
                                            {/*thumbnail*/}
                                            <Link
                                                href={`/news/${data.slug}`}
                                                className="text-gray-50"
                                            >
                                                <img
                                                    className="max-w-full w-full mx-auto h-[600px] object-cover"
                                                    src={data.cover}
                                                    alt="Image description"
                                                />
                                            </Link>
                                            <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                                {/*title*/}
                                                <Link
                                                    href={`/news/${data.slug}`}
                                                    className="text-gray-50"
                                                >
                                                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
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
                                                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                        {formatDate(
                                                            data.created_at
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                        <div className="flex flex-row sm:block hover-img">
                                            <Link href={`/news/${data.slug}`}>
                                                <img
                                                    className="max-w-full w-full mx-auto h-[200px] object-cover"
                                                    src={data.cover}
                                                    alt="alt title"
                                                />
                                            </Link>
                                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                                <h3 className="text-lg font-bold leading-tight mb-2">
                                                    <Link
                                                        href={`/news/${data.slug}`}
                                                        className="text-gray-50"
                                                    >
                                                        {data.title}
                                                    </Link>
                                                </h3>
                                                <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                                    {strLimit(
                                                        data.description,
                                                        100
                                                    )}
                                                </p>
                                                <Link
                                                    href={`/news/${data.slug}`}
                                                    className="text-gray-300 italic"
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
                        <div className="sticky top-0">
                            <div className="w-full text-gray-100">
                                <div className="mb-6">
                                    <div className="p-4 bg-red-500">
                                        <h2 className="text-lg font-bold text-gray-50">
                                            Most Popular
                                        </h2>
                                    </div>
                                    <ul className="post-number">
                                        <li className="border-b border-slate-700 hover:bg-red-500/40">
                                            <a
                                                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                                href="#"
                                            >
                                                Why the world would end without
                                                political polls
                                            </a>
                                        </li>
                                        <li className="border-b border-slate-700 hover:bg-red-500/40">
                                            <a
                                                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                                href="#"
                                            >
                                                Meet The Man Who Designed The
                                                Ducati Monster
                                            </a>
                                        </li>
                                        <li className="border-b border-slate-700 hover:bg-red-500/40">
                                            <a
                                                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                                href="#"
                                            >
                                                2020 Audi R8 Spyder spy shots
                                                release
                                            </a>
                                        </li>
                                        <li className="border-b border-slate-700 hover:bg-red-500/40">
                                            <a
                                                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                                href="#"
                                            >
                                                Lamborghini makes Huracán GT3
                                                racer faster for 2019
                                            </a>
                                        </li>
                                        <li className="border-b border-slate-700 hover:bg-red-500/40">
                                            <a
                                                className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                                                href="#"
                                            >
                                                ZF plans $14 billion autonomous
                                                vehicle push, concept van
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-sm py-6 sticky">
                                <div className="w-full text-center">
                                    <a className="uppercase" href="#">
                                        Advertisement
                                    </a>
                                    <a href="#" className="text-gray-50">
                                        <img
                                            className="mx-auto"
                                            src="https://warisannusantara.vercel.app/images/news/kabarBudaya.png"
                                            alt="advertisement area"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/* <div className="grid grid-cols-4 container mx-auto mt-5">
                    <div className="px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img
                                    className="max-w-full w-full mx-auto"
                                    src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
                                    alt="alt title"
                                />
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href="#" className="text-gray-50">
                                        5 Tips to Save Money Booking Your Next
                                        Hotel Room
                                    </a>
                                </h3>
                                <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </p>
                                <a className="text-gray-300 italic" href="#">
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                    Europe
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img
                                    className="max-w-full w-full mx-auto"
                                    src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
                                    alt="alt title"
                                />
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href="#" className="text-gray-50">
                                        5 Tips to Save Money Booking Your Next
                                        Hotel Room
                                    </a>
                                </h3>
                                <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </p>
                                <a className="text-gray-300 italic" href="#">
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                    Europe
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img
                                    className="max-w-full w-full mx-auto"
                                    src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
                                    alt="alt title"
                                />
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href="#" className="text-gray-50">
                                        5 Tips to Save Money Booking Your Next
                                        Hotel Room
                                    </a>
                                </h3>
                                <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </p>
                                <a className="text-gray-300 italic" href="#">
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                    Europe
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                        <div className="flex flex-row sm:block hover-img">
                            <a href="">
                                <img
                                    className="max-w-full w-full mx-auto"
                                    src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
                                    alt="alt title"
                                />
                            </a>
                            <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 className="text-lg font-bold leading-tight mb-2">
                                    <a href="#" className="text-gray-50">
                                        5 Tips to Save Money Booking Your Next
                                        Hotel Room
                                    </a>
                                </h3>
                                <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </p>
                                <a className="text-gray-300 italic" href="#">
                                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                    Europe
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>

            <FooterComponent />
        </>
    );
}
