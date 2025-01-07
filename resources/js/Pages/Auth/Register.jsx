import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { router } from "@inertiajs/react";

import {
    IconHome2Fill,
    IconKeyFill,
    IconLockFill,
    IconMailFill,
    IconPersonFill,
} from "justd-icons";
import { ToastContainer, toast } from "react-toastify";

// components
import LoaderComponent from "../../components/Loader";

// tools
import removeQueryParam from "../../tools/removeQueryParam";

export default function Register() {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // Handle authenticated to register page
    const { auth } = usePage().props;
    useEffect(() => {
        if (auth.user) {
            window.location.replace("/");
        }
    }, [auth]);

    const handleRegister = (e) => {
        e.preventDefault();

        // Validasi input
        if (
            !formData.email ||
            !formData.password ||
            !formData.password_confirmation
        ) {
            toast.error("Semua field harus diisi!");
            return;
        }

        // Validasi format email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Format email tidak valid!");
            return;
        }

        // Validasi panjang password
        if (formData.password.length < 8) {
            toast.error("Password harus memiliki minimal 8 karakter!");
            return;
        }

        // Validasi kecocokan password
        if (formData.password !== formData.password_confirmation) {
            toast.error("Password dan konfirmasi password tidak sama!");
            return;
        }

        setIsLoadingSubmit(true);

        router.post("/register", formData);

        reset();
    };

    useEffect(() => {
        // Get the query parameters from the URL
        const params = new URLSearchParams(window.location.search);

        const messages = {
            successRegister: "Registrasi Gagal",
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
    }, []);

    const reset = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
    };

    if (isLoadingSubmit) return <LoaderComponent />;

    return (
        <>
            <ToastContainer theme="dark" />
            <div className="grid lg:grid-cols-2 text-gray-50">
                <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen bg-cover bg-center relative z-10 lg:block hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:to-black/10 after:from-black/60 after:-z-10">
                    <div className="border-l-4 border-red-600 py-5 pl-5 w-1/2 absolute bottom-20 left-0">
                        <h3 className="text-3xl font-semibold text-gray-50">
                            Sanggar Nusantara
                        </h3>
                        <p className="text-gray-200 text-sm mt-3">
                            Masuk untuk menjelajahi lebih dalam tentang kekayaan
                            seni dan budaya Nusantara. Bergabunglah bersama
                            komunitas yang melestarikan dan memajukan warisan
                            kita untuk generasi mendatang.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col lg:min-h-auto min-h-screen">
                    <div className="md:w-3/4 md:px-0 px-5">
                        <div className="mb-10">
                            <h1 className="text-5xl font-semibold uppercase">
                                Register{" "}
                                <span className="text-8xl text-red-500 -ml-3">
                                    .
                                </span>
                            </h1>
                            <p className="mt-1 text-sm text-gray-300 w-3/4">
                                Bergabunglah bersama Mari lestarikan dan
                                memajukan warisan kita untuk generasi mendatang.
                            </p>
                        </div>

                        <form method="POST" onSubmit={(e) => handleRegister(e)}>
                            <div className="mb-5">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <IconPersonFill className="text-red-500 size-5" />
                                    </span>
                                    <input
                                        type="text"
                                        className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600 outline-none"
                                        placeholder="Name"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <IconMailFill className="text-red-500 size-5" />
                                    </span>
                                    <input
                                        type="text"
                                        className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600 outline-none"
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="label">
                                    <span className="label-text">Password</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <IconKeyFill className="text-red-500 size-5" />
                                    </span>
                                    <input
                                        type="password"
                                        className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600 outline-none"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                password: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="label">
                                    <span className="label-text">
                                        Confirm Password
                                    </span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <IconLockFill className="text-red-500 size-5" />
                                    </span>
                                    <input
                                        type="password"
                                        className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600 outline-none"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                password_confirmation:
                                                    e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mt-10 text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-red-500 to-red-600 w-full py-3 text-white rounded hover:bg-gradient-to-l"
                                >
                                    Register
                                </button>
                                <p className="mt-4">
                                    Sudah punya akun?{" "}
                                    <Link
                                        href="/login"
                                        className="text-red-500 font-medium"
                                    >
                                        Login
                                    </Link>
                                </p>
                                <hr className="my-5 border-t border-gray-800" />
                                <p className="mt-3 text-sm">
                                    <Link
                                        href="/"
                                        className="inline-flex px-2 items-center justify-center gap-2 hover:border-b border-red-500 pb-1 text-gray-300"
                                    >
                                        <IconHome2Fill className="text-gray-300" />
                                        Kembali ke Beranda
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    <p className="absolute bottom-10 text-gray-300 italic text-sm md:block hidden">
                        Copyright &copy; 2024 by ALOPE
                    </p>
                </div>
            </div>
        </>
    );
}
