"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const plans = [
        {
                name: "Starter Plan",
                price: "$150",
                description: "Ideal for creators uploading up to 5 short videos per month with basic editing.",
                buttonColor: "bg-[#191919] border border-gray-700 border-dashed text-white hover:bg-orange-600",
                features: [
                        "Up to 5 short videos/month",
                        "2 revisions per video",
                        "Basic color grading & audio sync",
                        "72-hour turnaround",
                        "Email support",
                ],
        },
        {
                name: "Pro Plan",
                price: "$350",
                description: "For active creators posting 10–15 videos per month with advanced editing services.",
                popular: true,
                buttonColor: "bg-[#191919] border border-gray-700 border-dashed text-white hover:bg-orange-600",
                features: [
                        "Up to 15 videos/month",
                        "5 revisions per video",
                        "Advanced color grading & audio mix",
                        "48-hour turnaround",
                        "Video call support",
                ],
        },
        {
                name: "Premium Plan",
                price: "$700",
                description: "Complete content strategy and full-service editing for creators and brands.",
                buttonColor: "bg-[#191919] border border-gray-700 border-dashed text-white hover:bg-orange-600",
                features: [
                        "Up to 30 videos/month",
                        "Unlimited revisions",
                        "Full content optimization",
                        "48-hour turnaround",
                        "Thumbnail & title strategy",
                        "Shorts, reels, long-form videos, podcasts",
                        "Multi-platform repurposing",
                ],
        },
];

export default function PricingSection() {
        return (
                <section id="pricing" className="w-full  py-20 px-4 text-white">
                        {/* Header */}
                        <div className="text-center mb-14">
                                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                                        Simple Plans
                                </h2>
                                <p className="text-gray-400 max-w-4xl text-1xl mx-auto font-normal">
                                        As a professional video editor and content strategist, I provide full-service content solutions, from editing shorts, reels, long-form videos, to overall content strategy and optimization. Choose the plan that fits your content flow.

                                </p>
                        </div>

                        {/* Pricing Grid */}
                        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
                                {plans.map((plan, idx) => (
                                        <motion.div
                                                key={idx}
                                                className="border border-gray-900 rounded-2xl shadow-md bg-[#121212] relative"
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        >
                                                {/* Popular Badge */}
                                                <div className="bg-[#121212] rounded-lg p-6 m-4 border border-dashed border-gray-700 relative">
                                                        {plan.popular && (
                                                                <div className="absolute top-8 right-8 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                                        Popular
                                                                </div>
                                                        )}

                                                        {/* Plan Header */}
                                                        <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

                                                        <div className="flex items-baseline gap-1 mb-2">
                                                                <p className="text-4xl font-bold">{plan.price}</p>
                                                                <span className="text-gray-400 text-base font-normal">/month</span>
                                                        </div>

                                                        <p className="text-gray-300 mb-8">{plan.description}</p>

                                                        {/* Button */}
                                                        <button
                                                                className={`flex items-center justify-center gap-2 rounded-2xl cursor-pointer px-6 py-3 font-medium transition ${plan.buttonColor}`}
                                                        >
                                                                <a href="/book-a-call"> Book a Call </a><FaArrowRight className="text-sm" />
                                                        </button>
                                                </div>

                                                {/* Features */}
                                                <div className="mt-8 p-8">
                                                        <h4 className="font-semibold mb-3 text-gray-200">
                                                                Features included:
                                                        </h4>
                                                        <ul className="space-y-2 text-gray-300">
                                                                {plan.features.map((feature, i) => (
                                                                        <li key={i} className="flex items-center gap-2">
                                                                                <FaCheckCircle className="text-gray-500" /> {feature}
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                </div>
                                        </motion.div>
                                ))}
                        </div>

                        {/* Custom Plan */}
                        <motion.div
                                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-[#121212] text-white rounded-2xl p-8"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                        >
                                {/* Left Side */}
                                <div className="bg-[#121212] p-6 rounded-2xl border border-dashed border-gray-700">
                                        <h3 className="text-xl font-semibold mb-6">Custom Plan ( Recommended )</h3>

                                        <div className="flex items-baseline gap-1 mb-2">
                                                <p className="text-4xl font-bold">🤝</p>
                                                <span className="text-gray-400 text-base font-normal">/month</span>
                                        </div>
                                        <p className="text-gray-300 mb-6">
                                                Tailored plans for content strategists and professional editors handling client-specific projects.
                                        </p>
                                        <button
                                                className={`flex items-center justify-center gap-2 rounded-2xl cursor-pointer px-6 py-3 font-medium transition border border-gray-700 border-dashed bg-[#191919] hover:bg-orange-600`}
                                        >
                                                <a href="/book-a-call"> Book a Call </a><FaArrowRight className="text-sm" />
                                        </button>
                                </div>

                                {/* Right Side */}
                                <div>
                                        <h4 className="font-semibold mb-3 pt-4">Features included:</h4>
                                        <ul className="space-y-4 text-gray-300 max-w-5xl">
                                                <li className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-gray-500 flex-shrink-0" />
                                                        <span>Choose from 10 to 40+ Video Edits</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-gray-500 flex-shrink-0" />
                                                        <span>24h / 48h / 72h Delivery</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-gray-500 flex-shrink-0" />
                                                        <span>Titles, thumbnails, and retention tips</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-gray-500 flex-shrink-0" />
                                                        <span>Shorts, Reels, long-form, podcasts</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                        <FaCheckCircle className="text-gray-500 flex-shrink-0" />
                                                        <span>One edit = multi-channel assets</span>
                                                </li>
                                        </ul>

                                </div>
                        </motion.div>
                </section>
        );
}
