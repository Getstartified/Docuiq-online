import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="section-padding bg-navy-900 text-white">
            <div className="container-custom text-center">
                {/* Main Headline */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Ready to accelerate your
                    <br />
                    <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400">
                        regulatory submissions?
                    </span>
                </h2>

                {/* Supporting Text */}
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    See how Docuiq can help your team draft CSRs, automate CTD submissions,
                    and access-with complete traceability.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#demo"
                        className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Book a Demo
                    </a>
                    <a
                        href="#search"
                        className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center gap-2 group"
                    >
                        Try Regulatory Search
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
