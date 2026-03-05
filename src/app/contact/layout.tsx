import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Get in Touch',
    description: 'Contact Devasini Family Office to discuss your wealth management and cybersecurity needs. Schedule a consultation with our team of experts.',
    keywords: ['contact family office', 'wealth management consultation', 'cybersecurity consultation', 'schedule meeting'],
    openGraph: {
        title: 'Contact Us | Devasini Family Office',
        description: 'Get in touch to discuss your wealth management and cybersecurity needs.',
        url: 'https://devasinifamilyoffice.com/contact',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
