"use client";

import { easeOut, motion, Variants } from "framer-motion";
import { FaCommentDots, FaMagic, FaRocket, FaUpload } from "react-icons/fa";

const steps = [
        {
                id: "01",
                icon: <FaUpload size={36} className="text-orange-400" />,
                title: "Drop Your Footage",
                desc: "Just throw your raw clips my way Google Drive, Dropbox, carrier pigeon - I’ll catch ’em all!",
                bg: "from-orange-400 to-pink-500",
        },
        {
                id: "02",
                icon: <FaMagic size={36} className="text-orange-400" />,
                title: "I Work My Magic",
                desc: "I slice, dice, color-grade, and sprinkle that cinematic fairy dust until your footage shines like pure gold.",
                bg: "from-purple-500 to-indigo-500",
        },
        {
                id: "03",
                icon: <FaCommentDots size={36} className="text-orange-400" />,
                title: "Feedback? Bring It!",
                desc: "Got tweaks or crazy ideas? Hit me with them - I’ll make your wildest visions actually happen.",
                bg: "from-green-400 to-teal-500",
        },
        {
                id: "04",
                icon: <FaRocket size={36} className="text-orange-400" />,
                title: "Upload & Dominate",
                desc: "Final cut delivered. Post it, share it, blow up the internet - your content rocket is ready for liftoff!",
                bg: "from-yellow-400 to-orange-500",
        },
];

const fadeIn: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
        }),
};

export default function ReadmapAnimation() {
        return (
                <section id="process" className="py-20">
                        <div className="max-w-6xl mx-auto px-4 text-center">
                                <motion.h2
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-4xl font-bold text-gray-200 mb-3"
                                >
                                        How It Works?
                                </motion.h2>

                                <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-gray-400 max-w-2xl mx-auto mb-14"
                                >
                                        A creative and simple workflow to take your footage from raw clips to scroll-stopping content.
                                </motion.p>

                                <div className="grid sm:grid-cols-2 gap-8">
                                        {steps.map((step, i) => (
                                                <motion.div
                                                        key={step.id}
                                                        custom={i}
                                                        variants={fadeIn}
                                                        initial="hidden"
                                                        whileInView="show"
                                                        viewport={{ once: true }}
                                                        className="relative rounded-3xl shadow-lg p-8 overflow-hidden text-left transform transition-transform duration-200 hover:scale-102 bg-[#121212]"
                                                        style={{ backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))` }}
                                                >
                                                        {/* Step number */}
                                                        <div className="absolute top-4 left-4 text-white font-bold text-lg opacity-30">{step.id}</div>

                                                        {/* Icon with subtle orangish vibe */}
                                                        <div
                                                                className="flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
                                                                style={{ background: 'rgba(255,165,50,0.15)' }}
                                                        >
                                                                {step.icon}
                                                        </div>

                                                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                                        <p className="text-gray-200 leading-relaxed">{step.desc}</p>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
