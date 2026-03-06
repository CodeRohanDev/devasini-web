export interface LeaderProfile {
    slug: string
    name: string
    title: string
    category: 'core' | 'advisory'
    bio: string
    fullBio: string[]
    expertise: string[]
    education?: string[]
    linkedin?: string
    image?: string
}

export const coreLeadership: LeaderProfile[] = [
    {
        slug: 'giancarlo-devasini',
        name: 'Giancarlo Devasini',
        title: 'Chief Executive Officer',
        category: 'core',
        bio: 'Visionary leader with extensive experience in wealth management and strategic advisory.',
        fullBio: [
            'Giancarlo Devasini is the founder and Chief Executive Officer of Devasini Family Office, bringing decades of experience in wealth management, strategic advisory, and institutional finance.',
            'His vision drives the firm\'s commitment to integrating cutting-edge technology with traditional family office services, creating a new paradigm in wealth protection and growth.',
            'Under his leadership, Devasini Family Office has become a trusted partner for ultra high net worth individuals and families seeking institutional-grade solutions.',
        ],
        expertise: ['Strategic Leadership', 'Wealth Management', 'Institutional Finance', 'Family Governance'],
        image: '/giancarlodevasini.webp',
    },
    {
        slug: 'julia-valentine',
        name: 'Julia Valentine',
        title: 'Co-Founder',
        category: 'core',
        bio: 'Expert in family office operations and institutional client relationships.',
        fullBio: [
            'Julia Valentine is the Co-Founder of Devasini Family Office, bringing deep expertise in family office operations and institutional client relationships.',
            'Her understanding of client needs shapes the firm\'s service delivery approach, ensuring that every engagement is tailored to the unique requirements of each family.',
            'Julia has been instrumental in building the firm\'s reputation for discretion, excellence and personalized service.',
        ],
        expertise: ['Family Office Operations', 'Client Relations', 'Service Excellence', 'Strategic Planning'],
        image: '/juliavalentine.webp',
    },
    {
        slug: 'riley-devasini',
        name: 'Riley Devasini',
        title: 'Vice President',
        category: 'core',
        bio: 'Leads strategic initiatives and business development.',
        fullBio: [
            'Riley Devasini serves as Vice President, leading strategic initiatives and business development efforts.',
            'She focuses on expanding the firm\'s capabilities and client base while maintaining the high standards that define Devasini Family Office.',
            'Riley brings fresh perspectives and innovative approaches to the firm\'s growth strategy.',
        ],
        expertise: ['Business Development', 'Strategic Initiatives', 'Client Acquisition', 'Innovation'],
        image: '/abenadevasini.webp',
    },
    {
        slug: 'michael-laido',
        name: 'Michael Laido',
        title: 'Chief Financial Officer',
        category: 'core',
        bio: 'Seasoned financial executive with deep expertise in complex wealth structures.',
        fullBio: [
            'Michael Laido serves as Chief Financial Officer, bringing extensive experience in complex wealth structures, tax optimization, and institutional financial management.',
            'His expertise ensures that clients receive sophisticated financial strategies that protect and grow their wealth across generations.',
            'Michael oversees all financial operations and works closely with clients on comprehensive wealth planning.',
        ],
        expertise: ['Financial Management', 'Tax Optimization', 'Wealth Structures', 'Estate Planning'],
        image: '/michaellaido.webp',
    },
    {
        slug: 'phoebe-van-tran',
        name: 'Phoebe Van Tran',
        title: 'Managing Partner',
        category: 'core',
        bio: 'Oversees client relationships and operational excellence.',
        fullBio: [
            'Phoebe Van Tran is a Managing Partner at Devasini Family Office, overseeing client relationships and operational excellence.',
            'She ensures seamless service delivery across all family office functions, maintaining the highest standards of quality and discretion.',
            'Phoebe\'s dedication to client success has been central to the firm\'s growth and reputation.',
        ],
        expertise: ['Client Management', 'Operations', 'Service Delivery', 'Quality Assurance'],
        image: '/phoebevantran.webp',
    },
]

export const advisoryBoard: LeaderProfile[] = [
    {
        slug: 'grace-cassab',
        name: 'Grace Cassab',
        title: 'Advisor - Wealth Strategy',
        category: 'advisory',
        bio: 'Expert advisor in comprehensive wealth strategy and planning.',
        fullBio: [
            'Grace Cassab serves on the Advisory Board, providing expert guidance on comprehensive wealth strategy and planning.',
            'Her extensive experience in wealth management helps shape the firm\'s approach to long-term wealth preservation and growth.',
        ],
        expertise: ['Wealth Strategy', 'Financial Planning', 'Asset Allocation'],
        image: '/gracecassab.webp',
    },
    {
        slug: 'mike-blogna',
        name: 'Mike Blogna',
        title: 'Advisor - Technology',
        category: 'advisory',
        bio: 'Technology advisory expert guiding digital transformation.',
        fullBio: [
            'Mike Blogna advises on technology strategy and digital transformation initiatives.',
            'His expertise ensures that Devasini Family Office remains at the forefront of technological innovation in wealth management.',
        ],
        expertise: ['Technology Strategy', 'Digital Transformation', 'Cybersecurity'],
        image: '/mikeblogna.webp',
    },
    {
        slug: 'caitlin-panasci',
        name: 'Caitlin Panasci',
        title: 'Advisor - Legal & Compliance',
        category: 'advisory',
        bio: 'Legal and compliance expert ensuring regulatory excellence.',
        fullBio: [
            'Caitlin Panasci provides advisory services in legal and compliance matters.',
            'Her guidance ensures that the firm maintains the highest standards of regulatory compliance and legal excellence.',
        ],
        expertise: ['Legal Advisory', 'Regulatory Compliance', 'Risk Management'],
        image: '/caitlinpanasci.webp',
    },
    {
        slug: 'jenny-trang-nguyen',
        name: 'Jenny Trang Nguyen',
        title: 'Advisor - Investment Management',
        category: 'advisory',
        bio: 'Investment management specialist with institutional expertise.',
        fullBio: [
            'Jenny Trang Nguyen advises on investment management strategies and portfolio optimization.',
            'Her institutional investment background brings sophisticated perspectives to client portfolios.',
        ],
        expertise: ['Investment Management', 'Portfolio Strategy', 'Alternative Investments'],
        image: '/jennytrangnguyen.webp',
    },
    {
        slug: 'lauren-kolodny',
        name: 'Lauren Kolodny',
        title: 'Advisor - Venture Capital',
        category: 'advisory',
        bio: 'Venture capital expert connecting families with innovation.',
        fullBio: [
            'Lauren Kolodny provides advisory services in venture capital and emerging investment opportunities.',
            'Her expertise helps clients access innovative investment opportunities in the venture ecosystem.',
        ],
        expertise: ['Venture Capital', 'Startup Investing', 'Innovation'],
        image: '/laurenkolodny.webp',
    },
    {
        slug: 'kyla-scanlon',
        name: 'Kyla Scanlon',
        title: 'Advisor - Financial Communications',
        category: 'advisory',
        bio: 'Expert in financial communications and market insights.',
        fullBio: [
            'Kyla Scanlon advises on financial communications and market analysis.',
            'Her unique perspective on financial markets and communication helps inform client strategies.',
        ],
        expertise: ['Financial Communications', 'Market Analysis', 'Content Strategy'],
        image: '/kylascanlon.webp',
    },
]

export const allLeaders = [...coreLeadership, ...advisoryBoard]

export function getLeaderBySlug(slug: string): LeaderProfile | undefined {
    return allLeaders.find(leader => leader.slug === slug)
}
