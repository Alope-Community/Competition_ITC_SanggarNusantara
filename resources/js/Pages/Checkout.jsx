import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Checkout() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        amount: 0,
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute(
            "data-client-key",
            "SB-Mid-client-DfZFhqjpc0UT0_LU"
        );
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("/api/midtrans/token", formData);
        window.snap.pay(data.token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                }
            />
            <input
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                }
            />
            <button type="submit">Pay</button>
        </form>
    );
}
