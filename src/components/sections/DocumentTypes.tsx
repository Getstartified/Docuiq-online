import React from 'react';

const DocumentTypes: React.FC = () => {
    const documentTypes = [
        'Clinical Study Reports (CSRs)',
        'ADaM, SDTM, & Metadata',
        'CTD Module 5 Summaries',
        'CTD Module 1-3 Literature',
        'Nonclinical Study Reports',
        'Investigator Brochures (IBs)',
        'Statistical Analysis Plans',
        'Tables, Listings, Figures (TLFs)',
        'Protocols & SOPs',
        'Briefing Documents',
        'Safety Documentation',
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Every document, for every stage of development
                    </h2>
                    <p className="text-lg text-gray-600">
                        Extend automation across your entire regulatory workflow.
                    </p>
                </div>

                {/* Document Type Pills Grid */}
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {documentTypes.map((docType, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            {docType}
                        </div>
                    ))}

                    {/* And more button */}
                    <button className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all duration-300">
                        And more...
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DocumentTypes;
