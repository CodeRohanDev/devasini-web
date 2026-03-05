import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Leadership Team | Experienced Professionals',
    description: 'Meet our leadership team and advisory board. Experienced professionals with institutional backgrounds in wealth management, cybersecurity, and technology.',
    keywords: ['leadership team', 'advisory board', 'family office executives', 'cybersecurity experts', 'wealth management professionals'],
    openGraph: {
        title: 'Leadership Team | Devasini Family Office',
        description: 'Guided by experienced professionals with institutional backgrounds and a shared commitment to excellence.',
        url: 'https://devasinifamilyoffice.com/leadership',
    },
}

export default function LeadershipLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
