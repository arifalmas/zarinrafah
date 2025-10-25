"use client";
import { motion } from "framer-motion";
import Footer from "../Footer";

export default function AboutPage() {
        return (
                <div className="flex flex-col min-h-screen bg-black text-white font-[Poppins]">
                        {/* Main Content */}
                        <main className="flex flex-1 items-center justify-center px-4">
                                <div className="max-w-7xl w-full text-center relative border border-dashed border-gray-800 rounded-2xl py-20">
                                        {/* Animated Rocket */}
                                        <motion.div
                                                className="flex justify-center mb-6"
                                                animate={{ y: [0, -12, 0] }}
                                                transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                }}
                                        >
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.8}
                                                        stroke="currentColor"
                                                        className="w-14 h-14 text-gray-300"
                                                >
                                                        <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M5.52 14.29a8.36 8.36 0 01.64-1.44 17.68 17.68 0 015.43-5.47 8.62 8.62 0 011.46-.66m0 0a8.38 8.38 0 011.44-.63c2.47-.82 5.43-.45 7.4 1.52 1.96 1.97 2.33 4.93 1.51 7.4a8.36 8.36 0 01-.63 1.44m-9.72-9.73L9.75 4.5M9.75 4.5l1.73 1.73m-1.73-1.73L4.5 9.75m7.98 7.98l1.73 1.73m-1.73-1.73l-1.73 1.73m1.73-1.73L19.5 9.75M9.75 19.5l1.73-1.73"
                                                        />
                                                </svg>
                                        </motion.div>

                                        {/* Coming Soon Text */}
                                        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                                                Coming Soon
                                        </h1>
                                        <p className="text-gray-400 text-sm md:text-base">
                                                We are working on this page. Please check back later.
                                        </p>
                                </div>
                        </main>

                        {/* Footer */}
                        <Footer />
                </div>
        );
}
