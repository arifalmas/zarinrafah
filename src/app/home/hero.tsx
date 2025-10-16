"use client";

import Rive from '@rive-app/react-canvas';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroSectionOne from "../components/hero-video";

import BrandTrain from "./brandtrain";

export default function Hero() {
        const [open, setOpen] = useState(false);

        const avatars = [
                "/images/creators/profile-rr.jpg",
                "/images/creators/nf.jpg",
                "/images/creators/p2l.jpg",
                "/images/creators/ys.jpg",
                "/images/creators/sw.jpg",
                "/images/creators/rs.jpg",
                "/images/creators/nl.jpg",
        ];

        return (
                <section className="w-full max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20 items-center justify-center  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                {/* Left: Text */}
                                <div className="flex flex-col gap-6 pt-5">
                                        {/* Avatars visible to the left of the text + animated tooltip on hover */}
                                        <div
                                                className="relative max-w-[265px] flex items-center gap-4 py-2 px-3 bg-[#121212] border border-gray-700 rounded-2xl text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300 "
                                                onMouseEnter={() => setOpen(true)}
                                                onMouseLeave={() => setOpen(false)}
                                                onFocus={() => setOpen(true)}
                                                onBlur={() => setOpen(false)}
                                        >
                                                {/* visible stacked avatars */}
                                                <div className="flex -space-x-3 z-10 ">
                                                        {avatars.slice(0, 4).map((src, i) => (
                                                                <motion.div
                                                                        key={src}
                                                                        initial={{ y: 6, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ delay: i * 0.04 }}
                                                                        className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-white border border-neutral-600 bg-gray-800"
                                                                >
                                                                        <Image
                                                                                src={src}
                                                                                alt={`Creator ${i + 1}`}
                                                                                width={40}
                                                                                height={40}
                                                                                className="object-cover w-full h-full"
                                                                        />
                                                                </motion.div>
                                                        ))}
                                                </div>

                                                {/* label (acts as tooltip trigger) */}
                                                <button
                                                        type="button"
                                                        aria-haspopup="dialog"
                                                        aria-expanded={open}
                                                        className="w-full  text-[#606060]"
                                                >
                                                        Trusted By <span className="font-semibold">100+ Creators</span>
                                                </button>

                                                {/* Animated tooltip with extra avatars (appears to the left) */}
                                                <AnimatePresence>
                                                        {open && (
                                                                <motion.div
                                                                        initial={{ opacity: 0, x: 8, scale: 0.98 }}
                                                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                                                        exit={{ opacity: 0, x: 8, scale: 0.98 }}
                                                                        transition={{ duration: 0.18 }}
                                                                        className="absolute -left-56 top-1/2 transform -translate-y-1/2 z-40"
                                                                >
                                                                        <div className="bg-white border border-neutral-100 rounded-xl shadow-lg p-3 flex items-center gap-3">
                                                                                <div className="flex -space-x-2">
                                                                                        {avatars.map((src, i) => (
                                                                                                <motion.div
                                                                                                        key={src}
                                                                                                        initial={{ opacity: 0, y: 6 }}
                                                                                                        animate={{ opacity: 1, y: 0 }}
                                                                                                        exit={{ opacity: 0, y: 6 }}
                                                                                                        transition={{ delay: i * 0.03, duration: 0.18 }}
                                                                                                        className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white border border-neutral-100 bg-gray-200"
                                                                                                >
                                                                                                        <Image
                                                                                                                src={src}
                                                                                                                alt={`Creator ${i + 1}`}
                                                                                                                width={40}
                                                                                                                height={40}
                                                                                                                className="object-cover w-full h-full"
                                                                                                        />
                                                                                                </motion.div>
                                                                                        ))}
                                                                                </div>
                                                                                <div className="pl-2 text-sm text-neutral-600">and 100+ more</div>
                                                                        </div>
                                                                </motion.div>
                                                        )}
                                                </AnimatePresence>
                                        </div>

                                        <h1 className="hero-title text-[54px] sm:text-7xl text-[#868686] leading-tight">
                                                Video Edits

                                                <br />That
                                                <span className="text-[#dcdcdc] ml-2">Stand Out!</span>
                                        </h1>

                                        <p className="text-xl text-[#8d8d8d]  max-w-[90rem]">
                                                Hook faster. Edit smarter. Grow your audience with scroll-stopping YouTube videos.
                                        </p>

                                        <div className="flex items-center gap-4">
                                                <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                >
                                                        <Link
                                                                href="/contact"
                                                                className="group relative inline-flex items-center justify-between gap-3 bg-[#191919] text-white px-6 py-3 rounded-full font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)] overflow-hidden hover:bg-[#FF5100] border border-[#212121]"
                                                        >
                                                                {/* Button text */}
                                                                <span className="relative z-10">Contact Me</span>

                                                                {/* Arrow icon with animation triggered by parent hover */}
                                                                <motion.span
                                                                        className="relative z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                                                                        animate={{ rotate: 0, x: 0 }}
                                                                        whileHover={{ rotate: 45, x: 5 }}
                                                                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                                                                >
                                                                        <svg
                                                                                width="18"
                                                                                height="18"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="text-[#171717]"
                                                                        >
                                                                                <path
                                                                                        d="M5 12h14"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                        d="M13 5l7 7-7 7"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                />
                                                                        </svg>
                                                                </motion.span>


                                                        </Link>
                                                </motion.div>

                                        </div>
                                </div>

                                {/* Right: Animated picture */}
                                <div className="hidden md:flex items-center justify-center lg:items-end lg:justify-end overflow-visible">
                                        <Rive
                                                src="/video_editing.riv"
                                                className="w-full h-full"
                                                style={{ aspectRatio: "16/9" }}
                                        />
                                </div>


                        </div>
                        <BrandTrain />
                        <HeroSectionOne />
                </section>
        );
}