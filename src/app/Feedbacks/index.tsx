"use client"

import { cn } from "../../../lib/utils"
import { Marquee } from "./marque"

const reviews = [
        {
                name: "মুমতাজ মুমু ",
                username: "@therefore.mumu",
                body: "She’s one of the brightest star of our community. Talented, humble, sweet and what not! Best of luck Sumaiya Jannat Zarin ei nao fuler tora 💐",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/557621042_3776348299325960_707900422198859513_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHEFLtWiEa9QnAl3PRDQDciJsGLF_ccieImwYsX9xyJ4j2tz_-BQcx_1FPLXr2Uzxy78d1KYMdMKsGDJ30IoDsK&_nc_ohc=tcjNqMyJepwQ7kNvwGrrB8H&_nc_oc=Adnym5GzxrmeIkwlJHNSdTAGiAueUg_vCdIQHhPQ3Zdl1jqH8VcQewev1Nd7ONXlqpA&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=hnXkiU7CAi8vBla2YlHG8A&oh=00_AffFDzltJafXIb1_UrzvAZ2bROACT7L94u_XwiFiHzTUxw&oe=68F6E70D",
        },
        {
                name: "Ali Nawaz",
                username: "@alinawazyeasin13",
                body: "Your editing is outstanding but I want to know the secret of your accent. How did you learn it so nicely? 👀",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/540763778_122174432456570795_4232384877208284120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHY0UbBM-76xw70JzBLfj05BMlwgfv4yVsEyXCB-_jJW3gLHuH-EgqbqupfveDpy612DtVSdzsEKQAXet8MOy1i&_nc_ohc=m87nQIwkTsMQ7kNvwHltLRQ&_nc_oc=Adn6s1oejC1tM2V7iUAYdtyFNqIAQGTIWTOTaP-nYdCoVSgcjVYHAgBmmABqVsj8HLk&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=7vB1CdoIad--vYWsBq2czQ&oh=00_Aff3WSe5v8-UIKt8vlKemVHaVWaNHW8zxIU0PSvCMlnTPQ&oe=68F715B8",
        },
        {
                name: "Saad Mahmud ",
                username: "@editedbysaad",
                body: "This girl Sumaiya Jannat Zarin does amazing work- I'm becoming a big fan! She has a bright future ahead. Lots of love and best wishes, sister.💙",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/474789045_28399683526314015_2762516847304864913_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEhphnvUG1PcbnNPsrpxEPWELmZ-gzjaIMQuZn6DONog7cM58L4oQWxT-WBmahHVK2ap12aLlDiNw3KYw_uFkzQ&_nc_ohc=pn2N5RZCojcQ7kNvwGQ-iOq&_nc_oc=AdnKfgWmdsgff4YLzFS8WKo1aoz2icc7q-z9U9cOgHqLSogd7MLJab2D6Obd72qDmB0&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=lvnyIGJ-icHtmLbSzU9Nyw&oh=00_AfcLNkOl5C5rYfwiXpp0CGInP-_GDso9DCfWDYsock0Czw&oe=68F71202",
        },
        {
                name: "Farhana Rahman",
                username: "@farhana.rahman.183461",
                body: "I believe, her NAME will be her BRAND soon! ",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/487814890_122249445536023445_7408637806272460579_n.jpg?stp=c0.117.686.686a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE3qb7gRjobVSvI9_CJltLTgJ5UKKdmzaOAnlQop2bNoxF_mXj9bPFJPOerojKwpaM731qXfYlzy7xv7N0ScUeR&_nc_ohc=eIydKbpGyOoQ7kNvwFAwm0J&_nc_oc=AdnBu4l8U3Gqz-MXZsxPR-r5dCPNmZr1AMYu8YFvzPstmpbekAZRnHXb_hPtWaQExR4&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=YUU1b_bZdrmzVMTQtHXUbA&oh=00_AfcMSSMpZZPUA21cpaggG_KBYMd2hPSArqfGjXn4iWHgAA&oe=68F6E88D",
        },
        {
                name: "Arif Almas",
                username: "@coder.arifalmams",
                body: "She’s Zarin Rafah. Her storytelling skills are amazing Mashallah, truly inspiring! 🫡",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/558917014_1144859334287856_1690111259556630343_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGQ5ybGzIigLvTBSUIMF1lFtUDznAkzjx61QPOcCTOPHiPhTj1Q0FI8SU0f9uRxfpOJf3PLvZmgumalpSgTkzFn&_nc_ohc=T36mPjEMqjQQ7kNvwFY40qi&_nc_oc=Adl0JSg23NJNfFbG4_SESRpE2gSjZVw2gomVNqCFmzWqZBwZI0BAIA4NwQaSoV-69JU&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=Kf7rNxYY_Pm2bQKel9_2jQ&oh=00_AffREftv0-UOxEfkyXRvpkzdA0uTYbXUzDNAWJEQ_VTbyA&oe=68F6EA80",
        },
        {
                name: "Rafayat Rakib",
                username: "@therafayatrakib",
                body: "Damn this feels good 🔥",
                img: "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/467525648_1288957128905976_6398573940337790450_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHoShxlIR-mbrAjF4lMa6rXj5YukapXd--Pli6Rqld371sp0AhIhCGjVK8O2Pg5mNOo9zG6P7Kjl8XGIQ7ZTABu&_nc_ohc=Cx_TGn79EHEQ7kNvwH_7Vi0&_nc_oc=AdmkzQJhEo4cGMPz3_doYjwvXbvgC9WOEgE_Ab2Key2zdpQf44GvYAjlvn9v_HD9oNQ&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=KQW7QyeOT1wug8xmgzwUJA&oh=00_AffuMo2IWEKIxQT22NNo4PBGhrLZiVMygA80fQy8iDKGAQ&oe=68F70B31",
        },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({ img, name, username, body }: { img: string; name: string; username: string; body: string }) {
        return (
                <figure
                        className={cn(
                                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300",
                                "border-gray-700 bg-[#121212] hover:bg-gray-900 text-white",
                        )}
                >
                        <div className="flex flex-row items-center gap-2">
                                <img className="rounded-full" width="32" height="32" alt={name} src={img} />
                                <div className="flex flex-col">
                                        <figcaption className="text-sm font-semibold text-white">{name}</figcaption>
                                        <p className="text-[14px] text-gray-400">{username}</p>
                                </div>
                        </div>
                        <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
                </figure>
        )
}

export function FeedbackSection() {
        return (
                <div className="flex justify-center py-12 bg-[#000000]">
                        <div className="relative w-full max-w-7xl flex flex-col items-center justify-center overflow-hidden">

                                <div className="text-4xl py-5 text-center">
                                        <h2 className="font-bold text-white">Loved by Creators</h2>
                                        <p className="text-gray-300 text-[20px] mt-2">Real reviews. Real love. Real magic.</p>
                                </div>

                                <Marquee pauseOnHover className="[--duration:20s] mt-4">
                                        {firstRow.map((review) => (
                                                <ReviewCard key={review.username} {...review} />
                                        ))}
                                </Marquee>

                                <Marquee reverse pauseOnHover className="[--duration:20s]">
                                        {secondRow.map((review) => (
                                                <ReviewCard key={review.username} {...review} />
                                        ))}
                                </Marquee>


                                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#000000f1] to-transparent"></div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#000000ee] to-transparent"></div>
                        </div>
                </div>

        )
}
