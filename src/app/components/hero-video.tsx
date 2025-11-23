"use client";
import { motion } from "framer-motion";

export default function HeroSectionOne() {
        return (
                <section className="flex items-center justify-center py-1 bg-transparent relative overflow-hidden">
                        {/* Animated video frame */}
                        <motion.div
                                initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                }}
                                viewport={{ once: true }}
                                className="relative w-full max-w-[76rem] rounded-2xl overflow-hidden bg-[#121212] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
                        >
                                {/* Fake browser header */}
                                <div className="bg-[#212121] flex items-center justify-between px-4 py-3">
                                        <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                        </div>
                                </div>

                                {/* Local Video */}
                                <div className="relative w-full h-[250px] sm:h-[600px] bg-black">
                                        <video
                                                src="/videos/zarinrafahintro.mp4"   // 🔥 Fixed: valid path
                                                controls
                                                loop
                                                muted
                                                preload="metadata"
                                                className="w-full h-full object-cover rounded-lg"
                                                poster="/thumbnail1.jpg"
                                        >
                                                Your browser does not support the video tag.
                                        </video>
                                </div>
                        </motion.div>
                </section>
        );
}
