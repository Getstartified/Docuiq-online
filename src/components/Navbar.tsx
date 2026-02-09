import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const productsDropdown = [
        { name: 'Clinical Study Reports', href: '#' },
        { name: 'CTD Automation', href: '#' },
        { name: 'Regulatory Search', href: '#' },
    ];

    const companyDropdown = [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Security', href: '#' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <img
                                src="/imgi_14-logo.png"
                                alt="Docuiq"
                                className={`h-8 w-auto transition-all duration-300 ${isScrolled ? '' : ''
                                    }`}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('products')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-primary-600'
                                    : 'text-white hover:text-gray-200'
                                    }`}
                            >
                                <span>Products</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === 'products' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                                    {productsDropdown.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a
                            href="#security"
                            className={`font-medium transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-primary-600'
                                : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Security
                        </a>

                        <a
                            href="#blog"
                            className={`font-medium transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-primary-600'
                                : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Blog
                        </a>

                        {/* Company Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('company')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled
                                    ? 'text-gray-700 hover:text-primary-600'
                                    : 'text-white hover:text-gray-200'
                                    }`}
                            >
                                <span>Company</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === 'company' && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
                                    {companyDropdown.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#search"
                            className={`font-semibold transition-colors ${isScrolled
                                ? 'text-primary-600 hover:text-primary-700'
                                : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Try Search
                        </a>
                        <a
                            href="#demo"
                            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${isScrolled
                                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                                : 'bg-white hover:bg-gray-100 text-primary-600'
                                }`}
                        >
                            Book a Demo
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`focus:outline-none transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-primary-600'
                                : 'text-white hover:text-gray-200'
                                }`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={`md:hidden pb-4 animate-slide-up ${isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'}`}>
                        <div className="flex flex-col space-y-3">
                            <div>
                                <p className="font-semibold text-gray-900 px-2 py-2">Products</p>
                                {productsDropdown.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <a
                                href="#security"
                                className="px-2 py-2 text-gray-700 hover:text-primary-600 font-medium"
                            >
                                Security
                            </a>
                            <a
                                href="#blog"
                                className="px-2 py-2 text-gray-700 hover:text-primary-600 font-medium"
                            >
                                Blog
                            </a>
                            <div>
                                <p className="font-semibold text-gray-900 px-2 py-2">Company</p>
                                {companyDropdown.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="pt-4 space-y-2 px-2">
                                <a
                                    href="#search"
                                    className="block text-center text-primary-600 hover:text-primary-700 font-semibold py-2"
                                >
                                    Try Search
                                </a>
                                <a href="#demo" className="block btn-primary text-center">
                                    Book a Demo
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
