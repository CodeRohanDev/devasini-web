'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, TrendingUp, Building2, Briefcase } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(16, 42, 67, 0.95) 0%, rgba(16, 42, 67, 0.85) 50%, rgba(16, 42, 67, 0.7) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
                }}
            />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-12 bg-gold-500" />
                            <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">
                                Wealth Management & Cybersecurity
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
                            The Next Generation of{' '}
                            <span className="text-gold-500">Family Office</span>{' '}
                            Capabilities
                        </h1>

                        <p className="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                            Confidence through technology, security, and experience. Institutional-grade
                            solutions for ultra high net worth individuals and families who demand excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Link href="/contact" className="btn-gold text-base px-8 py-4">
                                Request Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                                Explore Services
                            </Link>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatItem value="$2B+" label="Assets Protected" />
                            <StatItem value="50+" label="Families Served" />
                            <StatItem value="100%" label="Client Retention" />
                            <StatItem value="25+" label="Years Experience" />
                        </div>
                    </motion.div>

                    {/* Right Side - Service Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="space-y-4">
                            <ServiceCard
                                icon={Shield}
                                title="Cybersecurity"
                                description="Enterprise-grade digital protection with 24/7 monitoring"
                                delay={0.4}
                            />
                            <ServiceCard
                                icon={Briefcase}
                                title="Family Office"
                                description="Comprehensive operational and financial management"
                                delay={0.5}
                            />
                            <ServiceCard
                                icon={TrendingUp}
                                title="Wealth Strategy"
                                description="Institutional investment and preservation strategies"
                                delay={0.6}
                            />
                            <ServiceCard
                                icon={Building2}
                                title="Legacy Planning"
                                description="Multi-generational wealth transfer and governance"
                                delay={0.7}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center md:text-left"
        >
            <div className="font-serif text-3xl md:text-4xl text-white mb-1">{value}</div>
            <div className="text-navy-300 text-sm">{label}</div>
        </motion.div>
    )
}

function ServiceCard({ icon: Icon, title, description, delay }: {
    icon: any;
    title: string;
    description: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all cursor-pointer"
        >
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <Icon className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                    <h3 className="text-white font-medium text-lg mb-1">{title}</h3>
                    <p className="text-navy-300 text-sm">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}
