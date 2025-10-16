"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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

export default function SolutionSection() {
        return (
                <section id="solution" className="w-full bg-transparent py-10 px-4 max-w-6xl mx-auto sm:px-6">
                        {/* Section Header */}
                        <div className="text-center mb-14">

                                <h2 className="text-4xl md:text-5xl font-bold px-1 mt-4 mb-3">
                                        Why Most Creators Burn Out
                                </h2>
                                <p className="text-gray-500 max-w-4xl mx-auto mt-4 font-semibold">
                                        A quick side-by-side of the struggles you shouldn’t have to deal with
                                        and how we make sure you don’t.
                                </p>
                        </div>

                        {/* ✅ Main Wrapper Card */}
                        <motion.div
                                className="max-w-6xl mx-auto bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-800"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                        >
                                {/* Two-Column Grid Inside */}
                                <div className="grid md:grid-cols-2 gap-6">
                                        {/* Left Side - Creator Problems */}
                                        <motion.div
                                                className="rounded-2xl border border-gray-800 p-8 bg-[#1d1d1d] shadow-sm"
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                        >
                                                <h3 className="text-xl font-semibold text-center mb-6">
                                                        Creators Problem
                                                </h3>
                                                <ul className="space-y-4">
                                                        {creatorProblems.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-3">
                                                                        <FaTimesCircle className="text-red-500 mt-1 text-lg" />
                                                                        <span className="text-gray-300">{item}</span>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </motion.div>

                                        {/* Right Side - Our Solution */}
                                        <motion.div
                                                className="rounded-2xl p-8 bg-black text-white shadow-md border border-gray-800"
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                        >
                                                <h3 className="text-xl font-semibold text-center mb-6 text-orange-400">
                                                        My Solution
                                                </h3>
                                                <ul className="space-y-4">
                                                        {ourSolutions.map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-3">
                                                                        <FaCheckCircle className="text-orange-400 mt-1 text-lg" />
                                                                        <span>{item}</span>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </motion.div>
                                </div>
                        </motion.div>
                </section>
        );
}
