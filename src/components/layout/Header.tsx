'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Athletes', href: '/athletes' },
    // { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="fixed top-4 left-4 right-4 z-50">
            <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm border border-navy-100 rounded-2xl shadow-lg px-6">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logonobg.png"
                            alt="Devasini Family Office"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                            priority
                        />
                        <div>
                            <span className="font-serif text-xl text-navy-900 block leading-tight">Devasini</span>
                            <span className="text-xs text-gold-600 tracking-wider uppercase">Family Office</span>
                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center gap-1 relative">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-navy-900 rounded-lg"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${isActive ? 'text-white' : 'text-navy-600 hover:text-navy-900'}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        })}
                        <Link href="/contact" className="btn-primary text-sm ml-4">
                            Request Consultation
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-navy-900" />
                        ) : (
                            <Menu className="h-6 w-6 text-navy-900" />
                        )}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border border-navy-100 rounded-xl mt-2 shadow-lg"
                    >
                        <div className="container-custom py-4 space-y-1">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block py-3 px-4 rounded-lg font-medium transition-colors ${isActive
                                            ? 'bg-navy-900 text-white'
                                            : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contact"
                                className="btn-primary w-full text-center mt-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
