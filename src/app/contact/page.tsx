import ContactClient from "./ContactClient";

export const metadata = {
        title: "Contact with Zarin Rafah ",
        description:
                "Get in touch with Zarin Rafah to discuss your branding, content creation, or video editing ideas. Let’s collaborate and make something truly remarkable together.",
        openGraph: {
                title: "Contact with Zarin Rafah",
                description:
                        "Reach out to Zarin Rafah for creative collaboration on branding, content, and video editing projects.",
                url: "https://zarinrafah.com/contact",
                siteName: "Zarin Rafah",
                images: [
                        {
                                url: "https://zarinrafah.com/og-image.jpg",
                                width: 1200,
                                height: 630,
                                alt: "Contact Zarin Rafah",
                        },
                ],
                locale: "en_US",
                type: "website",
        },
};

export default function ContactPage() {
        return <ContactClient />;
}
