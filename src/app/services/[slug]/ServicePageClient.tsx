'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Calculator, Users, Cpu, FileText, ShieldCheck, Search, Shield, ShieldAlert, Crown } from 'lucide-react'
import { ServiceItem, familyOfficeServices, cybersecurityServices } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/home/CTASection'

const iconMap: { [key: string]: any } = {
    Calculator,
    Users,
    Cpu,
    FileText,
    ShieldCheck,
    Search,
    Shield,
    ShieldAlert,
    Crown,
}

export default function ServicePageClient({ service }: { service: ServiceItem }) {
    const Icon = iconMap[service.icon] || Shield
    const relatedServices = service.category === 'family-office'
        ? familyOfficeServices.filter(s => s.slug !== service.slug)
        : cybersecurityServices.filter(s => s.slug !== service.slug)

    return (
        <>
            <PageHero
                title={service.title}
                subtitle={service.shortDescription}
                breadcrumb={[
                    { label: 'Services', href: '/services' },
                    { label: service.title, href: `/services/${service.slug}` },
                ]}
            />

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-2"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                                    <Icon className="h-8 w-8 text-gold-600" />
                                </div>
                                <div>
                                    <span className="text-gold-600 text-sm font-medium uppercase tracking-wider">
                                        {service.category === 'family-office' ? 'Family Office Service' : 'Cybersecurity Service'}
                                    </span>
                                    <h2 className="font-serif text-2xl text-navy-900">{service.title}</h2>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                {service.fullDescription.map((paragraph, index) => (
                                    <p key={index} className="text-navy-600 leading-relaxed text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <Link href="/contact" className="btn-primary">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-navy-50 rounded-2xl p-8 sticky top-32">
                                <h3 className="font-serif text-xl text-navy-900 mb-6">What's Included</h3>
                                <ul className="space-y-3">
                                    {service.features.map((feature, index) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-navy-700 text-sm">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Key Benefits"
                        subtitle="How this service helps you achieve your goals."
                        centered
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 border border-navy-100"
                            >
                                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle className="h-5 w-5 text-gold-600" />
                                </div>
                                <p className="text-navy-700 font-medium">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        title="Our Process"
                        subtitle="How we deliver this service to ensure your success."
                        centered
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-navy-100 hidden md:block" />

                            <div className="space-y-8">
                                {service.process.map((step, index) => (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-white font-serif text-lg z-10 relative">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-8">
                                            <h3 className="font-serif text-xl text-navy-900 mb-2">{step.step}</h3>
                                            <p className="text-navy-600">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <SectionHeading
                        title={`Related ${service.category === 'family-office' ? 'Family Office' : 'Cybersecurity'} Services`}
                        subtitle="Explore other services that complement this offering."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedServices.slice(0, 4).map((relatedService, index) => {
                            const RelatedIcon = iconMap[relatedService.icon] || Shield
                            return (
                                <motion.div
                                    key={relatedService.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/services/${relatedService.slug}`}
                                        className="block bg-white rounded-xl p-6 border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all group h-full"
                                    >
                                        <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                                            <RelatedIcon className="h-6 w-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                                        </div>
                                        <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {relatedService.title}
                                        </h3>
                                        <p className="text-navy-600 text-sm">{relatedService.shortDescription}</p>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    )
}
