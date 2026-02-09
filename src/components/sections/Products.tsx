import React from 'react';

const Products: React.FC = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Focus on science-not paperwork
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        AI-powered solutions for every stage of your regulatory journey
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Clinical Study Reports */}
                    <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Clinical Study Reports
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Draft complete CSRs in minutes with AI that understands regulatory requirements
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Non-zero drafting from study data</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Auto TLF generation & referencing</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>Data-centric sections with full traceability</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                                        <span>ICH E3 compliant formatting</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 h-80 flex items-center justify-center">
                                <div className="text-center text-gray-400">
                                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="text-sm">CSR Editor Interface</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTD Automation */}
                    <div className="bg-gradient-teal rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    CTD Automation
                                </h3>
                                <p className="text-white/90 mb-6">
                                    Automate CTD Module 2 & 5 compilation with intelligent document assembly
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Smart CTD structure navigation</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Auto-populate from source documents</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Regional compliance checking</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>eCTD ready exports</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 h-80">
                                <div className="bg-white rounded-lg p-4 space-y-2 h-full overflow-hidden">
                                    <h4 className="font-semibold text-teal-900 mb-3">CTD Checklist</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded" checked readOnly />
                                            <span className="text-gray-700">Module 2.5 - Clinical Overview</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded" checked readOnly />
                                            <span className="text-gray-700">Module 2.7.1 - Summary of Biopharm</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded" readOnly />
                                            <span className="text-gray-700">Module 2.7.3 - Clinical Efficacy</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded" readOnly />
                                            <span className="text-gray-700">Module 2.7.4 - Clinical Safety</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Regulatory Search */}
                    <div className="bg-gradient-purple rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Regulatory Search
                                </h3>
                                <p className="text-white/90 mb-6">
                                    Ask questions, get instant answers from FDA guidance and your internal documents
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Search across FDA & EMA databases</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Upload your own regulatory docs</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Citation with exact page references</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-white">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Export answers to Word/PDF</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 h-80">
                                <div className="bg-white rounded-lg p-4 h-full flex flex-col">
                                    <div className="flex items-center space-x-2 mb-4 pb-4 border-b">
                                        <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm">
                                            FDA Search
                                        </button>
                                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
                                            Enterprise
                                        </button>
                                    </div>

                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            placeholder="What are the requirements for..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                                            readOnly
                                        />

                                        <div className="mt-4 space-y-2">
                                            <p className="text-xs text-gray-500">Example queries:</p>
                                            <div className="space-y-1">
                                                <div className="text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                                                    "Phase 3 trial endpoints for oncology"
                                                </div>
                                                <div className="text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                                                    "Pediatric study requirements"
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
