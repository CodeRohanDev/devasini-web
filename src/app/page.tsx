import Hero from '@/components/home/Hero'
import TrustedBy from '@/components/home/TrustedBy'
import ValueProposition from '@/components/home/ValueProposition'
import ServicesOverview from '@/components/home/ServicesOverview'
import GrowthCharts from '@/components/home/GrowthCharts'
import LeadershipHighlight from '@/components/home/LeadershipHighlight'
import RecentActivities from '@/components/home/RecentActivities'
import CTASection from '@/components/home/CTASection'

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
