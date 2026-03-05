import Link from 'next/link'
import { coreLeadership, getLeaderBySlug } from '@/lib/leadership-data'
import { notFound } from 'next/navigation'
import PageHero from '@/components/ui/PageHero'
import CoreLeaderClient from './CoreLeaderClient'

export function generateStaticParams() {
    return coreLeadership.map((leader) => ({
        slug: leader.slug,
    }))
}

export default function CoreLeaderPage({ params }: { params: { slug: string } }) {
    const leader = getLeaderBySlug(params.slug)

    if (!leader || leader.category !== 'core') {
        notFound()
    }

    return <CoreLeaderClient leader={leader} />
}
