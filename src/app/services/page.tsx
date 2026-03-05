'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    Calculator, Users, Cpu, FileText, ShieldCheck,
    Search, Shield, ShieldAlert, Crown, CheckCircle, ArrowRight
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import { familyOfficeServices, cybersecurityServices } from '@/lib/services-data'

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

const cyberPackages = [
    {
        slug: 'rapid-diagnostic',
        name: 'Rapid Diagnostic',
        icon: Search,
        description: 'SEC cybersecurity compliance assessment through a two-session executive diagnostic process.',
        features: ['SEC compliance assessment', 'Executive diagnostic sessions', 'Risk identification', 'Remediation roadmap'],
        highlight: false,
    },
    {
        slug: 'basic-cybersecurity',
        name: 'Basic Package',
        icon: Shield,
        description: 'Foundation-level protection with CIS Controls Framework implementation.',
        features: ['CIS Controls Framework', 'Endpoint monitoring', '24/7 monitoring', 'Firewall monitoring'],
        highlight: false,
    },
    {
        slug: 'advanced-cybersecurity',
        name: 'Advanced Package',
        icon: ShieldAlert,
        description: 'Enhanced protection with advanced analytics and virtual CISO services.',
        features: ['All Basic services', 'Advanced analytics', 'Identity & access management', 'Incident response plan', 'vCISO services'],
        highlight: true,
    },
    {
        slug: 'comprehensive-cybersecurity',
        name: 'Comprehensive Package',
        icon: Crown,
        description: 'Complete enterprise-grade security with full governance and reporting.',
        features: ['Privileged identity management', 'Penetration testing', 'Threat hunting', 'Incident response management', 'Full governance & reporting'],
        highlight: false,
    },
]

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Comprehensive family office and cybersecurity solutions designed for ultra high net worth individuals and institutional clients."
                breadcrumb={[{ label: 'Services', href: '/services' }]}
            />

            <section id="family-office" className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        title="Family Office Services"
                        subtitle="Full-service operational support tailored to the unique needs of affluent families."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {familyOfficeServices.map((service, index) => {
                            const Icon = iconMap[service.icon] || Shield
                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="block h-full bg-white border border-navy-100 rounded-xl p-6 hover:border-gold-300 hover:shadow-lg transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors">
                                            <Icon className="h-6 w-6 text-gold-600" />
                                        </div>
                                        <h3 className="font-serif text-xl text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-navy-600 text-sm mb-4">{service.shortDescription}</p>
                                        <span className="inline-flex items-center text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                                            Learn More
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="cybersecurity" className="section-padding bg-navy-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Cybersecurity Services"
                        subtitle="Enterprise-grade digital protection from assessment to comprehensive security management."
                        centered
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                        {cyberPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/services/${pkg.slug}`}
                                    className={`block h-full rounded-xl p-8 transition-all group ${pkg.highlight
                                            ? 'bg-navy-900 text-white border-2 border-gold-500 hover:border-gold-400'
                                            : 'bg-white border border-navy-100 hover:border-gold-300 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${pkg.highlight ? 'bg-gold-600 group-hover:bg-gold-500' : 'bg-navy-100 group-hover:bg-gold-100'
                                            }`}>
                                            <pkg.icon className={`h-6 w-6 ${pkg.highlight ? 'text-white' : 'text-navy-900 group-hover:text-gold-600'} transition-colors`} />
                                        </div>
                                        {pkg.highlight && (
                                            <span className="px-3 py-1 bg-gold-600 text-white text-xs font-medium rounded-full">
                                                Most Popular
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={`font-serif text-2xl mb-3 transition-colors ${pkg.highlight ? 'text-white' : 'text-navy-900 group-hover:text-gold-600'
                                        }`}>
                                        {pkg.name}
                                    </h3>
                                    <p className={`mb-6 ${pkg.highlight ? 'text-navy-200' : 'text-navy-600'}`}>
                                        {pkg.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <CheckCircle className={`h-5 w-5 flex-shrink-0 ${pkg.highlight ? 'text-gold-500' : 'text-gold-600'
                                                    }`} />
                                                <span className={pkg.highlight ? 'text-navy-100' : 'text-navy-700'}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <span className={`inline-flex items-center font-medium transition-colors ${pkg.highlight ? 'text-gold-500 group-hover:text-gold-400' : 'text-navy-900 group-hover:text-gold-600'
                                        }`}>
                                        Learn More
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <Link href="/contact" className="btn-primary">
                            Discuss Your Security Needs
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
