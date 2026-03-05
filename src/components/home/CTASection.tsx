'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="heading-2 mb-6">
                        Ready to Elevate Your{' '}
                        <span className="text-gold-600">Family Office</span> Experience?
                    </h2>
                    <p className="text-body mb-8">
                        Schedule a confidential consultation to discuss how Devasini Family Office
                        can provide institutional-grade solutions tailored to your unique needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Request Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link href="/about" className="btn-secondary">
                            Learn More About Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
