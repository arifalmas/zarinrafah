'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../../lib/utils';

const faqs = [
        {
                question: 'Is Zarin Rafah available for on-site work?',
                answer: 'Currently, Zarin Rafah is not available for on-site work. She primarily takes remote projects.',
        },
        {
                question: 'Can I hire Zarin Rafah?',
                answer: 'Yes, she is available for hire. It is recommended to discuss your project details and expectations before hiring.',
        },
        {
                question: 'Is Zarin Rafah a content strategist?',
                answer: 'Absolutely! She is not just an editor. She is a full content strategist handling everything from planning to execution.',
        },
        {
                question: 'Is Zarin Rafah available for collaborations?',
                answer: 'Yes, she is open to collaborations. Proper communication is necessary to coordinate effectively.',
        },
];

export default function FaqSection() {
        const [selectedIndex, setSelectedIndex] = useState < number | null > (null);

        return (
                <section id="faq" className="relative overflow-hidden bg-[#000000] pb-24 p-4 text-white">
                        {/* Gradient Backgrounds */}
                        <div className="absolute top-1/2 -right-40 z-[-1] h-64 w-64 rounded-full bg-orange-600 opacity-20 blur-3xl select-none"></div>
                        <div className="absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full bg-white/5 opacity-50 blur-3xl select-none"></div>

                        <div className="container max-w-6xl mx-auto relative z-10 justify-center items-center">
                                {/* Section Header */}
                                <div className="flex justify-center">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/20 border border-orange-400/40 px-3 py-1 text-orange-400 font-bold uppercase">
                                                <span>✶</span>
                                                <span className="text-sm">FAQs</span>
                                        </div>
                                </div>

                                <h2 className="mx-auto mt-6 max-w-xl text-center text-5xl font-medium md:text-[54px] md:leading-[60px] text-white">
                                        Questions about <span className="text-orange-500">Zarin Rafah?</span>
                                </h2>

                                {/* FAQ List */}
                                <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
                                        {faqs.map((faq, index) => {
                                                const isOpen = selectedIndex === index;
                                                return (
                                                        <div
                                                                key={faq.question}
                                                                onClick={() => setSelectedIndex(isOpen ? null : index)}
                                                                className="cursor-pointer rounded-2xl border border-gray-700 border-dashed bg-[#1a1a1a] p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.05)_inset] text-white transition-all duration-300 hover:border-orange-400/50"
                                                        >
                                                                <div className="flex items-start justify-between">
                                                                        <h3 className="m-0 font-medium text-lg">{faq.question}</h3>
                                                                        <Plus
                                                                                size={26}
                                                                                className={cn(
                                                                                        'flex-shrink-0 text-orange-400 transition-transform duration-300',
                                                                                        isOpen && 'rotate-45'
                                                                                )}
                                                                        />
                                                                </div>

                                                                <AnimatePresence initial={false}>
                                                                        {isOpen && (
                                                                                <motion.div
                                                                                        key="content"
                                                                                        initial={{ height: 0, opacity: 0 }}
                                                                                        animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
                                                                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                                        transition={{ duration: 0.3 }}
                                                                                        className="overflow-hidden"
                                                                                >
                                                                                        <p className="text-gray-300">{faq.answer}</p>
                                                                                </motion.div>
                                                                        )}
                                                                </AnimatePresence>
                                                        </div>
                                                );
                                        })}
                                </div>
                        </div>
                </section>
        );
}
