'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Users, Shield, Building, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'

const pillars = [
    {
        icon: TrendingUp,
        title: 'Athletes as Investors',
        description: 'Transform athletic success into lasting financial prosperity through strategic investment education and opportunities.',
    },
    {
        icon: Shield,
        title: 'Wealth Preservation',
        description: 'Protect and grow your earnings with institutional-grade security and risk management strategies.',
    },
    {
        icon: Users,
        title: 'Family Office Setup',
        description: 'Establish a professional family office structure to manage wealth across generations.',
    },
    {
        icon: Building,
        title: 'Ownership & Legacy',
        description: 'Build ownership stakes and create lasting legacies beyond your athletic career.',
    },
]

const benefits = [
    'Personalized wealth management strategy',
    'Access to institutional investment opportunities',
    'Comprehensive cybersecurity protection',
    'Family governance and succession planning',
    'Tax optimization and estate planning',
    'Vendor and advisor vetting services',
]

export default function AthletesPage() {
    return (
        <>
            <PageHero
                title="Athletes & Legacy Initiatives"
                subtitle="Empowering professional athletes to build generational wealth and lasting legacies through institutional-grade family office services."
                breadcrumb={[{ label: 'Athletes', href: '/athletes' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 rounded-full mb-6">
                                <Trophy className="h-4 w-4 text-gold-600" />
                                <span className="text-sm font-medium text-gold-700">Partnership with 73 Holdings</span>
                            </div>
                            <h2 className="heading-2 mb-6">Building Generational Wealth</h2>
                            <p className="text-navy-600 mb-6">
                                Our strategic partnership with 73 Holdings brings together expertise
                                in athlete representation and institutional wealth management to
                                deliver comprehensive solutions for professional athletes.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-navy-900 rounded-2xl p-8 text-white"
                        >
                            <Trophy className="h-12 w-12 text-gold-500 mb-6" />
                            <h3 className="font-serif text-2xl mb-4">Why Athletes Choose Us</h3>
                            <p className="text-navy-200 leading-relaxed">
                                Professional athletes face unique financial challenges. Short career windows,
                                high earnings, and public visibility require specialized wealth management
                                approaches that we are uniquely positioned to provide.
                            </p>
                        </motion.div>
                    </div>

                    <SectionHeading
                        title="Four Pillars of Athlete Wealth"
                        subtitle="A comprehensive approach to building and protecting generational wealth."
                        centered
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <pillar.icon className="h-7 w-7 text-gold-500" />
                                </div>
                                <h3 className="font-serif text-lg text-navy-900 mb-3">{pillar.title}</h3>
                                <p className="text-navy-600 text-sm">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <SectionHeading
                                title="The Wealth Preservation Mindset"
                                subtitle="Professional athletes face unique financial challenges. Short career windows, high earnings, and public visibility require specialized wealth management approaches."
                                light
                            />
                            <p className="text-navy-200 mb-6">
                                Our athletes program is designed to address these specific challenges,
                                providing the same level of institutional support that major corporations
                                and established family offices receive.
                            </p>
                            <p className="text-navy-200">
                                From the moment you sign your first contract to long after retirement,
                                we help you build, protect, and grow your wealth for generations to come.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-navy-800 rounded-xl p-8 border border-navy-700">
                                <h3 className="font-serif text-xl text-white mb-6">Program Benefits</h3>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.li
                                            key={benefit}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                            <span className="text-navy-100">{benefit}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Briefcase className="h-12 w-12 text-gold-600 mx-auto mb-6" />
                        <h2 className="heading-2 mb-6">Ready to Build Your Legacy?</h2>
                        <p className="text-body mb-8">
                            Schedule a confidential consultation to discuss how Devasini Family Office
                            can help you transition from athlete to investor and build generational wealth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Request Consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
