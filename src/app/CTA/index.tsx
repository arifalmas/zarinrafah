'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CtaSection() {
        return (
                <section id='cta' className="relative overflow-hidden bg-[#000000] text-white py-20 p-4">
                        <div className="container max-w-6xl border border-dashed border-gray-700 p-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 bg-[#121212] rounded-2xl">
                                {/* Left Side Content */}
                                <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="max-w-xl"
                                >
                                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
                                                Ready to <span className="text-orange-400">10x </span>your video views?
                                        </h2>

                                        <p className="mt-4 text-lg text-gray-300">
                                                Let’s turn your content into <span className="text-orange-400 font-medium">scroll-stopping videos</span> that grow your audience and boost engagement. Book a call and let’s bring your vision to life.
                                        </p>

                                        <div className="mt-8 flex flex-wrap items-center gap-4">
                                                <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        href="/book-a-call"
                                                        className="inline-flex items-center justify-center rounded-lg bg-[#121212] border border-gray-800 px-6 py-3 text-white font-medium shadow-md hover:bg-orange-600 transition-all"
                                                >
                                                        <a href="/book-a-call">Book a Call</a> <ArrowRight className="ml-2 w-5 h-5" />
                                                </motion.a>

                                                <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        href="/contact"
                                                        className="inline-flex items-center justify-center rounded-lg border border-orange-500 px-6 py-3 font-medium text-orange-400 hover:bg-orange-50/10 transition-all"
                                                >
                                                        <a href="/contact">Contact Me</a> <MessageCircle className="ml-2 w-5 h-5" />
                                                </motion.a>
                                        </div>
                                </motion.div>

                                {/* Right Side Testimonial */}
                                <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="max-w-md border-l border-gray-700 pl-8"
                                >
                                        <p className="text-gray-300 italic">
                                                "Working with Zarin Rafah transformed my content. Her strategies and edits made my videos go viral. Truly next-level results!"
                                        </p>

                                        <div className="mt-4">
                                                <p className="font-semibold text-white">Arif Almas</p>
                                                <p className="text-gray-400 text-sm">Content Creator </p>
                                        </div>
                                </motion.div>
                        </div>
                </section>
        );
}
