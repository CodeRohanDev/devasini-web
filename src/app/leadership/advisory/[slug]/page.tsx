import Link from 'next/link'
import { advisoryBoard, getLeaderBySlug } from '@/lib/leadership-data'
import { notFound } from 'next/navigation'
import PageHero from '@/components/ui/PageHero'
import AdvisoryLeaderClient from './AdvisoryLeaderClient'

export function generateStaticParams() {
    return advisoryBoard.map((leader) => ({
        slug: leader.slug,
    }))
}

export default function AdvisoryLeaderPage({ params }: { params: { slug: string } }) {
    const leader = getLeaderBySlug(params.slug)

    if (!leader || leader.category !== 'advisory') {
        notFound()
    }

    return <AdvisoryLeaderClient leader={leader} />
}
