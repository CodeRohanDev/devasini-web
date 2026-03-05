'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'

export default function TermsPage() {
    return (
        <>
            <PageHero
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our website."
                breadcrumb={[{ label: 'Terms of Service', href: '/terms' }]}
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
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Acceptance of Terms</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    By accessing and using this website, you accept and agree to be bound
                                    by the terms and provisions of this agreement. If you do not agree to
                                    these terms, please do not use this website.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Use of Website</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    This website is provided for informational purposes only. The content
                                    on this website does not constitute financial, legal, or investment advice.
                                    You should consult with appropriate professionals before making any
                                    financial decisions.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Intellectual Property</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    All content on this website, including text, graphics, logos, and images,
                                    is the property of Devasini Family Office and is protected by applicable
                                    intellectual property laws.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Limitation of Liability</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    Devasini Family Office shall not be liable for any damages arising from
                                    the use or inability to use this website or any content contained herein.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Contact</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    For questions regarding these Terms of Service, please contact us at
                                    contact@devasinifamilyoffice.com.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
