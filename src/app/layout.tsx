import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    metadataBase: new URL('https://devasinifamilyoffice.com'),
    title: {
        default: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
        template: '%s | Devasini Family Office'
    },
    description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
    keywords: ['family office', 'wealth management', 'cybersecurity', 'UHNWI', 'investment advisory', 'cyber defense', 'financial security', 'private wealth', 'family office services', 'SEC compliance'],
    authors: [{ name: 'Devasini Family Office' }],
    creator: 'Devasini Family Office',
    publisher: 'Devasini Family Office',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://devasinifamilyoffice.com',
        siteName: 'Devasini Family Office',
        title: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
        description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Devasini Family Office',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
        description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
        images: ['/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add your verification codes here when available
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <StructuredData />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
