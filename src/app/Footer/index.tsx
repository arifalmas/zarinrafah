'use client';

import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
        return (
                <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800 py-12 px-6 font-[Poppins]">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                                {/* Brand Info */}
                                <div className="md:col-span-2 flex flex-col">
                                        <div className="flex items-center gap-3 mb-3">
                                                <Image
                                                        src="/zarinrafah.jpg" // replace with your logo path
                                                        alt="Zarin Rafah Logo"
                                                        width={40}
                                                        height={40}
                                                        className="object-contain rounded-xl border border-gray-700"
                                                />
                                                <h2 className="text-3xl font-extrabold text-white">
                                                        Zarin Rafah
                                                </h2>
                                        </div>
                                        <p className="text-gray-400 mt-2 leading-relaxed text-[16px] max-w-md">
                                                Elevate your brand with captivating video content that tells your story and engages your audience.
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex gap-4 mt-6">
                                                <Link
                                                        href="#"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-gray-500 hover:text-white transition"
                                                >
                                                        <Twitter size={20} />
                                                </Link>
                                                <Link
                                                        href="https://www.instagram.com/zarin.rafah"
                                                        target="_blank"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-pink-500 hover:text-pink-500 transition"
                                                >
                                                        <Instagram size={20} />
                                                </Link>
                                                <Link
                                                        href="mailto:collabwithzarinrafah@gmail.com"
                                                        className="p-2 rounded-md border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition"
                                                >
                                                        <Mail size={20} />
                                                </Link>
                                        </div>
                                </div>

                                {/* Site Map & Support */}
                                <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
                                        {/* Site Map */}
                                        <div>
                                                <h3 className="text-white font-bold mb-4 text-lg">Site Map</h3>
                                                <ul className="space-y-2 text-base">
                                                        <li><Link href="/about" className="hover:text-orange-400 transition">About</Link></li>
                                                        <li><Link href="#pricing" className="hover:text-orange-400 transition">Pricing</Link></li>
                                                        <li><Link href="#works" className="hover:text-orange-400 transition">Works</Link></li>
                                                        <li><Link href="#services" className="hover:text-orange-400 transition">Services</Link></li>
                                                </ul>
                                        </div>

                                        {/* Support */}
                                        <div>
                                                <h3 className="text-white font-bold mb-4 text-lg">Support</h3>
                                                <ul className="space-y-2 text-base">
                                                        <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
                                                        <li><Link href="/book-a-call" className="hover:text-orange-400 transition">Book a Call</Link></li>
                                                </ul>
                                        </div>
                                </div>

                                {/* LinkedIn Section */}
                                <div className="flex flex-col justify-start sm:justify-end sm:mt-0 border border-gray-700 p-6 rounded-xl">
                                        <h3 className="text-white font-bold mb-3 text-lg">Let's Connect</h3>
                                        <p className="text-gray-400 mb-4 text-base max-w-[220px]">
                                                Explore creative collaborations and strategic ideas with me on LinkedIn.
                                        </p>
                                        <Link
                                                href="https://www.linkedin.com/in/zarinrafah/"
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-gray-700 px-4 py-2 rounded-md hover:border-blue-500 hover:text-blue-500 transition"
                                        >
                                                <Linkedin size={18} /> Connect on LinkedIn
                                        </Link>
                                </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                                <p>© 2025 Zarin Rafah. All Rights Reserved.</p>
                                <p className="mt-2 md:mt-0">
                                        Design & Developed by{" "}
                                        <span className="text-white font-medium hover:text-orange-400 transition">
                                                <a href="https://www.arifalmas.com/" target="_blank">Arif Almas</a>
                                        </span>
                                </p>
                        </div>
                </footer>
        );
}
