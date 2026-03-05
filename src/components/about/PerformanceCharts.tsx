'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const performanceData = [
    { month: 'Jan', benchmark: 100, portfolio: 102 },
    { month: 'Feb', benchmark: 101, portfolio: 104 },
    { month: 'Mar', benchmark: 103, portfolio: 108 },
    { month: 'Apr', benchmark: 104, portfolio: 106 },
    { month: 'May', benchmark: 106, portfolio: 112 },
    { month: 'Jun', benchmark: 108, portfolio: 118 },
    { month: 'Jul', benchmark: 110, portfolio: 122 },
    { month: 'Aug', benchmark: 111, portfolio: 128 },
    { month: 'Sep', benchmark: 112, portfolio: 134 },
    { month: 'Oct', benchmark: 114, portfolio: 140 },
    { month: 'Nov', benchmark: 116, portfolio: 148 },
    { month: 'Dec', benchmark: 118, portfolio: 156 },
]

const clientDistribution = [
    { name: 'Athletes', value: 45, color: '#4a6fa5' },
    { name: 'Executives', value: 10, color: '#9b8b6f' },
    { name: 'Family Offices', value: 15, color: '#2c4a6b' },
    { name: 'UHNW Individuals', value: 30, color: '#c9a227' },
]

export default function PerformanceCharts() {
    return (
        <section className="section-padding bg-navy-50">
            <div className="container-custom">
                <div className="mb-12 text-center">
                    <h2 className="heading-2 text-navy-900">Performance &amp; Reach</h2>
                    <p className="mt-4 text-lg text-navy-600 max-w-3xl mx-auto">
                        Consistent growth and diversified client base across sectors.
                    </p>
                    <div className="mt-6 h-1 w-16 bg-gold-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Portfolio Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="font-serif text-lg text-navy-900 mb-2">Portfolio Performance</h3>
                        <p className="text-navy-600 text-sm mb-4">YTD performance vs. benchmark (indexed to 100)</p>
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#666"
                                    tick={{ fill: '#1e3a5f', fontSize: 12 }}
                                />
                                <YAxis
                                    stroke="#666"
                                    domain={[95, 160]}
                                    tick={{ fill: '#64748b', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                    }}
                                />
                                <Legend
                                    wrapperStyle={{ fontSize: '12px', color: '#1e3a5f' }}
                                    iconType="line"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="benchmark"
                                    name="Benchmark"
                                    stroke="#1e3a5f"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="portfolio"
                                    name="Portfolio"
                                    stroke="#c9a227"
                                    strokeWidth={2}
                                    dot={{ fill: '#c9a227', r: 3 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Client Distribution Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-sm"
                    >
                        <h3 className="font-serif text-lg text-navy-900 mb-2">Client Distribution</h3>
                        <p className="text-navy-600 text-sm mb-4">Breakdown by client segment</p>
                        <div className="flex flex-col items-center">
                            <ResponsiveContainer width="100%" height={280}>
                                <PieChart>
                                    <Pie
                                        data={clientDistribution}
                                        cx="50%"
                                        cy="45%"
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={0}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                        label={({ value, cx, cy, midAngle, innerRadius, outerRadius }) => {
                                            const RADIAN = Math.PI / 180
                                            const radius = outerRadius + 25
                                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                            const y = cy + radius * Math.sin(-midAngle * RADIAN)
                                            return (
                                                <text
                                                    x={x}
                                                    y={y}
                                                    fill="#8b9bb3"
                                                    textAnchor={x > cx ? 'start' : 'end'}
                                                    dominantBaseline="central"
                                                    fontSize="16"
                                                    fontWeight="500"
                                                >
                                                    {value}%
                                                </text>
                                            )
                                        }}
                                    >
                                        {clientDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
                                {clientDistribution.map((segment, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div
                                            className="w-4 h-4 rounded-sm"
                                            style={{ backgroundColor: segment.color }}
                                        />
                                        <span className="text-sm text-[#4a6fa5]">{segment.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
