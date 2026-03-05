'use client'

import { motion } from 'framer-motion'

const trustedLogos = [
    { name: '73 Holdings', initials: '73' },
    { name: 'Regalis Family Office', initials: 'RFO' },
    { name: 'Goldman Sachs', initials: 'GS' },
    { name: 'Morgan Stanley', initials: 'MS' },
    { name: 'JP Morgan', initials: 'JPM' },
    { name: 'BlackRock', initials: 'BR' },
]

export default function TrustedBy() {
    return (
        <section className="py-16 bg-navy-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-center text-sm text-navy-500 uppercase tracking-wider mb-10">
                        Trusted by Leading Institutions
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {trustedLogos.map((logo, index) => (
                            <motion.div
                                key={logo.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center justify-center"
                            >
                                <div className="bg-white rounded-xl px-6 py-5 w-full border border-navy-100 hover:border-gold-300 hover:shadow-md transition-all group">
                                    <div className="text-center">
                                        <span className="font-serif text-2xl text-navy-400 group-hover:text-navy-700 transition-colors block mb-1">
                                            {logo.initials}
                                        </span>
                                        <span className="text-xs text-navy-400 group-hover:text-navy-600 transition-colors">
                                            {logo.name}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
