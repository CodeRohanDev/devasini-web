import Link from 'next/link'
import Image from 'next/image'
import { Shield, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Events', href: '/events' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Family Office Services', href: '/services#family-office' },
        { name: 'Cybersecurity', href: '/services#cybersecurity' },
        { name: 'Athletes Program', href: '/athletes' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Disclosures', href: '/disclosures' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logonobg.png"
                                alt="Devasini Family Office"
                                width={48}
                                height={48}
                                className="h-12 w-12 object-contain"
                                priority
                            />
                            <div>
                                <span className="font-serif text-xl block leading-tight">Devasini</span>
                                <span className="text-xs text-gold-500 tracking-wider uppercase">Family Office</span>
                            </div>
                        </Link>
                        <p className="text-navy-300 text-sm leading-relaxed mb-6">
                            Your Partner in Wealth through CyberDefense. Institutional-grade solutions for elite families and individuals.
                        </p>
                        <div className="space-y-3 text-sm text-navy-300">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-gold-500" />
                                <span>New York, NY</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-gold-500" />
                                <span>contact@devasinifamilyoffice.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-navy-300 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-navy-400 text-sm">
                            © {new Date().getFullYear()} Devasini Family Office. All rights reserved.
                        </p>
                        <p className="text-navy-500 text-xs">
                            Confidential & Proprietary
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
