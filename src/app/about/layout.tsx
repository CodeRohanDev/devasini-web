import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us | Company Profile & Philosophy',
    description: 'Devasini Family Office operates at the intersection of wealth management, advanced technology, and cybersecurity. Learn about our philosophy, security standards, and institutional-grade infrastructure.',
    keywords: ['family office', 'company profile', 'wealth management philosophy', 'FDIC-level security', 'institutional infrastructure', 'cybersecurity standards'],
    openGraph: {
        title: 'About Us | Devasini Family Office',
        description: 'Institutional-grade solutions at the intersection of wealth management, advanced technology, and cybersecurity.',
        url: 'https://devasinifamilyoffice.com/about',
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
