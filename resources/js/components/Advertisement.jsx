import React from "react";

export default function AdvertisementComponent() {
    return (
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
    );
}
