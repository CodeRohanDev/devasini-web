'use client'

import { motion } from 'framer-motion'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'

const capabilityData = [
    { subject: 'Security', value: 98 },
    { subject: 'Technology', value: 95 },
    { subject: 'Compliance', value: 97 },
    { subject: 'Operations', value: 94 },
    { subject: 'Privacy', value: 96 },
    { subject: 'Response', value: 93 },
]

const complianceData = [
    { name: 'SOC 2 Type II', score: 98, color: '#c9a227' },
    { name: 'ISO 27001', score: 96, color: '#1e3a5f' },
    { name: 'GDPR Compliance', score: 99, color: '#c9a227' },
    { name: 'PCI DSS', score: 97, color: '#1e3a5f' },
    { name: 'NIST Framework', score: 95, color: '#c9a227' },
]

export default function OperationalCharts() {
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Capability Assessment Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm"
            >
                <h3 className="font-serif text-lg text-navy-900 mb-2">Capability Assessment</h3>
                <p className="text-navy-600 text-sm mb-4">Our performance across key operational areas</p>
                <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={capabilityData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: '#1e3a5f', fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                            angle={60}
                            domain={[0, 100]}
                            tick={{ fill: '#64748b', fontSize: 10 }}
                        />
                        <Radar
                            name="Capabilities"
                            dataKey="value"
                            stroke="#c9a227"
                            fill="#c9a227"
                            fillOpacity={0.4}
                            strokeWidth={2}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </motion.div>

            {/* Compliance & Audit Scores Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
            >
                <h3 className="font-serif text-lg text-navy-900 mb-2">Compliance &amp; Audit Scores</h3>
                <p className="text-navy-600 text-sm mb-4">Third-party certification results</p>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={complianceData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, 100]}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                        />
                        <YAxis
                            type="category"
                            dataKey="name"
                            width={75}
                            tick={{ fill: '#1e3a5f', fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                            }}
                            formatter={(value: number) => [`${value}`, 'Score']}
                        />
                        <Bar
                            dataKey="score"
                            radius={[0, 4, 4, 0]}
                        >
                            {complianceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
    )
}
