import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconCalendar,
    IconCalendar2Fill,
    IconCalendarFill,
    IconChevronRight,
    IconEye,
    IconHeart,
    IconHome1,
    IconHome1Fill,
    IconLocation,
    IconLocationFill,
    IconMessages,
    IconPlayFill,
    IconTicket,
} from "justd-icons";
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
            <nav className="fixed z-50 w-full backdrop-blur shadow-sm">
                <div className="container flex justify-between items-center mx-auto">
                    <div className="py-5">
                        <h5 className="text-2xl text-white">
                            Sanggar Nusantara
                        </h5>
                    </div>
                    <div className="border-b-2 py-5 border-red-500 px-14">
                        <ul className="flex gap-6 items-center text-white">
                            {/* <li className="font-semibold relative after:content-[''] after:absolute after:size-1 after:bg-red-500 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1">
                                Home
                            </li> */}
                            <li className="font-semibold">Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*  */}
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

            <main className="text-gray-100 py-20">
                <section className="text-center mt-28 container mx-auto">
                    <div>
                        <h3 className="text-4xl font-bold">Ragam Budaya</h3>
                        <p className="text-gray-300">
                            Indonesia dengan Keanekaragaman Budayanya
                        </p>
                    </div>
                    <div className="grid gap-7 grid-cols-4 mt-10">
                        <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-[700px] z-10 w-full rounded flex flex-col justify-between p-4 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex justify-between items-center text-left">
                                <p className="font-semibold italic text-xl">
                                    Tari Bali
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Kuningan, Jawa Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="text-5xl font-bold text-red-500">
                                    100+
                                </h5>
                                <p className="text-xl">
                                    Ragam Tari Tradisional
                                </p>
                                <p className="text-sm mt-3 text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nisi vitae enim totam in
                                    itaque, quasi adipisci rerum error!
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-[700px] z-10 w-full rounded flex flex-col justify-between p-4 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex justify-between items-center text-left">
                                <p className="font-semibold italic text-xl">
                                    Tari Bali
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Kuningan, Jawa Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="text-5xl font-bold text-red-500">
                                    100+
                                </h5>
                                <p className="text-xl">
                                    Ragam Tari Tradisional
                                </p>
                                <p className="text-sm mt-3 text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nisi vitae enim totam in
                                    itaque, quasi adipisci rerum error!
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-[700px] z-10 w-full rounded flex flex-col justify-between p-4 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex justify-between items-center text-left">
                                <p className="font-semibold italic text-xl">
                                    Tari Bali
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Kuningan, Jawa Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="text-5xl font-bold text-red-500">
                                    100+
                                </h5>
                                <p className="text-xl">
                                    Ragam Tari Tradisional
                                </p>
                                <p className="text-sm mt-3 text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nisi vitae enim totam in
                                    itaque, quasi adipisci rerum error!
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-[700px] z-10 w-full rounded flex flex-col justify-between p-4 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex justify-between items-center text-left">
                                <p className="font-semibold italic text-xl">
                                    Tari Bali
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Kuningan, Jawa Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="text-5xl font-bold text-red-500">
                                    100+
                                </h5>
                                <p className="text-xl">
                                    Ragam Tari Tradisional
                                </p>
                                <p className="text-sm mt-3 text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Nisi vitae enim totam in
                                    itaque, quasi adipisci rerum error!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
                <section className="mt-36 bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-screen z-10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:to-black/40 after:-z-10">
                    <div className="container mx-auto h-full flex items-center">
                        <div className="grid grid-cols-3 items-center h-full">
                            <div>
                                <h3 className="text-5xl font-semibold">
                                    Mari Kenali Keragaman <br /> Budaya
                                    Nusantara
                                </h3>
                                <p className="text-gray-300 mt-5 mb-7">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolore quam aperiam eum
                                    consectetur amet at sit deserunt,
                                    praesentium nisi asperiores, laudantium
                                    exercitationem? Dicta quasi ducimus
                                    voluptatibus itaque facilis eius laborum!
                                </p>
                                <a
                                    href=""
                                    className="group inline-flex items-center gap-2 hover:bg-red-500 rounded-full pr-4 duration-200"
                                >
                                    <span className="size-8 group-hover:rounded-r-none rounded-full bg-red-500 flex items-center justify-center duration-200">
                                        <IconPlayFill />
                                    </span>
                                    Lihat Video
                                </a>
                            </div>
                            <div className="col-span-2 text-right relative h-full">
                                <div className="absolute bottom-10 right-0">
                                    <h5 className="text-3xl font-semibold text-gray-200">
                                        Indonesia di Mata Dunia
                                    </h5>
                                    <div className="mt-10">
                                        <div className="py-4 cursor-pointer duration-200 border-r-4 border-red-500 hover:border-white pr-4 box-border">
                                            <p className="text-gray-300 text-right flex justify-end gap-1 items-center text-sm italic">
                                                <IconCalendarFill />
                                                28 Oktober 2025
                                            </p>
                                            <h5 className="text-xl font-semibold">
                                                Borobudur Menjadi Tempat Wisata
                                                Terbaik UNESCO
                                            </h5>
                                        </div>
                                        <div className="py-4 cursor-pointer duration-200 border-r-4 border-red-500 hover:border-white pr-4 box-border">
                                            <p className="text-gray-300 text-right flex justify-end gap-1 items-center text-sm italic">
                                                <IconCalendarFill />
                                                28 Oktober 2025
                                            </p>
                                            <h5 className="text-xl font-semibold">
                                                Bahasa Indonesia Resmi jadi
                                                Bahasa PBB
                                            </h5>
                                        </div>
                                        <div className="pt-4 cursor-pointer duration-200 border-r-4 border-red-500 hover:border-white pr-4 box-border pb-12">
                                            <p className="text-gray-300 text-right flex justify-end gap-1 items-center text-sm italic">
                                                <IconCalendarFill />
                                                28 Oktober 2025
                                            </p>
                                            <h5 className="text-xl font-semibold">
                                                Bali Jadi Tempat FIFA Word Cup
                                            </h5>
                                        </div>
                                    </div>
                                    <a
                                        href=""
                                        className="group inline-flex items-center gap-2 px-5 py-3 rounded bg-red-500 hover:bg-red-400"
                                    >
                                        Lihat Semua Berita
                                        <IconChevronRight className="group-hover:block hidden size-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-50">
                        Ragam Budaya
                    </h3>
                    <p className="text-gray-300">
                        Indonesia dengan Keanekaragaman Budayanya
                    </p>
                </div>
                <div className="grid lg:grid-cols-5 gap-10 items-center container mx-auto mt-10">
                    <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                        <img
                            src="https://warisannusantara.vercel.app/images/header/3.jpg"
                            alt=""
                            className="object-cover h-full w-full"
                            data-aos-once="true"
                            data-aos="fade-left"
                        />
                    </div>
                    <div
                        className="lg:col-span-3"
                        data-aos-once="true"
                        data-aos="fade-right"
                    >
                        <h5 className="text-red-500 font-semibold mb-2 md:text-base text-sm">
                            RAGAM BERITA
                        </h5>
                        <span>
                            <h2 className="font-bold md:text-3xl text-gray-50 text-xl">
                                INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA
                                YANG MENDUNIA
                            </h2>
                        </span>
                        <p className="text-gray-200 mt-5 md:text-base text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Blanditiis quasi tempore incidunt architecto
                            maxime dolore quo? Nihil laborum saepe et, officia
                            laboriosam accusantium dicta eius unde, eos,
                            quisquam hic deserunt.
                        </p>
                        <div className="flex gap-5 mt-10 text-gray-300 md:text-base text-sm">
                            <span className="flex gap-2 items-center">
                                <IconEye />
                                <small>2.000 views</small>
                            </span>
                            <span className="flex gap-2 items-center">
                                <IconHeart />
                                <small>2.000 suka</small>
                            </span>
                            <span className="flex gap-2 items-center">
                                <IconMessages />
                                <small>2.000 komentar</small>
                            </span>
                        </div>
                    </div>
                </div>

                {/*  */}

                <section class="lg:grid hidden grid-cols-4 gap-10 container mx-auto mt-10">
                    <div>
                        <img
                            src="https://warisannusantara.vercel.app/images/festivalbali.jpeg"
                            alt="news1"
                            class="h-[250px] object-cover w-full rounded"
                        />
                        <a href="/news/read">
                            <h3 class="mt-3 text-xl font-bold dark:text-gray-200">
                                Bali Arts Festival
                            </h3>
                        </a>
                        <div class="my-5 flex gap-5">
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                                <small>Ilham Hafidz</small>
                            </span>
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                                </svg>
                                <small>07 Des 2023</small>
                            </span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                            Setiap tahun, Festival Seni Bali menyoroti kekayaan
                            budaya dengan durasi sebulan, memamerkan seni,
                            musik, tarian, danliteratur Bali....
                        </p>
                    </div>
                    {/*  */}
                    <div>
                        <img
                            src="https://warisannusantara.vercel.app/images/dalangcilik.jpg"
                            alt="news2"
                            class="h-[250px] object-cover w-full rounded"
                        />
                        <a href="/news/read">
                            <h3 class="mt-3 text-xl font-bold dark:text-gray-200">
                                Festival Dalang Cilik
                            </h3>
                        </a>
                        <div class="my-5 flex gap-5">
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                                <small>Ilham Hafidz</small>
                            </span>
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                                </svg>
                                <small>07 Des 2023</small>
                            </span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                            Sepuluh dalang cilik di Semarang tampil dalam
                            Festival Dalang Cilik, Rabu (22/11), di Gedung Ki
                            Narto Sabdo, Taman Budaya Raden Saleh....
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://warisannusantara.vercel.app/images/babarit.jpeg"
                            alt="news3"
                            class="h-[250px] object-cover w-full rounded"
                        />
                        <a href="/news/read">
                            <h3 class="mt-3 text-xl font-bold dark:text-gray-200">
                                Festival Babarit
                            </h3>
                        </a>
                        <div class="my-5 flex gap-5">
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                                <small>Ilham Hafidz</small>
                            </span>
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                                </svg>
                                <small>07 Des 2023</small>
                            </span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                            Tradisi Babarit di Kuningan untuk perayaan
                            Milangkala ke-524 (28/8/2022) menonjolkan nilai
                            syukur, pelestarian alam, dan berbagi....
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://warisannusantara.vercel.app/images/babarit.jpeg"
                            alt="news3"
                            class="h-[250px] object-cover w-full rounded"
                        />
                        <a href="/news/read">
                            <h3 class="mt-3 text-xl font-bold dark:text-gray-200">
                                Festival Babarit
                            </h3>
                        </a>
                        <div class="my-5 flex gap-5">
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                                <small>Ilham Hafidz</small>
                            </span>
                            <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                                </svg>
                                <small>07 Des 2023</small>
                            </span>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                            Tradisi Babarit di Kuningan untuk perayaan
                            Milangkala ke-524 (28/8/2022) menonjolkan nilai
                            syukur, pelestarian alam, dan berbagi....
                        </p>
                    </div>
                </section>
            </section>

            <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 text-center mt-20 mx-auto md:px-10 px-5">
                <p className="text-white font-semibold lg:text-3xl md:text-2xl">
                    “Keberagaman suku dan budaya Indonesia ini menjadi kekayaan{" "}
                    <br /> besar bangsa sekaligus juga kekuatan besar,{" "}
                    <br className="lg:block inline" /> bukan menjadi kelemahan.”
                </p>
                <h4 className="font-semibold mt-10 text-xl text-white">
                    Joko Widodo
                </h4>
                <small className="text-white">
                    Presiden Republik Indonesia
                </small>
            </section>

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
        </>
    );
}

export default Layout;
