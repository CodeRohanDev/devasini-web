'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const aumData = [
    { year: '2020', value: 1 },
    { year: '2021', value: 2.5 },
    { year: '2022', value: 4 },
    { year: '2023', value: 6.5 },
    { year: '2024', value: 9 },
    { year: '2025', value: 11 },
]

const clientSegments = [
    { name: 'Athletes', value: 45, color: '#4a6fa5' },
    { name: 'Executives', value: 10, color: '#9b8b6f' },
    { name: 'Family Offices', value: 15, color: '#2c4a6b' },
    { name: 'UHNW Individuals', value: 30, color: '#c9a227' },
]

export default function GrowthCharts() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                        Growth & Diversification
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Steady growth in assets under management with a diversified client portfolio.
                    </p>
                    <div className="w-16 h-1 bg-[#c9a227] mx-auto mt-6"></div>
                </div>

                {/* Charts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Assets Under Management Chart */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                            Assets Under Management
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            AUM growth over the past 5 years (in billions)
                        </p>
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={aumData}>
                                <defs>
                                    <linearGradient id="colorAum" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#c9a227" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#c9a227" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis
                                    dataKey="year"
                                    stroke="#666"
                                    tick={{ fill: '#1e3a5f', fontSize: 12 }}
                                />
                                <YAxis
                                    stroke="#666"
                                    tick={{ fill: '#64748b', fontSize: 12 }}
                                    tickFormatter={(value) => `$${value}B`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                    }}
                                    formatter={(value: number) => [`$${value}B`, 'AUM']}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#c9a227"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorAum)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Client Segments Chart */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-xl font-semibold text-[#4a6fa5] mb-2">
                            Client Segments
                        </h3>
                        <p className="text-sm text-[#8b9bb3] mb-6">
                            Distribution across client categories
                        </p>
                        <div className="flex flex-col items-center">
                            <ResponsiveContainer width="100%" height={280}>
                                <PieChart>
                                    <Pie
                                        data={clientSegments}
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
                                        {clientSegments.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
                                {clientSegments.map((segment, index) => (
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
                    </div>
                </div>
            </div>
        </section>
    )
}
