import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { playbookData } from '../data/playbookData';

export const PlaybookAccordion: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['why-board-statement-tracking-matters']));

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Complete Implementation Guide
          </h2>
          <p className="text-xl text-slate-300">
            Everything you need to know about the Public Statements Monitor and how it supports your accreditation readiness through comprehensive board member tracking.
          </p>
        </div>
        
        <div className="space-y-4">
          {playbookData.map((section, index) => (
            <div key={section.id} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-200"
              >
                <div className="flex items-center">
                  <span className="text-green-400 font-bold mr-3 sm:mr-4 text-base sm:text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
                </div>
                {openSections.has(section.id) ? (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                )}
              </button>
              
              {openSections.has(section.id) && (
                <div className="px-4 sm:px-6 pb-6">
                  <div className="border-l-2 border-green-400/30 pl-4 sm:pl-6 ml-4 sm:ml-8">
                    <div 
                      className="text-slate-300 prose prose-invert max-w-none text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};