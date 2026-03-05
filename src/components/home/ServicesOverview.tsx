'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, ShieldCheck, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const services = [
    {
        icon: Briefcase,
        title: 'Family Office Services',
        description: 'Comprehensive operational support for affluent families including accounting, vendor management, and technology.',
        features: ['Accounting & Bill Pay', 'Vendor Selection', 'Technology Implementation', 'Custom Reporting'],
        href: '/services#family-office',
        stat: '50+',
        statLabel: 'Families Served',
    },
    {
        icon: ShieldCheck,
        title: 'Cybersecurity Services',
        description: 'Enterprise-grade digital protection with 24/7 monitoring, incident response, and compliance management.',
        features: ['SEC Compliance', 'Endpoint Monitoring', 'Incident Response', 'vCISO Services'],
        href: '/services#cybersecurity',
        stat: '99.9%',
        statLabel: 'Security Uptime',
    },
]

export default function ServicesOverview() {
    return (
        <section className="section-padding bg-navy-50">
            <div className="container-custom">
                <SectionHeading
                    title="Our Services"
                    subtitle="Tailored solutions designed for the unique needs of ultra high net worth individuals and family offices."
                    centered
                />

                <div className="grid lg:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                                <div className="flex items-center justify-between p-6 border-b border-navy-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                                            <service.icon className="h-6 w-6 text-gold-600" />
                                        </div>
                                        <h3 className="font-serif text-xl text-navy-900">{service.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-serif text-2xl text-navy-900">{service.stat}</div>
                                        <div className="text-xs text-navy-500">{service.statLabel}</div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-navy-600 text-sm mb-6">{service.description}</p>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                                                <span className="text-navy-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={service.href}
                                        className="flex items-center justify-center w-full py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors group"
                                    >
                                        <span className="font-medium">Learn More</span>
                                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
