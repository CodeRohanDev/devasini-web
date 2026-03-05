import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
    title: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
    description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
    keywords: 'family office, wealth management, cybersecurity, UHNWI, investment advisory',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
