import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services | Family Office & Cybersecurity Solutions',
    description: 'Comprehensive family office and cybersecurity solutions designed for ultra high net worth individuals. From wealth management to enterprise-grade security packages including SEC compliance and CIS Controls.',
    keywords: ['family office services', 'cybersecurity packages', 'wealth management', 'SEC compliance', 'CIS Controls', 'vCISO services', 'incident response', 'penetration testing'],
    openGraph: {
        title: 'Our Services | Devasini Family Office',
        description: 'Comprehensive family office and cybersecurity solutions designed for ultra high net worth individuals and institutional clients.',
        url: 'https://devasinifamilyoffice.com/services',
    },
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
