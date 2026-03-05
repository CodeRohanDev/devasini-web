'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Shield, Lock, CheckCircle } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

const inquiryTypes = [
    'Family Office Services',
    'Cybersecurity Assessment',
    'Athletes Program',
    'General Inquiry',
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
        consent: false,
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Schedule a confidential consultation to discuss how we can serve your family office and wealth management needs."
                breadcrumb={[{ label: 'Contact', href: '/contact' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-navy-50 rounded-xl p-12 text-center"
                                >
                                    <CheckCircle className="h-16 w-16 text-gold-600 mx-auto mb-6" />
                                    <h2 className="font-serif text-2xl text-navy-900 mb-4">Thank You</h2>
                                    <p className="text-navy-600">
                                        Your inquiry has been received. A member of our team will contact
                                        you within 24-48 business hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-navy-700 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-navy-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-2">
                                                Company / Family Office
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="inquiryType" className="block text-sm font-medium text-navy-700 mb-2">
                                                Inquiry Type *
                                            </label>
                                            <select
                                                id="inquiryType"
                                                name="inquiryType"
                                                required
                                                value={formData.inquiryType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                                            >
                                                <option value="">Select an option</option>
                                                {inquiryTypes.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Please describe your needs and how we can assist you..."
                                            className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            name="consent"
                                            required
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            className="mt-1 h-4 w-4 text-gold-600 border-navy-300 rounded focus:ring-gold-500"
                                        />
                                        <label htmlFor="consent" className="text-sm text-navy-600">
                                            I consent to Devasini Family Office collecting and storing my information
                                            for the purpose of responding to my inquiry. I understand my information
                                            will be handled in accordance with the Privacy Policy. *
                                        </label>
                                    </div>

                                    <button type="submit" className="btn-primary w-full md:w-auto">
                                        Submit Inquiry
                                    </button>
                                </motion.form>
                            )}
                        </div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-navy-900 rounded-xl p-8 text-white"
                            >
                                <h3 className="font-serif text-xl mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-5 w-5 text-gold-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-navy-300">Email</p>
                                            <p>contact@devasinifamilyoffice.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-gold-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-navy-300">Office</p>
                                            <p>New York, NY</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-navy-50 rounded-xl p-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-6 w-6 text-gold-600" />
                                    <h3 className="font-serif text-lg text-navy-900">Privacy & Security</h3>
                                </div>
                                <p className="text-navy-600 text-sm mb-4">
                                    All communications are encrypted and handled with the highest
                                    standards of confidentiality.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-navy-500">
                                    <Lock className="h-4 w-4" />
                                    <span>256-bit SSL Encryption</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
