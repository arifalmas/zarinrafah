"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MotionSpan = motion.span;

interface NavItem {
        name: string;
        href: string;
}

const NAV_ITEMS: NavItem[] = [
        { name: "About", href: "/about" },
        { name: "Work", href: "#works" },
        { name: "Solution", href: "#solution" },
        { name: "Pricing", href: "#pricing" },

];

export default function Header() {
        const [open, setOpen] = useState(false);

        return (
                <header className="sticky top-0 z-50 backdrop-blur-xl bg-black border-b border-neutral-800">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-1">
                                <div className="flex h-20 items-center justify-between">

                                        {/* Logo */}
                                        <Link href="/" className="flex items-center gap-3 group">
                                                <Image
                                                        src="/zarinrafah.jpg"
                                                        alt="Zarin Rafah"
                                                        width={30}
                                                        height={30}
                                                        className="rounded object-cover"
                                                />
                                                <div className=" sm:flex sm:flex-col leading-tight">
                                                        <span className="font-semibold text-gray-100">Zarin Rafah</span>
                                                </div>
                                                <div className="bg-[#1f1f1f] px-2 rounded text-[11px]">
                                                        <h3>BETA</h3>
                                                </div>
                                        </Link>

                                        {/* Desktop Navigation */}
                                        <nav className="hidden md:flex items-center gap-8">
                                                {NAV_ITEMS.map((item) => (
                                                        <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="relative text-sm font-medium text-gray-300 hover:text-gray-100 transition"
                                                        >
                                                                {item.name}
                                                                <MotionSpan
                                                                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-600 to-violet-600"
                                                                        whileHover={{ width: "100%" }}
                                                                        transition={{ duration: 0.3 }}
                                                                />
                                                        </Link>
                                                ))}
                                        </nav>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3">
                                                <Link
                                                        href="/book-a-call"
                                                        className="hidden md:inline-block rounded-xl  text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition border border-gray-700  bg-[#1a1a1aca] "
                                                >
                                                        Book A Call
                                                </Link>

                                                {/* Mobile Menu Toggle */}
                                                <button
                                                        aria-label={open ? "Close menu" : "Open menu"}
                                                        onClick={() => setOpen((v) => !v)}
                                                        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
                                                >
                                                        {open ? (
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6 text-gray-500"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                >
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M6 18L18 6M6 6l12 12"
                                                                        />
                                                                </svg>
                                                        ) : (
                                                                <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6 text-gray-500"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                >
                                                                        <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M4 6h16M4 12h16M4 18h16"
                                                                        />
                                                                </svg>
                                                        )}
                                                </button>
                                        </div>
                                </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                                {open && (
                                        <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="md:hidden bg-black backdrop-blur-md border-t border-gray-800 overflow-hidden"
                                        >
                                                <div className="px-6 py-5 space-y-4">
                                                        {NAV_ITEMS.map((item) => (
                                                                <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block text-base font-medium text-gray-300 hover:text-black transition"
                                                                >
                                                                        {item.name}
                                                                </Link>
                                                        ))}

                                                        <Link
                                                                href="/book-a-call"
                                                                className="hidden md:inline-block rounded-3xl  text-white px-5 py-2 text-sm font-medium hover:opacity-90 transition border border-gray-700 border-dashed"
                                                        >
                                                                Book A Call
                                                        </Link>
                                                </div>
                                        </motion.div>
                                )}
                        </AnimatePresence>
                </header>
        );
}