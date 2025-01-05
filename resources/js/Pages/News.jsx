import React from "react";

export default function News() {
    return (
        <>
            <main className="mt-10">
                <div className="container mx-auto grid grid-cols-3 gap-10">
                    {/* post */}
                    <div className="overflow-hidden order-1 col-span-2">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="flex-shrink max-w-full w-full px-3 pb-5">
                                <div className="relative hover-img max-h-98 overflow-hidden">
                                    {/*thumbnail*/}
                                    <a href="#" className="text-gray-50">
                                        <img
                                            className="max-w-full w-full mx-auto h-auto"
                                            src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
                                            alt="Image description"
                                        />
                                    </a>
                                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                        {/*title*/}
                                        <a href="#" className="text-gray-50">
                                            <h2 className="text-3xl font-bold capitalize text-white mb-3">
                                                Amazon Shoppers Are Ditching
                                                Designer Belts for This
                                                Best-Selling
                                            </h2>
                                        </a>
                                        <p className="text-gray-100 hidden sm:inline-block">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This very
                                            helpfull for generate default
                                            content..
                                        </p>
                                        {/* author and date */}
                                        <div className="pt-2">
                                            <div className="text-gray-100">
                                                <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                                Europe
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div className="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img
                                            className="max-w-full w-full mx-auto"
                                            src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="alt title"
                                        />
                                    </a>
                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 className="text-lg font-bold leading-tight mb-2">
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
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
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div className="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img
                                            className="max-w-full w-full mx-auto"
                                            src="https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="alt title"
                                        />
                                    </a>
                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 className="text-lg font-bold leading-tight mb-2">
                                            <a
                                                href="#"
                                                className="text-gray-50"
                                            >
                                                5 Tips to Save Money Booking
                                                Your Next Hotel Room
                                            </a>
                                        </h3>
                                        <p className="hidden md:block text-gray-200 leading-tight mb-1">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content.
                                        </p>
                                        <a
                                            className="text-gray-300 italic"
                                            href="#"
                                        >
                                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                                            Europe
                                        </a>
                                    </div>
                                </div>
                            </div>
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
            </main>
        </>
    );
}
