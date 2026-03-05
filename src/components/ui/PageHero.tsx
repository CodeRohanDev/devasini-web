'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
    title: string
    subtitle: string
    breadcrumb?: { label: string; href: string }[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(16, 42, 67, 0.97) 0%, rgba(16, 42, 67, 0.9) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')`,
                }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gold accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

            <div className="container-custom relative z-10">
                {/* Breadcrumb */}
                {breadcrumb && breadcrumb.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 text-sm mb-6"
                    >
                        <Link href="/" className="text-navy-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        {breadcrumb.map((item, index) => (
                            <span key={item.href} className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-navy-500" />
                                {index === breadcrumb.length - 1 ? (
                                    <span className="text-gold-500">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="text-navy-300 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gold-500" />
                        <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">
                            Devasini Family Office
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                        {title}
                    </h1>

                    <p className="text-navy-200 text-lg md:text-xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
