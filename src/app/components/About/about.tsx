"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Work() {
        const [isClient, setIsClient] = useState(false);
        useEffect(() => setIsClient(true), []);

        const cards = [
                {
                        title: "Next-level edits that don’t empty your wallet",
                        desc: "Professional video editing tailored for creators and brands looking to elevate their content without breaking the bank.",
                        bg: "/images/editing-bg-1.jpg",
                        tag: "Video editing",
                        tagColor: "bg-[#FF5100]",
                },
                {
                        title: "No complex tools needed",
                        desc: "Just send your clips. I handle everything from cuts to color grading.",
                        bg: "/images/editing-bg-3.jpg",
                },
                {
                        title: "Free guide included",
                        desc: "Get a complimentary content strategy guide with every edit to maximize your reach.",
                        bg: "/images/editing-bg-4.jpg",
                },
                {
                        title: "Grow your audience",
                        desc: "We craft edits designed to keep viewers watching and convert attention into engagement.",
                },
        ];

        return (
                <div className="bg-black text-white py-4 sm:py-20 px-4">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* LEFT SIDE */}
                                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Top Large Card */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="md:col-span-2 relative rounded-2xl overflow-hidden bg-[#0f0f10] h-[320px] sm:h-[330px] md:h-[340px]"
                                        >
                                                <div className="relative p-5 sm:p-7 md:p-8">
                                                        <span
                                                                className={`${cards[0].tagColor} px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm md:text-sm font-medium`}
                                                        >
                                                                {cards[0].tag}
                                                        </span>
                                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-3 sm:mt-4 mb-3 sm:mb-2 leading-snug">
                                                                {cards[0].title}
                                                        </h3>
                                                        <p className="text-gray-300 text-base sm:text-[15px] md:text-[16px]">
                                                                {cards[0].desc}
                                                        </p>
                                                </div>

                                                <img
                                                        src="https://img.freepik.com/premium-vector/interface-menu-program-panels-motion-design-abstract-background_681307-58.jpg"
                                                        alt="Card background"
                                                        className="object-cover opacity-40 rounded-xl"
                                                />
                                        </motion.div>

                                        {/* Bottom Left */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.1 }}
                                                viewport={{ once: true }}
                                                className="bg-[#151515] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                                        >
                                                <div className="w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-5 relative">
                                                        <img
                                                                src="https://a.storyblok.com/f/88751/1940x1160/bcdaac1822/content-modeling-explained-preview.png/m/1940x1160/"
                                                                alt="Card background"
                                                                className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                                </div>

                                                <div className="relative z-10 flex flex-col justify-start">
                                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                                                {cards[2].title}
                                                        </h3>
                                                        <p className="text-gray-300 text-sm sm:text-base">
                                                                {cards[2].desc}
                                                        </p>
                                                </div>
                                        </motion.div>

                                        {/* Bottom Right */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                viewport={{ once: true }}
                                                className="relative bg-[#151515] rounded-2xl p-6 sm:p-8 overflow-hidden"
                                        >
                                                <div className="w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-5">
                                                        <img
                                                                src="https://cdn.prod.website-files.com/685be7dcd32275d383065239/685be7dcd32275d38306799e_large-Blog%20Cover_2023_03_13%20Best%20Vlog%20Editing%20Software%20for%20Beginners%20_%20Pros%20(All%20Devices).webp"
                                                                alt="Card background"
                                                                className="object-cover w-full h-full"
                                                        />
                                                </div>

                                                <div className="relative z-10 flex flex-col justify-start">
                                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                                                                {cards[1].title}
                                                        </h3>
                                                        <p className="text-gray-300 text-sm sm:text-base">
                                                                {cards[1].desc}
                                                        </p>
                                                </div>
                                        </motion.div>
                                </div>

                                {/* RIGHT SIDE — Reel Video */}
                                <div className="flex flex-col">
                                        <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                                viewport={{ once: true }}
                                                className="relative rounded-2xl overflow-hidden p-3 bg-[#151515] h-[420px] sm:h-[560px] md:h-[600px]"
                                        >
                                                <video
                                                        src="/videos/zarin.mp4"
                                                        controls
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        className="w-full h-full object-cover rounded-lg"
                                                />
                                        </motion.div>

                                        <div className="mt-10 flex justify-center">
                                                <button className="cursor-pointer bg-[#FF5100] hover:bg-[#121212] text-white font-semibold w-full py-3 rounded-xl transition">
                                                        <a href="#works">Explore My Works</a>
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
