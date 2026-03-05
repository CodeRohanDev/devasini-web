import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustedBy from '@/components/home/TrustedBy'
import ValueProposition from '@/components/home/ValueProposition'
import ServicesOverview from '@/components/home/ServicesOverview'
import GrowthCharts from '@/components/home/GrowthCharts'
import LeadershipHighlight from '@/components/home/LeadershipHighlight'
import RecentActivities from '@/components/home/RecentActivities'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
    title: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
    description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices. Comprehensive family office solutions with enterprise-grade security.',
    openGraph: {
        title: 'Devasini Family Office | Your Partner in Wealth through CyberDefense',
        description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
        url: 'https://devasinifamilyoffice.com',
    },
}

export default function Home() {
    return (
        <>
            <Hero />
            <TrustedBy />
            <ValueProposition />
            <ServicesOverview />
            <GrowthCharts />
            <LeadershipHighlight />
            <RecentActivities />
            <CTASection />
        </>
    )
}
