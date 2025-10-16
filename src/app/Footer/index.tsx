'use client';

import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
        return (
                <footer className="bg-[#000000] text-gray-300 border-t border-gray-700 py-14 px-6">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
                                {/* Brand Info */}
                                <div className="md:col-span-2">
                                        <h2 className="text-white font-semibold text-xl flex items-center gap-2">
                                                Zarin Rafah
                                        </h2>
                                        <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-sm">
                                                Elevate your brand with captivating video content that tells your story and engages your audience.
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex gap-3 mt-5">
                                                <Link
                                                        href="#"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-gray-500 hover:text-white transition"
                                                >
                                                        <Twitter size={18} />
                                                </Link>
                                                <Link
                                                        href="https://www.instagram.com/zarin.rafah"
                                                        target="_blank"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-gray-500 hover:text-white transition"
                                                >
                                                        <Instagram size={18} />
                                                </Link>
                                                <Link
                                                        href="mailto:collabwithzarinrafah@gmail.com"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-gray-500 hover:text-white transition"
                                                >
                                                        <Mail size={18} />
                                                </Link>

                                        </div>
                                </div>

                                {/* Site Map */}
                                <div>
                                        <h3 className="text-white font-semibold mb-4">Site Map</h3>
                                        <ul className="space-y-2 text-sm">
                                                <li><Link href="#about" className="hover:text-orange-400">About</Link></li>
                                                <li><Link href="#pricing" className="hover:text-orange-400">Pricing</Link></li>
                                                <li><Link href="#works" className="hover:text-orange-400">Works</Link></li>
                                                <li><Link href="#services" className="hover:text-orange-400">Services</Link></li>
                                        </ul>
                                </div>

                                {/* Support */}
                                <div>
                                        <h3 className="text-white font-semibold mb-4">Support</h3>
                                        <ul className="space-y-2 text-sm">
                                                <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
                                                <li><Link href="'/book-a-call" className="hover:text-orange-400">Book a Call</Link></li>
                                        </ul>
                                </div>

                                {/* LinkedIn Section */}
                                <div className="flex flex-col justify-between">
                                        <div>
                                                <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
                                                <p className="text-sm text-gray-400 mb-4 max-w-[190px]">
                                                        Explore creative collaborations and strategic ideas with me on LinkedIn.
                                                </p>
                                                <Link
                                                        href="https://www.linkedin.com/in/zarinrafah/"
                                                        target="_blank"
                                                        className="inline-flex items-center gap-2 text-sm font-medium text-white border border-gray-700 px-3 py-2 rounded-md hover:border-orange-400 hover:text-orange-400 transition"
                                                >
                                                        <Linkedin size={16} /> Connect on LinkedIn
                                                </Link>
                                        </div>
                                </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
                                <p>© 2025 Zarin Rafah. All Rights Reserved.</p>
                                <p>
                                        Crafted with ❤️ by{" "}
                                        <span className="text-white font-medium"><a href="https://www.arifalmas.com/" target="_blank">Arif Almas</a></span>
                                </p>
                        </div>
                </footer>
        );
}
