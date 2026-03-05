export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'Devasini Family Office',
        description: 'Institutional-grade wealth management, cybersecurity, and technology advisory services for ultra high net worth individuals and family offices.',
        url: 'https://devasinifamilyoffice.com',
        logo: 'https://devasinifamilyoffice.com/logo.png',
        sameAs: [
            // Add your social media profiles here when available
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: 'https://devasinifamilyoffice.com/contact',
        },
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
        serviceType: [
            'Family Office Services',
            'Wealth Management',
            'Cybersecurity Services',
            'Technology Advisory',
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Devasini Family Office',
        url: 'https://devasinifamilyoffice.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://devasinifamilyoffice.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    )
}
