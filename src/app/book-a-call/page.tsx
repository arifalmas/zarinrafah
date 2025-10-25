import BookACallClient from "./BookACallClient";

export const metadata = {
        title: "Book a Call with Zarin Rafah",
        description:
                "Schedule a discovery call with Zarin Rafah to discuss your branding, content strategy, or video editing project. Let’s collaborate and bring your creative vision.",
        openGraph: {
                title: "Book a Call with Zarin Rafah",
                description:
                        "Schedule a discovery call with Zarin Rafah to discuss your branding, content strategy, or video editing project. Let’s collaborate and bring your creative vision.",
                url: "https://zarinrafah.com/book-a-call",
                siteName: "Zarin Rafah",
                images: [
                        {
                                url: "https://zarinrafah.com/og-image.png",
                                width: 1200,
                                height: 630,
                                alt: "Book a Call with Zarin Rafah",
                        },
                ],
                locale: "en_US",
                type: "website",
        },
};

export default function BookACallPage() {
        return <BookACallClient />;
}
