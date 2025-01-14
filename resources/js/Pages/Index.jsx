import React, { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

import {
    IconArchive2Fill,
    IconCalendar2Fill,
    IconCalendarFill,
    IconChevronRight,
    IconGlobe2Fill,
    IconGlobeFill,
    IconLocationFill,
    IconPlayFill,
} from "justd-icons";
import { ToastContainer, toast } from "react-toastify";

// components
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

// tools
import formatDate from "../tools/formatDate";
import removeQueryParam from "../tools/removeQueryParam";

function LandingPage() {
    const images = [
        {
            title: "Upacara Ngaben",
            description:
                "Sanggar Nusantara adalah wadah pelestarian seni dan budaya Indonesia. Di sini, tradisi dan kreativitas bertemu untuk menghadirkan warisan budaya yang terus hidup dan menginspirasi generasi penerus.",
            image: "https://images.unsplash.com/photo-1511164657592-59a452023479?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Bonang",
            description:
                "Sanggar Nusantara adalah wadah pelestarian seni dan budaya Indonesia. Di sini, tradisi dan kreativitas bertemu untuk menghadirkan warisan budaya yang terus hidup dan menginspirasi generasi penerus.",
            image: "https://images.unsplash.com/photo-1616352180164-01ce1a420b83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Arsitektur",
            description:
                "Sanggar Nusantara adalah wadah pelestarian seni dan budaya Indonesia. Di sini, tradisi dan kreativitas bertemu untuk menghadirkan warisan budaya yang terus hidup dan menginspirasi generasi penerus.",
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
        // Get the query parameters from the URL
        const params = new URLSearchParams(window.location.search);

        const messages = {
            successLogin: "Login Berhasil",
            successSubscribe: "Berlangganan Berhasil",
            successUnsubscribe: "Berhenti Berlangganan Berhasil",
        };

        // Iterate over the messages and handle accordingly
        Object.keys(messages).forEach((key) => {
            const param = params.get(key);
            if (param) {
                const toastType =
                    param === "false" ? toast.error : toast.success;
                toastType(messages[key]);
                removeQueryParam(key); // Remove the query param after showing the message
            }
        });

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

    const { news, indonesiaInTheEyesOfWorld, events } = usePage().props;

    return (
        <>
            <ToastContainer theme="dark" />
            <NavbarComponent />
            {/*  */}
            <header
                className={`h-screen bg-cover bg-center relative z-10 transition-opacity duration-500 ${
                    fadeIn ? "opacity-100" : "opacity-30"
                } after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:to-black/30 after:from-black after:-z-10`}
                style={{
                    backgroundImage: `url(${images[currentImage].image})`,
                }}
            >
                <div className="container mx-auto h-full flex flex-col justify-center relative xl:px-0 md:px-10 px-0">
                    <h1 className="font-medium text-4xl md:text-6xl lg:text-8xl text-white md:text-left text-center">
                        Sanggar <br />{" "}
                        <span className="text-5xl md:text-7xl lg:text-9xl font-bold text-red-500 ">
                            NUSANTARA
                        </span>
                    </h1>

                    <div className="absolute lg:left-0 md:left-10 left-0 bottom-14 flex lg:flex-row flex-col lg:items-end items-start justify-between xl:px-0 sm:px-10 md:px-5 px-0">
                        <div className="lg:w-1/2 w-5/6 md:mx-0 mx-auto">
                            <p className="text-white md:text-base text-xs md:text-left text-center">
                                {images[currentImage].description}
                            </p>
                        </div>

                        {/* Loading Bar */}
                        <div className="w-[300px] lg:mt-0 mt-10 md:mx-0 mx-auto h-1 bg-gray-800">
                            <div
                                className="h-full bg-red-500 transition-all duration-[50ms]"
                                style={{ width: `${loadingWidth}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="backdrop-blur-xl absolute lg:right-10 right-7 top-1/2 -translate-y-1/2 p-3 hidden md:flex flex-col gap-8 justify-center items-center">
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
                            <span className="text-2xl lg:text-3xl font-semibold text-white">
                                0{index + 1}
                            </span>
                        </div>
                    ))}
                </div>
            </header>

            <main className="text-gray-100 py-20">
                <section className="text-center mt-28 container mx-auto xl:px-0 md:px-10 px-3">
                    <div>
                        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                            <IconArchive2Fill className="text-white" />
                        </span>
                        <h3 className="md:text-4xl text-xl font-bold mt-2">
                            Ragam Budaya
                        </h3>
                        <p className="text-gray-300 md:text-base text-xs">
                            Indonesia dengan Keanekaragaman Budayanya
                        </p>
                    </div>

                    <hr className="w-2/3 mx-auto border-gray-700 my-7" />

                    <div className="grid md:gap-7 gap-3 lg:grid-cols-4 grid-cols-2 mt-10">
                        <div className="bg-[url(https://warisannusantara.vercel.app/images/explore/2.jpg)] bg-cover relative bg-center md:h-[700px] h-[400px] z-10 w-full rounded flex flex-col justify-between md:p-4 p-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-left">
                                <p className="font-semibold italic md:text-xl leading-5 md:mb-0 mb-3">
                                    Kebaya Sunda
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Jawa Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="md:text-5xl text-3xl font-bold text-red-500">
                                    38
                                </h5>
                                <p className="md:text-xl">Pakaian Adat</p>
                                <p className="md:text-sm text-xs md:block hidden mt-3 text-gray-300">
                                    Setiap desain memiliki makna mendalam yang
                                    menggambarkan tradisi serta nilai-nilai
                                    masyarakatnya.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://images.unsplash.com/photo-1518894347072-3bfedb006095?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center md:h-[700px] h-[400px] z-10 w-full rounded flex flex-col justify-between md:p-4 p-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-left">
                                <p className="font-semibold italic md:text-xl leading-5 md:mb-0 mb-3">
                                    Rumah gadang bagonjong enam
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Sumatra Barat
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="md:text-5xl text-3xl font-bold text-red-500">
                                    34
                                </h5>
                                <p className="md:text-xl">
                                    Rumah Adat / Arsitektur
                                </p>
                                <p className="md:text-sm text-xs md:block hidden mt-3 text-gray-300">
                                    Mencerminkan identitas budaya setiap daerah,
                                    dengan desain arsitektur yang penuh makna
                                    serta fungsi yang selaras dengan nilai
                                    tradisional.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://warisannusantara.vercel.app/images/festivalbali.jpeg)] bg-cover relative bg-center md:h-[700px] h-[400px] z-10 w-full rounded flex flex-col justify-between md:p-4 p-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-left">
                                <p className="font-semibold italic md:text-xl leading-5 md:mb-0 mb-3">
                                    Tari Cokek
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Jakarta
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="md:text-5xl text-3xl font-bold text-red-500">
                                    3000+
                                </h5>
                                <p className="md:text-xl">Tari Tradisional</p>
                                <p className="md:text-sm text-xs md:block hidden mt-3 text-gray-300">
                                    Cerminan kekayaan budaya, menghadirkan
                                    keindahan gerak dan makna yang mendalam
                                    dalam setiap langkahnya.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[url(https://images.unsplash.com/photo-1655802437200-ddea124855f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center md:h-[700px] h-[400px] z-10 w-full rounded flex flex-col justify-between md:p-4 p-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-black/0 after:-z-10">
                            <div className="flex md:flex-row flex-col justify-between md:items-center items-start text-left">
                                <p className="font-semibold italic md:text-xl leading-5 md:mb-0 mb-3">
                                    Ngaben
                                </p>
                                <p className="flex text-xs items-center gap-1 text-gray-200">
                                    <IconLocationFill className="size-3" />
                                    Bali
                                </p>
                            </div>
                            <div className="text-left">
                                <h5 className="md:text-5xl text-3xl font-bold text-red-500">
                                    37
                                </h5>
                                <p className="md:text-xl">Upacara Adat</p>
                                <p className="md:text-sm text-xs md:block hidden mt-3 text-gray-300">
                                    Mencerminkan nilai-nilai luhur, tradisi, dan
                                    kepercayaan yang menjadikan setiap upacara
                                    penuh makna dan simbolisme budaya.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
                <section className="mt-36 bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover relative bg-center h-screen z-10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:to-black/40 after:-z-10">
                    <div className="container mx-auto h-full flex items-center xl:px-0 md:px-10 px-3">
                        <div className="grid lg:grid-cols-3 items-center h-full">
                            <div>
                                <h3 className="md:text-5xl text-2xl font-semibold">
                                    Mari Kenali Keragaman <br /> Budaya
                                    Nusantara
                                </h3>
                                <p className="text-gray-300 mt-5 mb-7 md:text-base text-xs">
                                    Jelajahi kekayaan budaya Indonesia yang
                                    penuh dengan keunikan, tradisi, dan sejarah.
                                    Dari Sabang hingga Merauke, setiap daerah
                                    menyimpan cerita dan warisan yang tak
                                    ternilai.
                                </p>
                                <a
                                    href=""
                                    className="group inline-flex items-center gap-2 hover:bg-red-500 rounded-full pr-4 duration-200 md:text-base text-sm"
                                >
                                    <span className="md:size-8 size-6 group-hover:rounded-r-none rounded-full bg-red-500 flex items-center justify-center duration-200">
                                        <IconPlayFill />
                                    </span>
                                    Lihat Video
                                </a>
                            </div>
                            <div className="lg:col-span-2 lg:text-right relative h-full">
                                <div className="absolute bottom-10 lg:right-0 lg:left-auto left-0">
                                    <h5 className="md:text-3xl text-xl font-semibold text-gray-200 inline-flex gap-2 items-center">
                                        <IconGlobe2Fill className="md:size-7 size-5 text-red-500" />
                                        Indonesia di Mata Dunia
                                    </h5>
                                    <div className="lg:mt-10 md:mt-5 mt-3 md:w-[500px] w-full">
                                        {indonesiaInTheEyesOfWorld.map(
                                            (news, index) => (
                                                <div
                                                    key={index}
                                                    className="md:py-4 py-2 cursor-pointer duration-200 lg:border-r-4 lg:border-l-0 border-l-4 border-red-500 hover:border-white lg:pr-4 pr-0 lg:pl-0 pl-4 box-border"
                                                >
                                                    <Link
                                                        href={`/news/${news.slug}`}
                                                    >
                                                        <p className="text-gray-300 text-right flex lg:justify-end gap-1 items-center text-sm italic">
                                                            <IconCalendarFill />
                                                            {formatDate(
                                                                news.created_at
                                                            )}
                                                        </p>
                                                        <h5 className="md:text-xl text-sm font-semibold">
                                                            {news.title}
                                                        </h5>
                                                    </Link>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <Link
                                        href="/news"
                                        className="group inline-flex items-center gap-2 md:px-5 md:py-3 px-3 py-2 md:text-base text-sm rounded bg-red-500 hover:bg-red-400"
                                    >
                                        Lihat Semua Berita
                                        <IconChevronRight className="group-hover:block hidden size-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section>
                <div className="text-center">
                    <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                        <IconArchive2Fill className="text-white" />
                    </span>
                    <h3 className="md:text-4xl text-xl font-bold mt-2 text-gray-200">
                        Kabar Budaya
                    </h3>
                    <p className="text-gray-300 md:text-base text-xs">
                        Jelajahi cerita dan informasi terkini tentang kekayaan
                        budaya Indonesia.
                    </p>
                </div>

                <hr className="w-2/3 mx-auto border-gray-700 my-5" />

                <section class="grid lg:grid-cols-4 md:grid-cols-2 xl:gap-10 md:gap-7 sm:gap-4 gap-10 container mx-auto mt-4 xl:px-0 md:px-10 px-3">
                    {news.map((data, index) =>
                        index == 0 ? (
                            <div
                                key={index}
                                className="lg:col-span-4 col-span-2 md:grid hidden lg:grid-cols-5 gap-10 items-center container mx-auto mt-10"
                            >
                                <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
                                    <img
                                        src={data.cover}
                                        alt={`News Cover ${data.slug}`}
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
                                    <Link href={`/news/${data.slug}`}>
                                        <span>
                                            <h2 className="font-bold md:text-3xl text-gray-50">
                                                {data.title}
                                            </h2>
                                        </span>
                                    </Link>
                                    <p className="text-gray-200 mt-5 md:text-base text-xs">
                                        {data.description}
                                    </p>
                                    <div className="flex gap-5 lg:mt-10 mt-4 text-gray-300 md:text-base text-sm">
                                        <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                            <IconCalendarFill className="size-5" />
                                            <small>
                                                {formatDate(data.created_at)}
                                            </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={index}>
                                <img
                                    src={data.cover}
                                    alt={`News Cover ${data.slug}`}
                                    class="h-[250px] object-cover w-full rounded"
                                />
                                <Link href={`/news/${data.slug}`}>
                                    <h3 class="mt-3 text-xl font-bold dark:text-gray-200">
                                        {data.title}
                                    </h3>
                                </Link>
                                <div class="lg:my-5 my-3 flex gap-5">
                                    <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                        <IconCalendarFill className="size-5" />
                                        <small>
                                            {formatDate(data.created_at)}
                                        </small>
                                    </span>
                                </div>
                                <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                                    {data.description}
                                </p>
                            </div>
                        )
                    )}
                </section>
            </section>

            <section className="mt-36">
                <div className="text-center">
                    <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-bl from-red-500 to-red-600 size-10">
                        <IconCalendar2Fill className="text-white" />
                    </span>
                    <h3 className="md:text-4xl text-xl font-bold mt-2 text-gray-200">
                        Ragam Event
                    </h3>
                    <p className="text-gray-300 md:text-base text-xs">
                        Jelajahi cerita dan informasi terkini tentang kekayaan
                        budaya Indonesia.
                    </p>
                </div>

                <hr className="w-2/3 mx-auto border-gray-700 my-5" />

                <section class="grid md:grid-cols-2 lg:gap-10 md:gap-7 gap-10 container mx-auto mt-4 xl:px-0 md:px-10 px-3">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-5 gap-5 items-center"
                        >
                            <div className="w-full rounded-md overflow-hidden lg:col-span-2">
                                <img
                                    src={`https://alope.site/storage/${event.banner}`}
                                    alt={`Event Cover ${event.slug}`}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="lg:col-span-3">
                                <Link href={`/events/${event.slug}`}>
                                    <span>
                                        <h2 className="font-bold xl:text-3xl md:text-2xl text-gray-50 text-xl">
                                            {event.title}
                                        </h2>
                                    </span>
                                </Link>
                                <p className="text-gray-200 mt-5 md:text-base text-[12px]">
                                    {event.description}
                                </p>
                                <div className="flex flex-col gap-2 mt-5 text-gray-300 md:text-base text-sm">
                                    <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                        <IconCalendarFill className="size-5" />
                                        <small>
                                            {`${formatDate(event.started)} -
                                                ${formatDate(event.ended)}`}
                                        </small>
                                    </span>
                                    <span class="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                        <IconLocationFill className="size-5" />
                                        <small>{event.location}</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </section>

            <section className="bg-gradient-to-r from-red-500 to-red-600 py-20 text-center mt-20 mx-auto md:px-10 px-3">
                <p className="text-white font-semibold lg:text-3xl md:text-2xl">
                    “Keberagaman suku dan budaya Indonesia ini menjadi kekayaan{" "}
                    <br className="lg:block hidden" /> besar bangsa sekaligus
                    juga kekuatan besar, <br className="lg:block hidden" />{" "}
                    bukan menjadi kelemahan.”
                </p>
                <h4 className="font-semibold mt-10 text-xl text-white">
                    Joko Widodo
                </h4>
                <small className="text-white">
                    Presiden ke-7 Republik Indonesia
                </small>
            </section>

            <FooterComponent />
        </>
    );
}

export default LandingPage;
