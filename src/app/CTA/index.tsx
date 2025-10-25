'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CtaSection() {
        return (
                <section
                        id="cta"
                        className="relative py-24 px-6 font-[Poppins]"
                >
                        <div className="max-w-7xl mx-auto border border-gray-700 rounded-2xl p-12 flex flex-col md:flex-row items-start md:items-center gap-12 bg-black text-white relative overflow-hidden">

                                {/* Left Content */}
                                <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="md:w-1/2 text-left flex flex-col items-start"
                                >
                                        <motion.h2
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-100"
                                        >
                                                Let’s Elevate <br />
                                                <span className="text-[#FF5100]">Your Content 🚀</span>
                                        </motion.h2>

                                        <p className="mt-4 text-lg text-gray-400 max-w-md">
                                                Create viral, scroll-stopping videos that make your brand
                                                impossible to ignore.
                                        </p>

                                        <div className="mt-6 flex flex-wrap items-center gap-4">
                                                <motion.a
                                                        whileHover={{ scale: 1.03, y: -1 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        href="/book-a-call"
                                                        className="inline-flex items-center justify-center rounded-full bg-[#FF5100] px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-orange-600"
                                                >
                                                        <span className="flex items-center">
                                                                Book a Call
                                                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                        </span>
                                                </motion.a>

                                                <motion.a
                                                        whileHover={{ scale: 1.03, y: -1 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        href="/contact"
                                                        className="inline-flex items-center justify-center rounded-full border border-[#FF5100]/60 px-8 py-3 font-semibold text-[#FF5100] hover:bg-[#FF5100]/10 transition-colors duration-300"
                                                >
                                                        <MessageCircle className="mr-2 w-5 h-5" />
                                                        Let’s Talk
                                                </motion.a>
                                        </div>
                                </motion.div>

                                {/* Divider Line */}
                                <div className="hidden md:block w-px bg-gray-700 h-64 mx-6" />

                                {/* Right Side Illustration */}
                                <motion.div
                                        initial={{ opacity: 0, x: 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="md:w-1/2 flex justify-center relative"
                                >
                                        <img
                                                src="/zarin rafah website.png"
                                                alt="Creative illustration"
                                                width={500}
                                                height={500}
                                                className="object-contain transition-transform duration-500 hover:scale-105"
                                        />
                                </motion.div>

                                {/* Background Glow */}
                                <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.2 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#FF5100]/20 blur-[120px] rounded-full"
                                />
                                <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.15 }}
                                        transition={{ duration: 1.2 }}
                                        viewport={{ once: true }}
                                        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-500/20 blur-[120px] rounded-full"
                                />
                        </div>
                </section>
        );
}