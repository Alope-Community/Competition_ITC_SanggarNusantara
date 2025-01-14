import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/inertia-react";

import { ToastContainer, toast } from "react-toastify";
import { IconHome2Fill, IconKeyFill, IconMailFill } from "justd-icons";

// ccomponents
import LoaderComponent from "../../components/Loader";

// tools
import removeQueryParam from "../../tools/removeQueryParam";

export default function Login() {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle authenticated to login page
    const { auth } = usePage().props;
    useEffect(() => {
        if (auth.user) {
            window.location.replace("/");
        }
    }, [auth]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Validasi input
        if (!formData.email || !formData.password) {
            toast.error("Email dan password harus diisi!");
            return;
        }

        setIsLoadingSubmit(true);

        router.post("/login", formData, {
            onError: (errors) => {
                setIsLoadingSubmit(false);
                alert("Gagal login. Periksa kembali email dan password Anda."); // Atau tampilkan pesan error spesifik
            },
            onSuccess: () => {
                setIsLoadingSubmit(false);
                reset(); // Reset form jika diperlukan
            },
        });
    };

    useEffect(() => {
        // Get the query parameters from the URL
        const params = new URLSearchParams(window.location.search);

        const messages = {
            successLogin: "Login Gagal",
            successLogout: "Logout Berhasil",
            successRegister: "Registrasi Berhasil",
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
                <div className="flex items-center justify-center flex-col relative lg:min-h-auto min-h-screen">
                    <div className="md:w-3/4 md:px-0 px-5">
                        <div className="mb-10">
                            <h1 className="text-2xl md:text-5xl font-semibold uppercase">
                                Login{" "}
                                <span className="text-8xl text-red-500 -ml-3">
                                    .
                                </span>
                            </h1>
                            <p className="mt-1 text-xs md:text-sm text-gray-300 w-3/4">
                                Bergabunglah bersama Mari lestarikan dan
                                memajukan warisan kita untuk generasi mendatang.
                            </p>
                        </div>

                        <form
                            action=""
                            method="POST"
                            onSubmit={(e) => handleLogin(e)}
                        >
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
                                        value={formData.email}
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
                                        value={formData.password}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                password: e.target.value,
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
                                    Login
                                </button>
                                <p className="mt-4 md:text-base text-sm">
                                    Belum punya akun?{" "}
                                    <Link
                                        href="/register"
                                        className="text-red-500 font-medium"
                                    >
                                        Daftar
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
                <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen bg-cover bg-center relative lg:block hidden z-10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:to-black/10 after:from-black/60 after:-z-10">
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
            </div>
        </>
    );
}
