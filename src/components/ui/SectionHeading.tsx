interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
    light?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className={`heading-2 ${light ? 'text-white' : 'text-navy-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-lg ${light ? 'text-navy-200' : 'text-navy-600'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
            <div className={`mt-6 h-1 w-16 bg-gold-600 ${centered ? 'mx-auto' : ''}`} />
        </div>
    )
}
