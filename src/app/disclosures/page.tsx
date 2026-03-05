'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'

export default function DisclosuresPage() {
    return (
        <>
            <PageHero
                title="Disclosures"
                subtitle="Important information about our services and regulatory compliance."
                breadcrumb={[{ label: 'Disclosures', href: '/disclosures' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <p className="text-navy-500 text-sm">Last updated: January 2026</p>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Important Information</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    The information provided on this website is for general informational
                                    purposes only and should not be construed as professional financial,
                                    legal, or investment advice.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">No Guarantee of Results</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    Past performance is not indicative of future results. Any references
                                    to performance, returns, or outcomes are provided for illustrative
                                    purposes only and do not guarantee similar results.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Professional Advice</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    Before making any financial decisions, we recommend consulting with
                                    qualified professionals who can provide advice tailored to your
                                    specific circumstances.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Confidentiality</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    Devasini Family Office maintains strict confidentiality standards.
                                    All client information is handled with the utmost discretion and
                                    in accordance with applicable privacy laws and regulations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
