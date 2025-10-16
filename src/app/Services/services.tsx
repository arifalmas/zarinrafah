"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardData {
        title: string;
        description: string;
        image: string;
        textColor?: string; // ✅ added this line
}

const cards: CardData[] = [
        {
                title: "Web Development",
                description:
                        "I build responsive, modern websites that perform beautifully and load lightning fast.",
                image: "https://www.racdox.com/images/services/custom1.png",
                textColor: "white",
        },
        {
                title: "UI/UX Design",
                description:
                        "Creating seamless and engaging user experiences with clean design and intuitive interaction.",
                image: "https://www.racdox.com/images/services/ai.jpg",
                textColor: "white",
        },
        {
                title: "Branding & Strategy",
                description:
                        "Crafting identities that stand out — from logo to voice, every detail tells your story.",
                image: "https://www.racdox.com/images/services/custom1.png",
                textColor: "white",
        },
        {
                title: "Video Editing",
                description:
                        "Transforming raw clips into cinematic visuals that capture emotion and energy.",
                image: "https://www.racdox.com/images/services/dddd.jpg",
                textColor: "white",
        },
];

export default function ServicesCard() {
        const containerRef = useRef < HTMLDivElement > (null);
        const { scrollYProgress } = useScroll({
                target: containerRef,
                offset: ["start start", "end end"],
        });

        return (
                <div ref={containerRef} className="relative w-full h-[400vh] bg-transparent">
                        {cards.map((card, i) => {
                                const start = i * (1 / cards.length);
                                const end = start + 1 / cards.length;
                                const y = useTransform(scrollYProgress, [start, end], ["80px", "0px"]);

                                return (
                                        <motion.div
                                                key={i}
                                                className="sticky top-0 flex items-center justify-center h-screen"
                                        >
                                                <motion.div
                                                        className="relative w-[93%] sm:w-[60%] h-[70vh] rounded-3xl overflow-hidden bg-white"
                                                >
                                                        {/* Background Image */}
                                                        <div
                                                                className="absolute inset-0 bg-cover bg-center"
                                                                style={{ backgroundImage: `url(${card.image})` }}
                                                        />

                                                        {/* Content */}
                                                        <div
                                                                className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between"
                                                                style={{ color: card.textColor }}
                                                        >
                                                                <div className="max-w-2xl">
                                                                        <h2
                                                                                className="text-3xl md:text-5xl font-bold mb-4"
                                                                                style={{ color: card.textColor }}
                                                                        >
                                                                                {card.title}
                                                                        </h2>
                                                                        <p
                                                                                className="text-[15px] md:text-[18px] opacity-80 leading-relaxed"
                                                                                style={{ color: card.textColor }}
                                                                        >
                                                                                {card.description}
                                                                        </p>
                                                                </div>

                                                                <button
                                                                        className="mt-6 md:mt-0 px-8 py-3 rounded-full text-lg font-semibold transition cursor-pointer border border-dashed"
                                                                        style={{
                                                                                color: card.textColor,
                                                                                borderColor: card.textColor,
                                                                                backgroundColor:
                                                                                        card.textColor === "white"
                                                                                                ? "rgba(0,0,0,0.3)"
                                                                                                : "rgba(255,255,255,0.1)",
                                                                        }}
                                                                        type="button"
                                                                >
                                                                        Hire Me
                                                                </button>
                                                        </div>
                                                </motion.div>
                                        </motion.div>
                                );
                        })}
                </div>
        );
}
