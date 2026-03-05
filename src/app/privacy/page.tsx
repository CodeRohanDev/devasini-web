'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/ui/PageHero'

export default function PrivacyPage() {
    return (
        <>
            <PageHero
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal information."
                breadcrumb={[{ label: 'Privacy Policy', href: '/privacy' }]}
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
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Introduction</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    Devasini Family Office ("we," "our," or "us") is committed to protecting
                                    your privacy. This Privacy Policy explains how we collect, use, disclose,
                                    and safeguard your information when you visit our website or engage our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Information We Collect</h2>
                                <p className="text-navy-600 leading-relaxed mb-4">
                                    We may collect information about you in various ways, including:
                                </p>
                                <ul className="list-disc pl-6 text-navy-600 space-y-2">
                                    <li>Personal information you provide directly (name, email, phone number)</li>
                                    <li>Information about your company or family office</li>
                                    <li>Communications and correspondence with us</li>
                                    <li>Technical data about your device and browsing activity</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">How We Use Your Information</h2>
                                <p className="text-navy-600 leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc pl-6 text-navy-600 space-y-2">
                                    <li>Respond to your inquiries and provide requested services</li>
                                    <li>Communicate with you about our services</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Data Security</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    We implement appropriate technical and organizational security measures
                                    to protect your personal information against unauthorized access,
                                    alteration, disclosure, or destruction. All data transmissions are
                                    encrypted using industry-standard SSL technology.
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl text-navy-900 mb-4">Contact Us</h2>
                                <p className="text-navy-600 leading-relaxed">
                                    If you have questions about this Privacy Policy, please contact us at
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
