"use client";
import { motion } from "framer-motion";
import { useState } from "react";
const creatorProblems = [
        "Editing takes me forever.",
        "I miss uploads trying to finish videos.",
        "I hate editing. I just want to record.",
        "My videos don’t look pro enough.",
        "Captions are a pain to add.",
];

const ourSolutions = [
        "Done-for-you edits, always on time.",
        "Fast turnaround.",
        "You record. I handle the rest.",
        "Cinematic, clean, and branded.",
        "Burned-in, style-matched captions.",
];

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
                        "https://res.cloudinary.com/dbvzabvuy/video/upload/v1760691680/reel3_qyee5r.mp4",
        },
        {
                title: "Reel Two",
                cloudinaryUrl:
                        "https://res.cloudinary.com/dbvzabvuy/video/upload/v1760675830/reel2_c2catp.mp4",
        },
        {
                title: "Reel Three",
                cloudinaryUrl:
                        "https://res.cloudinary.com/dbvzabvuy/video/upload/v1760696180/Comp_5_2_2_t1wko9.mp4",
        },
        {
                title: "Reel Four",
                cloudinaryUrl:
                        "https://res.cloudinary.com/dbvzabvuy/video/upload/v1760697100/zarinr_adqjnd.mp4",
        },
];

export default function WorksShowcase() {
        const [activeTab, setActiveTab] = useState("shorts");

        return (
                <section id="works" className="max-w-6xl mx-auto px-6 py-20">
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
                                        {reels.map((reel, idx) => (
                                                <div
                                                        key={idx}
                                                        className="rounded-2xl bg-[#121212] shadow-md overflow-hidden"
                                                >
                                                        <div className="relative pb-[177.78%] h-0 overflow-hidden rounded-lg">
                                                                <video
                                                                        src={reel.cloudinaryUrl}
                                                                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                                                                        muted
                                                                        playsInline
                                                                        controls
                                                                        preload="metadata"
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
                                                        className="w-full h-60 md:h-48 lg:h-56 object-cover rounded-2xl"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        loading="lazy"
                                                />

                                        ))}
                                </motion.div>
                        )}
                        {/*  */}
                        <motion.section
                                className="max-w-6xl mx-auto rounded-2xl p-7 md:p-10 bg-gradient-to-br from-[#121212] to-[#1e1e1e] border border-gray-800 shadow-lg overflow-hidden relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                        >
                                {/* Animated background glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#121212] to-[#0c0c0c] blur-4xl animate-pulse"></div>

                                {/* Grid layout */}
                                <div className="relative grid md:grid-cols-2 items-center gap-10">

                                        {/* Left Side - Channel Info */}
                                        <motion.div
                                                className="flex flex-col items-start md:items-start text-start md:text-left space-y-5 z-10"
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                        >
                                                <img
                                                        src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
                                                        alt="YouTube Channel Logo"
                                                        className="w-28 md:w-36 rounded-xl shadow-md border-2 border-dashed border-gray-800 "
                                                />
                                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                                        Explore <span className="text-red-500 font-black">Zarin Rafah’s</span> YouTube Channel
                                                </h2>
                                                <p className="text-gray-300 max-w-md">
                                                        Where creativity meets storytelling - made for creators like you.
                                                </p>
                                        </motion.div>

                                        {/* Right Side - Call to Action */}
                                        <motion.div
                                                className="relative bg-[#0d0d0d] rounded-2xl border border-dashed border-gray-700 flex flex-col items-center justify-center text-center p-7 md:p-10 shadow-md z-10"
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                        >
                                                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                                        Be Part of the Creative Journey
                                                </h3>
                                                <p className="text-gray-400 mb-6">
                                                        Subscribe now and never miss a new video!
                                                </p>
                                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-sm md:text-xl cursor-pointer">

                                                        <a href="https://www.youtube.com/@ZarinRafah" target="blank">Subscribe Now</a>
                                                </button>
                                        </motion.div>
                                </div>
                        </motion.section>



                </section >
        );
}
