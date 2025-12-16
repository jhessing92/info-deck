import React from 'react';
import { AlertCircle, Clock, Eye, FileX } from 'lucide-react';

const painPoints = [
  {
    icon: FileX,
    title: "No Centralized Documentation",
    description: "Board member statements are scattered across multiple platforms with no systematic way to track them for accreditation compliance.",
    color: "text-red-400"
  },
  {
    icon: Eye,
    title: "Manual Monitoring Gaps",
    description: "Staff can't manually monitor all news sources, social media, and public forums where board members make statements, creating compliance blind spots.",
    color: "text-orange-400"
  },
  {
    icon: Clock,
    title: "Late Policy Violation Discovery",
    description: "Without real-time (hourly) monitoring, policy violations are often discovered too late to address proactively before accreditation reviews.",
    color: "text-yellow-400"
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4 mr-2" />
            Accreditation Challenges
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            The Challenge We Face
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            In preparation for accreditation, we must provide documentation of all public statements made by board members to ensure alignment with board policy. Until now, this has required hours of manual review across scattered media platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-3 bg-slate-800 rounded-lg mr-3 sm:mr-4`}>
                  <point.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${point.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{point.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why It Matters</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Accreditation reviewers expect thorough documentation and policy oversight. Without a unified monitoring system:
            </p>
            <ul className="mt-4 space-y-2 text-slate-300 text-left max-w-2xl mx-auto">
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Statements may go undocumented</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Policy violations may be missed</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Leadership lacks a paper trail to show proactive compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};