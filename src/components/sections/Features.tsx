import React from 'react';

const Features: React.FC = () => {


    const categories = ['Pharma', 'Biotech', 'CROs', 'CDMOs', 'Medical Devices'];

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'No surprises in reviews',
            description: 'Get regulatory-ready outputs instantly-no need to comb through everything line-by-line manually.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: 'Always know where every statement came from',
            description: 'Get precise, citation-level references for each and every sentence in our generated documents.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Fewer errors in high-stakes documents',
            description: 'Built for medical and regulatory documentation. Designed for compliance and FDA approvals.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Your data never leaves your control',
            description: 'Designed for compliance-first deployments. Your data stays yours.',
        },
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="container-custom">
                {/* Industry Points */}
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                        Built for regulatory teams at
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="bg-white text-gray-700 border border-gray-200 px-6 py-2 rounded-full font-medium shadow-sm select-none cursor-default"
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Achieving trust through better technology
                    </h2>
                    <p className="text-lg text-gray-600">
                        Faster Submissions. Fewer Edits. Greater Confidence in every filing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
