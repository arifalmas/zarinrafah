"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Footer from "../Footer";

export default function BookACallClient() {
        useEffect(() => {
                (async function () {
                        const cal = await getCalApi({ namespace: "15min" });
                        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
                })();
        }, []);

        return (
                <>
                        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-white font-[Poppins] ">
                                <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white text-center">
                                        Book a 15-Minute Call with Zarin Rafah
                                </h1>
                                <p className="text-gray-400 mb-8 text-center max-w-xl">
                                        Let's discuss your web project, ideas, or collaboration plans. Pick a
                                        suitable time below and let's make it happen.
                                </p>

                                <div className="w-full max-w-5xl h-[600px] z-20 bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-700">
                                        <Cal
                                                namespace="15min"
                                                calLink="zarinrafah/15min"
                                                style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        overflow: "scroll",
                                                        border: "none",
                                                        backgroundColor: "#1E1E1E",
                                                }}
                                                config={{ layout: "month_view" }}
                                        />
                                </div>
                        </div>
                        <Footer />
                </>
        );
}
