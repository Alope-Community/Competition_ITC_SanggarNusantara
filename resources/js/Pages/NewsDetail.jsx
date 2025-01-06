import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

export default function NewsDetail() {
    const { news } = usePage().props;

    console.log(news);
    return (
        <>
            <NavbarComponent />

            <main className="grid grid-cols-3 container mx-auto pt-36 gap-10">
                <div className="col-span-2 text-gray-50">
                    <h1 className="text-3xl font-semibold mb-5">
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
                                            Meet The Man Who Designed The Ducati
                                            Monster
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
                                            Lamborghini makes Huracán GT3 racer
                                            faster for 2019
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
            </main>

            <FooterComponent />
        </>
    );
}
