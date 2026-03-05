'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Globe, Lock } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const values = [
    {
        icon: Shield,
        title: 'Institutional Security',
        description: 'FDIC-level operating accounts and enterprise-grade security protocols protect your assets and information.',
        number: '01',
    },
    {
        icon: Users,
        title: 'Dedicated Expertise',
        description: 'A team of seasoned professionals with decades of experience in wealth management and cybersecurity.',
        number: '02',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Serving ultra high net worth individuals and family offices across multiple jurisdictions worldwide.',
        number: '03',
    },
    {
        icon: Lock,
        title: 'Complete Discretion',
        description: 'Your privacy is paramount. We operate with the highest standards of confidentiality and discretion.',
        number: '04',
    },
]

export default function ValueProposition() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <SectionHeading
                    title="Why Devasini Family Office"
                    subtitle="We operate at the intersection of wealth management, advanced technology, and cybersecurity."
                    centered
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white border border-navy-100 rounded-2xl p-8 hover:border-gold-400 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Number badge */}
                            <span className="absolute top-6 right-6 text-5xl font-serif text-navy-100 group-hover:text-gold-200 transition-colors">
                                {value.number}
                            </span>

                            {/* Icon */}
                            <div className="relative w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-600 transition-colors">
                                <value.icon className="h-7 w-7 text-gold-500 group-hover:text-white transition-colors" />
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-xl text-navy-900 mb-3 relative">{value.title}</h3>
                            <p className="text-navy-600 text-sm leading-relaxed relative">{value.description}</p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-transparent group-hover:bg-gold-500 rounded-full transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
