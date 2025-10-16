"use client";

import { motion } from "framer-motion";
import { FaCut, FaLayerGroup, FaPenNib, FaVideo } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const services = [
        {
                title: "Youtube Shorts Editing",
                description:
                        "We turn raw clips into high-retention, caption-packed vertical videos that pop on Reels, Shorts, and TikTok. Great for content repurposing and explosive growth.",
                tags: ["Snappy Pacing", "Viral-Ready", "Subtitled"],
                icon: <FaCut className="text-orange-500" size={22} />,
        },
        {
                title: "Long Form Edits",
                description:
                        "Full-length YouTube videos edited to perfection. We focus on storytelling, engagement, and pacing to keep viewers hooked from start to finish.",
                tags: ["Retention-Driven", "Storytelling", "Engaging"],
                icon: <FaVideo className="text-orange-500" size={22} />,
        },
        {
                title: "Content Strategy & Creation",
                description:
                        "I help brands craft scroll-stopping, meaningful content with strategic planning and creative execution. Perfect for social media campaigns or full brand storytelling.",
                tags: ["Brand Voice", "Engagement Focused", "Creative"],
                icon: <FaPenNib className="text-orange-500" size={22} />,
        },
        {
                title: "Content Repurposing Package",
                description:
                        "One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers. Perfect for creators who want to stay visible everywhere.",
                tags: ["Multi-Platform", "Batch Delivery", "Quick"],
                icon: <FaLayerGroup className="text-orange-500" size={22} />,
        },
];

export default function Services() {
        return (
                <section id="services" className="w-full py-24 bg-transparent text-center sm:px-0 px-2">
                        <div className="max-w-6xl mx-auto">
                                {/* <div className="flex items-center justify-center mb-4">
                                        <p className="text-sm font-medium text-gray-500 bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                                                Services
                                        </p>
                                </div> */}
                                <h2 className="text-4xl font-bold text-gray-300 mb-3">What I Do Best</h2>
                                <p className="text-gray-400 text-xl mb-14 max-w-4xl mx-auto">
                                        I craft scroll-stopping edits and content strategies that keep your audience hooked and your brand looking top-tier.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 h-auto">
                                        {services.map((service) => (
                                                <motion.div
                                                        key={service.title}
                                                        whileHover={{ scale: 1.02 }}
                                                        className="bg-neutral-900 text-left rounded-3xl p-6 shadow-lg text-gray-100 relative overflow-hidden border border-neutral-800"
                                                >
                                                        <div className="flex items-center gap-3 mb-4">
                                                                {service.icon}
                                                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                                        </div>
                                                        <p className="text-gray-400 text-[17px] mb-6 leading-relaxed">{service.description}</p>
                                                        <div className="flex flex-wrap gap-3 mt-20">
                                                                {service.tags.map((tag) => (
                                                                        <span
                                                                                key={tag}
                                                                                className="flex items-center gap-1 bg-neutral-800 text-orange-400 text-[16px] font-medium px-3 py-1 rounded-full"
                                                                        >
                                                                                <HiLightningBolt className="w-3 h-3" />
                                                                                {tag}
                                                                        </span>
                                                                ))}
                                                        </div>
                                                </motion.div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}
