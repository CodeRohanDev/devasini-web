'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/home/CTASection'
import { coreLeadership, advisoryBoard } from '@/lib/leadership-data'

export default function LeadershipPage() {
    return (
        <>
            <PageHero
                title="Leadership Team"
                subtitle="Guided by experienced professionals with institutional backgrounds and a shared commitment to excellence."
                breadcrumb={[{ label: 'Leadership', href: '/leadership' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        title="Core Leadership"
                        subtitle="The executive team driving our vision and operations."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreLeadership.map((leader, index) => (
                            <motion.div
                                key={leader.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/leadership/core/${leader.slug}`} className="group block">
                                    <div className="aspect-[4/5] bg-gradient-to-br from-navy-100 to-navy-200 rounded-lg mb-6 overflow-hidden relative">
                                        {leader.image ? (
                                            <img 
                                                src={leader.image} 
                                                alt={leader.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-28 h-28 bg-navy-300 rounded-full" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-900/50 to-transparent" />
                                        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors" />
                                    </div>
                                    <h3 className="font-serif text-xl text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                                        {leader.name}
                                    </h3>
                                    <p className="text-gold-600 text-sm font-medium mb-3">{leader.title}</p>
                                    <p className="text-navy-600 text-sm leading-relaxed">{leader.bio}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <SectionHeading
                        title="Advisory Board"
                        subtitle="Distinguished advisors providing strategic guidance across key domains."
                        centered
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advisoryBoard.map((advisor, index) => (
                            <motion.div
                                key={advisor.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/leadership/advisory/${advisor.slug}`}
                                    className="bg-white rounded-lg p-6 border border-navy-100 flex items-center gap-4 hover:shadow-md transition-shadow block"
                                >
                                    <div className="w-16 h-16 bg-navy-100 rounded-full flex-shrink-0 overflow-hidden">
                                        {advisor.image ? (
                                            <img 
                                                src={advisor.image} 
                                                alt={advisor.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <div className="w-10 h-10 bg-navy-200 rounded-full" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-navy-900">{advisor.name}</h3>
                                        <p className="text-gold-600 text-sm">{advisor.expertise[0]}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    )
}
