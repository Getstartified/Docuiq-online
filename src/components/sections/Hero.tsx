import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen pt-16">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/Lab%20image.jpg"
                    alt="Laboratory Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-hero" />
            </div>

            <div className="relative container-custom section-padding flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
                    <span className="text-xs">🎉</span>
                    <span>Featured on Launch YC</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl animate-slide-up">
                    Draft most accurate
                    <br />
                    <span className="text-white">regulatory submissions</span>
                    <br />
                    in minutes, not weeks.
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="#demo" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                        Book a Demo
                    </a>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Ask any regulatory question..."
                            className="px-6 py-3 pr-24 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Built for logos */}
                <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                        {/* Y Combinator */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-gray-700 text-sm font-medium">Backed by</p>
                            <img
                                src="/imgi_1_yc-logo.svg"
                                alt="Y Combinator"
                                className="h-8 transition-transform hover:scale-110"
                            />
                        </div>

                        {/* Microsoft */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-gray-700 text-sm font-medium">Built by experts from</p>
                            <img
                                src="/imgi_2_microsoft-logo.svg"
                                alt="Microsoft"
                                className="h-8 transition-transform hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
