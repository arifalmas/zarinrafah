"use client";

import { Camera, Layers, Rocket, Sparkles } from "lucide-react";

export default function About() {
        return (
                <section id="about" className="w-full bg-transparent py-6 sm:py-10">
                        <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-10 mt-4">
                                        {/* Video Column */}
                                        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
                                                <div className="rounded-2xl border border-neutral-800 bg-[#121212] w-full sm:w-[360px] md:w-[315px] shadow-md p-3 sm:p-4">
                                                        <div className="aspect-[9/16] max-h-[650px] rounded-lg overflow-hidden flex items-center justify-center bg-black/5">
                                                                <video
                                                                        src="/videos/zarin.mp4"
                                                                        controls
                                                                        autoPlay
                                                                        muted
                                                                        loop
                                                                        playsInline
                                                                        className="w-full h-full object-cover rounded-lg "
                                                                />
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Text Column */}
                                        <div className="bg-[#121212] rounded-2xl p-5 sm:p-7 md:p-8 shadow-lg w-full md:h-auto">
                                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#b5b5b5]">
                                                        Hi I'm{" "}
                                                        <span className="text-[#fff] font-medium">Zarin Rafah</span>
                                                </h2>

                                                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-400 leading-relaxed">
                                                        A <span className="font-medium">Content Strategist</span> and
                                                        Visual Storyteller passionate about creating purposeful visuals
                                                        that connect. I help brands and creators craft cinematic stories
                                                        that feel authentic, emotional, and built to engage.
                                                </p>

                                                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                        {/* Story-driven Strategy */}
                                                        <li className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:border-amber-500/30 transition-all">
                                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl text-amber-400">
                                                                        <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                                                                </div>
                                                                <div>
                                                                        <div className="font-semibold text-white text-base sm:text-lg">
                                                                                Story-driven Strategy
                                                                        </div>
                                                                        <div className="text-sm text-gray-400 mt-1">
                                                                                Every campaign starts with a purpose. I design edits and
                                                                                content around emotional storytelling and brand voice.
                                                                        </div>
                                                                </div>
                                                        </li>

                                                        {/* Platform Optimization */}
                                                        <li className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:border-amber-500/30 transition-all">
                                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl text-green-400">
                                                                        <Layers className="w-6 h-6 sm:w-7 sm:h-7" />
                                                                </div>
                                                                <div>
                                                                        <div className="font-semibold text-white text-base sm:text-lg">
                                                                                Platform Optimization
                                                                        </div>
                                                                        <div className="text-sm text-gray-400 mt-1">
                                                                                Adapting visuals for YouTube, Instagram & TikTok with
                                                                                data-backed engagement strategies.
                                                                        </div>
                                                                </div>
                                                        </li>

                                                        {/* Visual Consistency */}
                                                        <li className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:border-amber-500/30 transition-all">
                                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl text-pink-400">
                                                                        <Camera className="w-6 h-6 sm:w-7 sm:h-7" />
                                                                </div>
                                                                <div>
                                                                        <div className="font-semibold text-white text-base sm:text-lg">
                                                                                Visual Consistency
                                                                        </div>
                                                                        <div className="text-sm text-gray-400 mt-1">
                                                                                Cohesive branding across all content, ensuring your
                                                                                audience always recognizes your style.
                                                                        </div>
                                                                </div>
                                                        </li>

                                                        {/* Fast Delivery */}
                                                        <li className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:border-amber-500/30 transition-all">
                                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl text-indigo-400">
                                                                        <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />
                                                                </div>
                                                                <div>
                                                                        <div className="font-semibold text-white text-base sm:text-lg">
                                                                                Fast & Reliable Delivery
                                                                        </div>
                                                                        <div className="text-sm text-gray-400 mt-1">
                                                                                Timely delivery without compromising quality. I respect your
                                                                                deadlines.
                                                                        </div>
                                                                </div>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
