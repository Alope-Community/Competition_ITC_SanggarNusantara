import { Link } from "@inertiajs/inertia-react";
import {
    IconKeyFill,
    IconLockFill,
    IconMailFill,
    IconPersonFill,
} from "justd-icons";
import React, { useState } from "react";

import { router } from "@inertiajs/react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();

        router.post("/register", formData);

        reset();
    };

    const reset = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
    };

    return (
        <div className="grid grid-cols-2 text-gray-50">
            <div className="bg-[url(https://images.unsplash.com/photo-1720518816836-e351848c5357?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen bg-cover bg-center relative z-10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:to-black/10 after:from-black/60 after:-z-10">
                <div className="border-l-4 border-red-500 py-5 pl-5 w-1/2 absolute bottom-20 left-0">
                    <h3 className="text-3xl font-semibold text-gray-50">
                        Sanggar Nusantara
                    </h3>
                    <p className="text-gray-200 text-sm mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur harum, ab dolorum quod nemo, recusandae
                        quia perferendis eligendi unde maxime corporis odio,
                        quam possimus tenetur velit illum repellendus eveniet
                        aut?
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="w-3/4">
                    <div className="mb-10">
                        <h1 className="text-5xl font-semibold uppercase">
                            Register{" "}
                            <span className="text-8xl text-red-500 -ml-3">
                                .
                            </span>
                        </h1>
                        <p className="mt-1 text-sm text-gray-300 w-3/4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quia beatae, quam dolore nemo ex eaque
                            perspiciatis mollitia libero
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
                                    className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600"
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
                                    className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600"
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
                                    className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600"
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
                                    className="pl-10 py-3 rounded w-full text-gray-100 bg-gray-900 shadow shadow-gray-600"
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
                        </div>
                    </form>
                </div>

                <p className="absolute bottom-10 text-gray-300 italic text-sm">
                    Copyright &copy; 2024 by ALOPE
                </p>
            </div>
        </div>
    );
}
