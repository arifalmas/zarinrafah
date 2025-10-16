"use client";

const BADGES = [
        { id: "fast", text: "Fast Delivery", type: "bolt" },
        { id: "count", text: "50+ Videos Delivered", type: "none" },
        { id: "rating", text: "4.9 Stars Rating", type: "rating", score: 4.9 },
        { id: "top", text: "Top Rated Editors", type: "star" },
        { id: "grading", text: "Custom Color Grading", type: "none" },
        { id: "fav", text: "Client Favorite", type: "star" },
];

// small icon components
function StarIcon({ className = "w-3 h-3 text-amber-500" }: { className?: string }) {
        return (
                <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118l-3.372-2.456a1 1 0 00-1.176 0L5.13 17.73c-.785.57-1.84-.197-1.54-1.118l1.286-3.956a1 1 0 00-.364-1.118L.44 8.083C-.343 7.513.059 6.273 1.028 6.273h4.163a1 1 0 00.95-.69L7.427 1.626z" />
                </svg>
        );
}

function BoltIcon({ className = "w-4 h-4 text-indigo-600" }: { className?: string }) {
        return (
                <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
        );
}

export default function BrandTrain() {
        // duplicate the badges to create a seamless single-track loop
        const looped = BADGES.concat(BADGES);

        return (
                <section className="w-full bg-transparent py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div
                                        className="brand-train relative overflow-hidden
}"
                                        role="region"
                                        aria-label="Trusted badges marquee"
                                >
                                        <div className="train-track" aria-hidden="false">
                                                {looped.map((b, i) => (
                                                        <div
                                                                key={b.id + "-" + i}
                                                                className="badge inline-flex items-center justify-center px-5 py-2 mr-4 rounded-2xl bg-[#1e1e1e] border border-neutral-800 shadow-sm text-sm font-medium text-neutral-300"
                                                                role="listitem"
                                                        >
                                                                <div className="flex items-center gap-2">
                                                                        {/* icon for certain badge types */}
                                                                        {b.type === "rating" ? (
                                                                                <div className="flex items-center gap-0.5 -ml-0.5">
                                                                                        {/* show 5 small stars for visual rating */}
                                                                                        <StarIcon className="w-3 h-3 text-amber-500" />
                                                                                        <StarIcon className="w-3 h-3 text-amber-500" />

                                                                                </div>
                                                                        ) : b.type === "star" ? (
                                                                                <StarIcon className="w-4 h-4 text-amber-500" />
                                                                        ) : b.type === "bolt" ? (
                                                                                <BoltIcon className="w-4 h-4 text-indigo-600" />
                                                                        ) : null}

                                                                        <span className="whitespace-nowrap">{b.text}</span>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>

                                        {/* soft edge fades to mask the start/end */}
                                        <div className="fade-left" aria-hidden="true" />
                                        <div className="fade-right" aria-hidden="true" />
                                </div>
                        </div>

                        <style>{`
        .brand-train {
          --speed: 18s;
          --fade: 6rem;
          position: relative;
        }

        .train-track {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
          will-change: transform;
          min-width: max-content;
          animation: scroll-left var(--speed) linear infinite;
          padding: 0.5rem 0;
        }

        .train-track .badge { flex: 0 0 auto; }

        .brand-train:hover .train-track,
        .brand-train:focus-within .train-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .brand-train .fade-left,
        .brand-train .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: var(--fade);
          pointer-events: none;
          z-index: 20;
        }

       .brand-train .fade-left {
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 60%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.brand-train .fade-right {
  right: 0;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 60%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

        @media (prefers-reduced-motion: reduce) {
          .train-track { animation: none; transform: none; }
        }

        @media (max-width: 640px) {
          .brand-train { --speed: 26s; --fade: 4rem; }
          .badge { padding-left: 0.75rem; padding-right: 0.75rem; font-size: 0.875rem; }
        }
      `}</style>
                </section>
        );
}