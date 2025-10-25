"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Profile from "../../../public/zarinrafah.jpg";
import Footer from "../Footer";

export default function ContactClient() {
        const [formData, setFormData] = useState({
                name: "",
                email: "",
                subject: "",
                message: "",
        });

        // ✅ Properly typed change handler
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        // ✅ Safe and properly encoded mailto link
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const { name, email, subject, message } = formData;

                const body = `
Name: ${name}
Email: ${email}

Message:
${message}
                `;

                const mailtoLink = `mailto:collabzarinrafah@gmail.com?subject=${encodeURIComponent(
                        subject || "New Message"
                )}&body=${encodeURIComponent(body)}`;

                // ✅ Open mail client safely
                window.location.href = mailtoLink;
        };

        return (
                <>
                        <section
                                className="bg-[#000000] text-white py-24 px-6 font-[Poppins]"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                                <div className="max-w-6xl mx-auto">
                                        {/* ===== Heading ===== */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.7, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className="text-center mb-12"
                                        >
                                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 tracking-tight">
                                                        Let’s start a project{" "}
                                                        <span className="text-[#FF5100]">together</span>
                                                </h2>
                                                <p className="text-gray-300 font-medium max-w-2xl mx-auto">
                                                        Got a project in mind or just want to say hi? Fill out the form or
                                                        send an email at{" "}
                                                        <a
                                                                href="mailto:collabzarinrafah@gmail.com"
                                                                className="text-[#FF5100] underline"
                                                        >
                                                                collabzarinrafah@gmail.com
                                                        </a>{" "}
                                                        and I’ll get back to you shortly.
                                                </p>
                                        </motion.div>

                                        {/* ===== Main Container ===== */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 60 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className="z-30 flex flex-col lg:flex-row gap-8 bg-[#1E1E1E] rounded-2xl p-2 md:p-4 shadow-lg"
                                        >
                                                {/* ===== Left Side ===== */}
                                                <div className="flex-1 bg-[#0f0f0f] border border-gray-800 p-8 rounded-2xl flex flex-col gap-8">
                                                        <div className="flex items-center gap-4">
                                                                <Image
                                                                        src={Profile}
                                                                        alt="Zarin Rafah"
                                                                        width={64}
                                                                        height={64}
                                                                        className="rounded-full border border-gray-800"
                                                                />
                                                        </div>

                                                        <motion.a
                                                                href="/#about"
                                                                whileHover={{ scale: 1.05 }}
                                                                className="inline-block bg-[#FF5100] text-white font-medium px-6 py-3 rounded-full transition hover:bg-[#e04a00] w-fit"
                                                        >
                                                                About Zarin Rafah
                                                        </motion.a>

                                                        <div className="mt-4 space-y-3 text-sm text-gray-300">
                                                                <p className="flex items-center gap-2">
                                                                        <MapPin size={18} className="text-[#FF5100]" /> Dhaka,
                                                                        Bangladesh
                                                                </p>
                                                                <p className="flex items-center gap-2">
                                                                        <Phone size={18} className="text-[#FF5100]" /> +880 1971-186878
                                                                </p>
                                                                <p className="flex items-center gap-2">
                                                                        <Mail size={18} className="text-[#FF5100]" />{" "}
                                                                        <a
                                                                                href="mailto:collabzarinrafah@gmail.com"
                                                                                className="underline hover:text-[#FF5100]"
                                                                        >
                                                                                collabzarinrafah@gmail.com
                                                                        </a>
                                                                </p>
                                                        </div>

                                                        <div className="text-gray-500 text-sm pt-6 border-t border-gray-800">
                                                                © 2025 Zarin Rafah. All rights reserved.
                                                        </div>
                                                </div>

                                                {/* ===== Right Side (Form) ===== */}
                                                <div className="flex-1 bg-[#0f0f0f] border border-gray-800 p-4 md:p-8 rounded-2xl shadow-sm">
                                                        <h3 className="text-lg font-semibold mb-6 text-white">
                                                                Get in Touch
                                                        </h3>

                                                        <form onSubmit={handleSubmit} className="space-y-4">
                                                                <div className="grid md:grid-cols-2 gap-4">
                                                                        <input
                                                                                type="text"
                                                                                name="name"
                                                                                placeholder="Your Name"
                                                                                value={formData.name}
                                                                                onChange={handleChange}
                                                                                required
                                                                                className="w-full p-3 rounded-lg border border-gray-800 bg-[#121212] text-white focus:outline-none focus:border-[#FF5100]"
                                                                        />
                                                                        <input
                                                                                type="email"
                                                                                name="email"
                                                                                placeholder="Your Email"
                                                                                value={formData.email}
                                                                                onChange={handleChange}
                                                                                required
                                                                                className="w-full p-3 rounded-lg border border-gray-800 bg-[#121212] text-white focus:outline-none focus:border-[#FF5100]"
                                                                        />
                                                                </div>

                                                                <input
                                                                        type="text"
                                                                        name="subject"
                                                                        placeholder="Subject"
                                                                        value={formData.subject}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="w-full p-3 rounded-lg border border-gray-800 bg-[#121212] text-white focus:outline-none focus:border-[#FF5100]"
                                                                />

                                                                <textarea
                                                                        name="message"
                                                                        placeholder="Type your message..."
                                                                        rows={5}
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                        required
                                                                        className="w-full p-3 rounded-lg border border-gray-800 bg-[#121212] text-white focus:outline-none focus:border-[#FF5100]"
                                                                ></textarea>

                                                                <motion.button
                                                                        whileHover={{ scale: 1.05 }}
                                                                        type="submit"
                                                                        className="bg-[#FF5100] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e04a00] transition w-full md:w-auto"
                                                                >
                                                                        Submit Now
                                                                </motion.button>
                                                        </form>
                                                </div>
                                        </motion.div>
                                </div>
                        </section>
                        <Footer />
                </>
        );
}
