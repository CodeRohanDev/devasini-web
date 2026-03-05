'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { coreLeadership } from '@/lib/leadership-data'

export default function LeadershipHighlight() {
    // Get first 3 core leaders
    const leaders = coreLeadership.slice(0, 3)

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
                    <SectionHeading
                        title="Leadership Team"
                        subtitle="Guided by experienced professionals with institutional backgrounds."
                    />
                    <Link
                        href="/leadership"
                        className="inline-flex items-center text-navy-900 font-medium hover:text-gold-600 transition-colors mt-4 lg:mt-0"
                    >
                        View Full Team
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/leadership/core/${leader.slug}`} className="group block">
                                <div className="aspect-[3/4] bg-gradient-to-br from-navy-100 to-navy-200 rounded-lg mb-6 overflow-hidden relative">
                                    {leader.image ? (
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-24 h-24 bg-navy-300 rounded-full" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors" />
                                </div>
                                <h3 className="font-serif text-xl text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                                    {leader.name}
                                </h3>
                                <p className="text-gold-600 text-sm font-medium mb-3">{leader.title}</p>
                                <p className="text-navy-600 text-sm">{leader.bio}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
