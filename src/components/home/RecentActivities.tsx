'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const activities = [
    {
        title: 'Cybersecurity Masterclass for Family Offices',
        date: 'January 2026',
        description: 'An exclusive session on protecting digital assets and implementing enterprise-grade security protocols.',
        category: 'Masterclass',
    },
    {
        title: 'Athletes & Wealth: Building Generational Legacy',
        date: 'December 2025',
        description: 'Partnership event with 73 Holdings focusing on wealth preservation strategies for professional athletes.',
        category: 'Partnership',
    },
    {
        title: 'Governance & Communication Series',
        date: 'November 2025',
        description: 'Multi-part series on family governance structures and effective communication frameworks.',
        category: 'Webinar',
    },
]

export default function RecentActivities() {
    return (
        <section className="section-padding bg-navy-900">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
                    <SectionHeading
                        title="Recent Activities"
                        subtitle="Stay informed about our latest events, partnerships, and educational initiatives."
                        light
                    />
                    <Link
                        href="/events"
                        className="inline-flex items-center text-white font-medium hover:text-gold-500 transition-colors mt-4 lg:mt-0"
                    >
                        View All Events
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-navy-800 rounded-lg p-6 border border-navy-700"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-gold-600/20 text-gold-500 text-xs font-medium rounded-full">
                                    {activity.category}
                                </span>
                            </div>
                            <h3 className="font-serif text-lg text-white mb-3">{activity.title}</h3>
                            <p className="text-navy-300 text-sm mb-4">{activity.description}</p>
                            <div className="flex items-center gap-2 text-navy-400 text-sm">
                                <Calendar className="h-4 w-4" />
                                {activity.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
