'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Eye, CheckCircle, Building, Lock, Server } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/home/CTASection'
import OperationalCharts from '@/components/about/OperationalCharts'
import PerformanceCharts from '@/components/about/PerformanceCharts'

const principles = [
    {
        icon: Shield,
        title: 'Security First',
        description: 'Every decision we make prioritizes the protection of your assets, information, and privacy.',
    },
    {
        icon: Target,
        title: 'Precision Execution',
        description: 'We deliver institutional-quality service with meticulous attention to detail.',
    },
    {
        icon: Eye,
        title: 'Complete Transparency',
        description: 'Clear communication and full visibility into all operations and decisions.',
    },
]

const standards = [
    'FDIC-level operating accounts',
    'Enterprise-grade encryption protocols',
    'Multi-factor authentication systems',
    'Regular third-party security audits',
    'Comprehensive incident response plans',
    'Continuous monitoring and threat detection',
]

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Company Profile"
                subtitle="Devasini Family Office operates at the intersection of wealth management, advanced technology, and cybersecurity, delivering institutional-grade solutions for elite families and individuals."
                breadcrumb={[{ label: 'About', href: '/about' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <SectionHeading
                                title="Our Philosophy"
                                subtitle="We believe that true wealth protection requires a holistic approach combining financial expertise with cutting-edge technology and security."
                            />
                            <div className="space-y-4 text-navy-600">
                                <p>
                                    In an increasingly complex digital landscape, families and high-net-worth
                                    individuals face unprecedented challenges in protecting their wealth and privacy.
                                    Traditional family office services are no longer sufficient.
                                </p>
                                <p>
                                    Devasini Family Office was founded on the principle that modern wealth
                                    management must integrate robust cybersecurity measures, advanced technology
                                    infrastructure, and traditional financial expertise into a seamless,
                                    institutional-grade service offering.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 gap-6"
                        >
                            {principles.map((principle) => (
                                <div key={principle.title} className="card flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center">
                                        <principle.icon className="h-6 w-6 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-navy-900 mb-2">{principle.title}</h3>
                                        <p className="text-navy-600 text-sm">{principle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Operational Excellence"
                        subtitle="Our infrastructure and internal controls meet the highest institutional standards."
                        centered
                    />

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="card text-center"
                        >
                            <Building className="h-10 w-10 text-gold-600 mx-auto mb-4" />
                            <h3 className="font-serif text-xl text-navy-900 mb-2">Institutional Infrastructure</h3>
                            <p className="text-navy-600 text-sm">
                                Enterprise-grade systems and processes designed for the most demanding clients.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="card text-center"
                        >
                            <Lock className="h-10 w-10 text-gold-600 mx-auto mb-4" />
                            <h3 className="font-serif text-xl text-navy-900 mb-2">Internal Controls</h3>
                            <p className="text-navy-600 text-sm">
                                Rigorous oversight and compliance frameworks ensure operational integrity.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="card text-center"
                        >
                            <Server className="h-10 w-10 text-gold-600 mx-auto mb-4" />
                            <h3 className="font-serif text-xl text-navy-900 mb-2">Technology-Driven</h3>
                            <p className="text-navy-600 text-sm">
                                Advanced technology stack enabling efficient, secure, and scalable operations.
                            </p>
                        </motion.div>
                    </div>

                    <OperationalCharts />
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <SectionHeading
                                title="Security Standards"
                                subtitle="We maintain the highest security protocols to protect your assets and information."
                            />
                            <div className="grid grid-cols-1 gap-3">
                                {standards.map((standard, index) => (
                                    <motion.div
                                        key={standard}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="h-5 w-5 text-gold-600 flex-shrink-0" />
                                        <span className="text-navy-700">{standard}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-navy-900 rounded-xl p-8 text-white"
                        >
                            <Shield className="h-12 w-12 text-gold-500 mb-6" />
                            <h3 className="font-serif text-2xl mb-4">FDIC-Level Protection</h3>
                            <p className="text-navy-200 leading-relaxed">
                                Our operating accounts and financial infrastructure meet FDIC-level
                                security standards, providing our clients with the same level of
                                protection expected by major financial institutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <PerformanceCharts />

            <CTASection />
        </>
    )
}
