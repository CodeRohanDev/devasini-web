'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { advisoryBoard, LeaderProfile } from '@/lib/leadership-data'
import PageHero from '@/components/ui/PageHero'

export default function AdvisoryLeaderClient({ leader }: { leader: LeaderProfile }) {
    return (
        <>
            <PageHero
                title={leader.name}
                subtitle={leader.title}
                breadcrumb={[
                    { label: 'Leadership', href: '/leadership' },
                    { label: leader.name, href: `/leadership/advisory/${leader.slug}` },
                ]}
            />

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-1"
                        >
                            <div className="aspect-[3/4] bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl overflow-hidden relative mb-6">
                                {leader.image ? (
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-navy-300 rounded-full" />
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 btn-secondary text-sm">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Contact
                                </button>
                                {leader.linkedin && (
                                    <a href={leader.linkedin} className="btn-secondary text-sm px-4">
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <span className="text-gold-600 text-sm font-medium uppercase tracking-wider">
                                Advisory Board
                            </span>
                            <h2 className="heading-2 mt-2 mb-6">About {leader.name.split(' ')[0]}</h2>

                            <div className="space-y-4 mb-8">
                                {leader.fullBio.map((paragraph, index) => (
                                    <p key={index} className="text-navy-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="bg-navy-50 rounded-xl p-6">
                                <h3 className="font-serif text-lg text-navy-900 mb-4">Areas of Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {leader.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-white text-navy-700 text-sm rounded-full border border-navy-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <h2 className="heading-3 mb-8">Other Advisors</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {advisoryBoard
                            .filter((l) => l.slug !== leader.slug)
                            .map((member) => (
                                <Link
                                    key={member.slug}
                                    href={`/leadership/advisory/${member.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-navy-100 to-navy-200 rounded-lg mb-4 overflow-hidden relative">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-navy-300 rounded-full" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors" />
                                    </div>
                                    <h3 className="font-serif text-base text-navy-900 group-hover:text-gold-600 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-navy-500">{member.expertise[0]}</p>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}
