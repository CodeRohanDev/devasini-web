import { allServices, getServiceBySlug } from '@/lib/services-data'
import { notFound } from 'next/navigation'
import ServicePageClient from './ServicePageClient'

export function generateStaticParams() {
    return allServices.map((service) => ({
        slug: service.slug,
    }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug)

    if (!service) {
        notFound()
    }

    return <ServicePageClient service={service} />
}
