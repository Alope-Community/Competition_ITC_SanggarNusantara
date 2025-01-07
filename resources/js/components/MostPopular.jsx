import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function MostPopularComponent(oldestNews) {
    return (
        <div className="w-full text-gray-100">
            <div className="mb-6">
                <div className="p-4 bg-red-500">
                    <h2 className="text-lg font-bold text-gray-50">
                        Paling Populer
                    </h2>
                </div>
                <ul className="post-number">
                    {oldestNews.oldestNews.map((news, index) => (
                        <li
                            className={`${
                                index < 4 ? "border-b" : ""
                            } border-slate-700 hover:bg-red-500/40 hover:border-red-600`}
                        >
                            <Link
                                className="md:text-lg md:font-bold font-medium px-6 py-3 flex flex-row items-center"
                                href={`/news/${news.slug}`}
                            >
                                {news.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
