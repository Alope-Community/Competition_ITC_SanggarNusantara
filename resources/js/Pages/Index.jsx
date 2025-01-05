import React, { useState, useEffect, useRef } from "react";

function Layout() {
    const images = [
        {
            title: "Sanggar Nusantara",
            description:
                "Sanggar Nusantara Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui alias nam dignissimos, aut, magnam eligendi expedita, cum maxime quaerat tempora error aperiam minus? Expedita sunt aliquam commodi placeat, fugit labore!",
            image: "https://images.unsplash.com/photo-1731983623952-1eb73449cfbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Tari Kecak",
            description:
                "Tari Kecak Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui alias nam dignissimos, aut, magnam eligendi expedita, cum maxime quaerat tempora error aperiam minus? Expedita sunt aliquam commodi placeat, fugit labore!",
            image: "https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Rumah Susun",
            description:
                "Rumah Susun Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui alias nam dignissimos, aut, magnam eligendi expedita, cum maxime quaerat tempora error aperiam minus? Expedita sunt aliquam commodi placeat, fugit labore!",
            image: "https://images.unsplash.com/photo-1728562105573-0b33c5d4dd95?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const [loadingWidth, setLoadingWidth] = useState(0);
    const intervalRef = useRef(null); // Untuk menyimpan ID interval

    // Fungsi untuk memulai interval otomatis
    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFadeIn(true);
                setLoadingWidth(0); // Reset loading bar
            }, 500); // Fade-out duration
        }, 5000); // Interval otomatis
    };

    // Fungsi untuk menghentikan interval
    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        // Mulai interval otomatis saat komponen dimuat
        startInterval();

        // Bersihkan interval saat komponen di-unmount
        return () => stopInterval();
    }, []);

    useEffect(() => {
        // Jalankan loading bar secara progresif
        const loadingInterval = setInterval(() => {
            setLoadingWidth((prev) => (prev >= 100 ? 0 : prev + 0.5));
        }, 25);

        return () => clearInterval(loadingInterval);
    }, [currentImage]);

    // Fungsi untuk mengganti gambar secara manual
    const changeImageManually = (index) => {
        stopInterval(); // Hentikan interval otomatis
        setFadeIn(false); // Fade out sebelum perubahan
        setTimeout(() => {
            setCurrentImage(index); // Ganti gambar
            setFadeIn(true); // Fade in setelah perubahan
            setLoadingWidth(0); // Reset loading bar
            startInterval(); // Mulai ulang interval otomatis
        }, 500);
    };

    return (
        <>
            <header
                className={`h-screen bg-cover bg-center relative z-10 transition-opacity duration-500 ${
                    fadeIn ? "opacity-100" : "opacity-30"
                } after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:to-black/30 after:from-black after:-z-10`}
                style={{
                    backgroundImage: `url(${images[currentImage].image})`,
                }}
            >
                <div className="container mx-auto h-full flex flex-col justify-center relative">
                    <h1 className="font-medium text-8xl text-white">
                        Sanggar <br />{" "}
                        <span className="text-9xl font-bold text-red-500 ">
                            NUSANTARA
                        </span>
                    </h1>

                    <div className="absolute left-0 bottom-14 flex flex-row items-end justify-between">
                        <div className="w-1/2">
                            <p className="text-white">
                                {images[currentImage].description}
                            </p>
                        </div>

                        {/* Loading Bar */}
                        <div className="w-[300px] h-1 bg-gray-800">
                            <div
                                className="h-full bg-red-500 transition-all duration-[50ms]"
                                style={{ width: `${loadingWidth}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="backdrop-blur-xl absolute right-10 top-1/2 -translate-y-1/2 p-3 flex flex-col gap-8 justify-center items-center">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => changeImageManually(index)}
                            className="group cursor-pointer flex items-center relative"
                        >
                            <p
                                className={`absolute -left-4 -translate-x-full whitespace-nowrap text-sm text-gray-300 ${
                                    images[currentImage].title === image.title
                                        ? "block"
                                        : "hidden"
                                }`}
                            >
                                {image.title}
                            </p>
                            <span className="text-3xl font-semibold text-white">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>
            </header>
        </>
    );
}

export default Layout;
