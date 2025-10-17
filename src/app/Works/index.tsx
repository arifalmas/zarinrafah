"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const longFormVideos = [
        {
                title: "Power of Brain | Jhankar Mahbub",
                description:
                        "I edited this amazing educational video by Jhankar Mahbub “Power of Brain” bringing his teaching to life with engaging transitions!",
                youtubeUrl: "https://www.youtube.com/embed/HvfWN6372ng?si=hvQkgxpRZ5VsRRgv",
        },
        {
                title: "Bet! You won't regret after hiring Zarin Rafah",
                youtubeUrl: "https://www.youtube.com/embed/QnJjRd6_wn0?si=95MDD8lR7PUhW_OB",
        },
        {
                title:
                        "Started my editing journey with 0 skills and 5 months later, My work got featured.",
                youtubeUrl: "https://www.youtube.com/embed/bfo3QgviQqY?si=THpxX6bYYx6bINeg",
        },
];

// 🟠 Cloudinary Reels (replace with your real URLs)
const reels = [
        {
                title: "Reel One",
                cloudinaryUrl:
                        "https://player.cloudinary.com/embed/?cloud_name=dbvzabvuy&public_id=zarinrafah_xasd1&profile=cld-default",
        },
        {
                title: "Reel Two",
                cloudinaryUrl:
                        "https://player.cloudinary.com/embed/?cloud_name=dbvzabvuy&public_id=reel2_c2catp&profile=cld-default",
        },
        {
                title: "Reel Three",
                cloudinaryUrl:
                        "https://player.cloudinary.com/embed/?cloud_name=dbvzabvuy&public_id=reel3_zyx987&profile=cld-default",
        },
        {
                title: "Reel Four",
                cloudinaryUrl:
                        "https://player.cloudinary.com/embed/?cloud_name=dbvzabvuy&public_id=reel1_abcxyz&profile=cld-default",
        },
];

export default function WorksShowcase() {
        const [activeTab, setActiveTab] = useState("shorts");

        return (
                <section id="works" className="max-w-7xl mx-auto px-6 py-20">
                        {/* Header */}
                        <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold">My Recent Edits in Action</h2>
                                <p className="text-gray-500 mt-4 max-w-4xl text-[18px] mx-auto font-semibold">
                                        A showcase of my latest work, from dynamic Shorts to engaging long-form videos.
                                </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex justify-center mb-8 space-x-4">
                                {["shorts", "videos"].map((tab) => (
                                        <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`px-6 py-2 font-medium rounded-full transition ${activeTab === tab
                                                        ? "bg-orange-600 text-white"
                                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                        }`}
                                        >
                                                {tab === "shorts" ? "Shorts" : "Videos"}
                                        </button>
                                ))}
                        </div>

                        {/* Shorts Grid (Cloudinary videos) */}
                        {activeTab === "shorts" && (
                                <motion.div
                                        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                >
                                        {reels.slice(0, 6).map((reel, idx) => (
                                                <div
                                                        key={idx}
                                                        className="rounded-2xl border border-neutral-800 bg-[#121212] shadow-md overflow-hidden"
                                                >
                                                        <div className="relative pb-[177.78%] h-0 overflow-hidden rounded-lg">
                                                                <iframe
                                                                        src={reel.cloudinaryUrl}
                                                                        className="absolute top-0 left-0 w-full h-full"
                                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                                        allowFullScreen
                                                                        frameBorder="0"
                                                                />
                                                        </div>
                                                </div>
                                        ))}
                                </motion.div>
                        )}

                        {/* Long-form YouTube videos */}
                        {activeTab === "videos" && (
                                <motion.div
                                        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                >
                                        {longFormVideos.map((video, idx) => (
                                                <iframe
                                                        key={idx}
                                                        src={video.youtubeUrl}
                                                        loading="lazy"
                                                        className="w-full h-60 md:h-48 lg:h-56 object-cover rounded-2xl"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                ></iframe>
                                        ))}
                                </motion.div>
                        )}
                </section>
        );
}
