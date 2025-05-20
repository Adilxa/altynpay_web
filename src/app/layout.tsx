import type {Metadata} from "next";
import "./globals.scss";
import {Inter, Montserrat} from "next/font/google";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-inter",
});

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://altynpay.kg'),
    title: {
        default: "Altynpay | Быстрые и безопасные платежи",
        template: "%s | Altynpay"
    },
    description: "Altynpay - надежная платежная система для быстрых переводов и оплаты услуг. Безопасные транзакции, выгодные тарифы и круглосуточная поддержка.",
    keywords: ["платежная система", "онлайн платежи", "денежные переводы", "электронные платежи", "финансовые услуги", "Altynpay"],
    authors: [{name: "KG Friends"}],
    creator: "KG Friends",
    publisher: "Kg Friends",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            'max-snippet': -1,
        },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    // Open Graph / Facebook
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: 'https://altynpay.kg/',
        siteName: 'Altynpay',
        title: 'Altynpay | Быстрые и безопасные платежи',
        description: 'Altynpay - надежная платежная система для быстрых переводов и оплаты услуг. Безопасные транзакции, выгодные тарифы и круглосуточная поддержка.',
        images: [
            {
                url: 'https://altynpay.kg/og-image.jpg', // Replace with your actual image path
                width: 1200,
                height: 630,
                alt: 'Altynpay - платежная система',
            },
        ],
    },
    // Twitter
    twitter: {
        card: 'summary_large_image',
        title: 'Altynpay | Быстрые и безопасные платежи',
        description: 'Altynpay - надежная платежная система для быстрых переводов и оплаты услуг.',
        images: ['https://altynpay.com/twitter-image.jpg'], // Replace with your actual image path
        creator: '@altynpay', // Replace with your actual Twitter handle
    },
    applicationName: 'Altynpay',
    appleWebApp: {
        capable: true,
        title: 'Altynpay',
        statusBarStyle: 'black-translucent',
    },
    category: 'finance',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="icon" href="/favicon.ico" type="image/svg+xml"/>
            <link rel="apple-touch-icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}