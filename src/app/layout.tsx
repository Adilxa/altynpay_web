import type {Metadata, Viewport} from "next";
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

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
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
    },
    applicationName: 'Altynpay',
    category: 'finance',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
        <body>
        {children}
        </body>
        </html>
    );
}