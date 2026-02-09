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
                    <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-gray-800 shadow-2xl">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                                Clinical Study Reports <span className="text-gray-500 font-normal">→</span>
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                                Protocol + SAP in, complete CSR out. Minutes, not weeks. Word-level traceability.
                            </p>

                            <div className="rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.25)] border border-gray-700 bg-gray-800 mb-12 relative group mx-auto max-w-3xl">
                                <video
                                    src="/Clinical Study Reports.mp4"
                                    className="w-full h-auto object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Non-zero drafting
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Auto TLF generation
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Data-centric sections
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    ICH E3 compliant
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTD Automation */}
                    <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-gray-800 shadow-2xl">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                                CTD Automation <span className="text-gray-500 font-normal">→</span>
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                                Automate CTD Module 2 & 5 compilation with intelligent document assembly
                            </p>

                            <div className="rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.25)] border border-gray-700 bg-gray-800 mb-12 relative group mx-auto max-w-3xl">
                                <video
                                    src="/CTD Automation.mp4"
                                    className="w-full h-auto object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Smart structure navigation
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Auto-populate docs
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Regional compliance
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    eCTD ready
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Regulatory Search */}
                    <div className="bg-[#0f172a] rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-gray-800 shadow-2xl">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                                Regulatory Search <span className="text-gray-500 font-normal">→</span>
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                                Ask questions, get instant answers from FDA guidance and your internal documents
                            </p>

                            <div className="rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,255,255,0.25)] border border-gray-700 bg-gray-800 mb-12 h-96 relative group mx-auto max-w-3xl">
                                <div className="bg-white/95 w-full h-full p-6 text-left">
                                    <div className="flex items-center space-x-2 mb-4 pb-4 border-b">
                                        <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm">FDA Search</button>
                                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">Enterprise</button>
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder="What are the requirements for..." className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm bg-gray-50" readOnly />
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            <div className="text-xs text-purple-700 bg-purple-100 px-3 py-2 rounded-md">"Phase 3 trial endpoints for oncology"</div>
                                            <div className="text-xs text-purple-700 bg-purple-100 px-3 py-2 rounded-md">"Pediatric study requirements"</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    FDA & EMA databases
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Custom uploads
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Exact citations
                                </span>
                                <span className="px-6 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-gray-200 text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Export to Word/PDF
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
