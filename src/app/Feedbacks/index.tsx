"use client";


const reviews = [
        {
                name: "Ali Nawaz",
                platform: "commented on Facebook",
                body: "Your editing is outstanding but I want to know the secret of your accent. How did you learn it so nicely? 👀",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "মুমতাজ মুমু",
                platform: "commented on Facebook",
                body: "She’s one of the brightest star of our community. Talented, humble, sweet and what not! Best of luck Sumaiya Jannat Zarin ei nao fuler tora 💐",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Jannatul Maowa Runa",
                platform: "commented on Facebook",
                body: "Girl, you killed it! 🔥 From your accent to your editing skills, everything was so smooth and engaging that I didn’t even realize how quickly the video ended. This is such a creative way to share your journey- Mad respect for the effort you put into this, it’s motivating me already 🌿✨",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Tanjir Pallab",
                platform: "commented on Facebook",
                body: "Nah shesh! You crossed your limit, ekhon ar obaak hobona kono kichute. Ami jmn clean edit pochondo kori eta shegulor moddhei ekta, nothing fancy just proper visuals, accent, sound design (still needs to improve a bit) and everything. Outstanding❤️",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Saad Mahmud",
                platform: "commented on Facebook",
                body: "This girl Sumaiya Jannat Zarin does amazing work- I'm becoming a big fan! She has a bright future ahead. Lots of love and best wishes, sister.💙",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },

        {
                name: "Maruf Hasan Shagor",
                platform: "commented on Facebook",
                body: "kemne pare ekta manush emne edit korte r fluency and pronunciation top notched",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Arif Almas",
                platform: "commented on YouTube",
                body: "She’s Zarin Rafah. Her storytelling skills are amazing Mashallah, truly inspiring! 🫡",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Tanjim Khan",
                platform: "commented on Facebook",
                body: "Really crazy editing. You get hooked to the video and keep watch it till the end. Keep it up.",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },


        {
                name: "Maruf Hasan Shagor",
                platform: "commented on YouTube",
                body: "kemne pare ekta manush emne edit korte r fluency and pronunciation top notched",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Rehman Abdur",
                platform: "commented on Facebook",
                body: "Clean, strategic and all the way up. Dua and best wishes for you and your dada ",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Sadman Sharar Riam",
                platform: "commented on Facebook",
                body: "Really congratulations on breaking free from the rat race 🔥 never been so inspired as a peer",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",

        },
        {
                name: "Marjahan Begum",
                platform: "commented on Facebook",
                body: "Shudhu je chele ra valo parbe ta kintu na. That's why I proud for her ❤️. Genius girl, go ahead and ahead.",
                img: "https://cbx-prod.b-cdn.net/COLOURBOX25634105.jpg?width=800&height=800&quality=70",
        },
];

function ReviewCard({
        img,
        name,
        platform,
        body,
}: {
        img: string;
        name: string;
        platform: string;
        body: string;
}) {
        return (
                <div
                        className="
        group relative bg-[#0d0d0f] border border-neutral-800 
        rounded-2xl p-6 text-gray-200 shadow-md 
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-[0_0_25px_-8px_rgba(255,255,255,0.1)]
        hover:border-neutral-700
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br
        before:from-white/5 before:to-transparent before:opacity-0
        before:transition-opacity before:duration-500 group-hover:before:opacity-100
        backdrop-blur-sm
        flex flex-col gap-4 font-[Poppins]
      "
                >
                        <div className="flex items-center gap-3">
                                <img
                                        src={img}
                                        alt={name}
                                        width={46}
                                        height={46}
                                        className="rounded-full object-cover border border-gray-700 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="text-left">
                                        <h4 className="text-white font-semibold leading-tight text-lg md:text-xl">
                                                {name}
                                        </h4>
                                        <p className="text-sm md:text-base text-gray-400">{platform}</p>
                                </div>
                        </div>

                        <p className="text-[15px] md:text-[15px] leading-relaxed text-gray-300  group-hover:text-gray-100 transition-colors duration-500">
                                “{body}”
                        </p>
                </div>
        );
}

export function FeedbackSection() {
        return (
                <section className="bg-black py-24 px-6 md:px-10 font-[Poppins]">
                        <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-14">
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                                What <span className="text-orange-500 italic">others</span> are saying
                                        </h2>
                                        <p className="text-gray-500 text-lg md:text-xl">
                                                Trusted by creators and storytellers who value emotion and simplicity.
                                        </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                        {reviews.map((review, idx) => (
                                                <ReviewCard key={idx} {...review} />
                                        ))}
                                </div>
                        </div>
                </section>
        );
}