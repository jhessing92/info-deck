import React from 'react';
import { ExternalLink, Star, Users, Calendar } from 'lucide-react';

export const CCSDWork: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/20 mb-6">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CCSD
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Partnering with Cobb County School District to deliver innovative AI-powered solutions that engage communities and drive meaningful results.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Calls with Santa Claus Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎅</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Calls with Santa Claus</h3>
                    <p className="text-sm text-slate-400">AI-Powered Holiday Fundraiser</p>
                  </div>
                </div>
                <a 
                  href="https://shooflyai.com/cobbcounty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100K+</div>
                  <div className="text-xs text-slate-400">Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">62%</div>
                  <div className="text-xs text-slate-400">Email Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">⭐⭐⭐⭐⭐</div>
                  <div className="text-xs text-slate-400">All Reviews</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Interactive AI-driven system featuring personalized Santa calls for K-5 students and families. 
                90% AI-powered development with seamless donation processing and community engagement.
              </p>

              {/* Iframe Container */}
              <div className="relative rounded-lg overflow-hidden border border-slate-600/50 bg-slate-900/50">
                <div className="aspect-video">
                  <iframe
                    src="https://shooflyai.com/cobbcounty"
                    className="w-full h-full"
                    frameBorder="0"
                    loading="lazy"
                    title="Calls with Santa Claus"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20">
                  AI Voice Agent
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-300 text-xs rounded-full border border-green-500/20">
                  Fundraising
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">
                  Community Engagement
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Scraper Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">CCSD Social Media Scraper</h3>
                    <p className="text-sm text-slate-400">District-wide Social Analytics</p>
                  </div>
                </div>
                <a 
                  href="https://signal.shooflyai.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">AI</div>
                  <div className="text-xs text-slate-400">Chatbot</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">112</div>
                  <div className="text-xs text-slate-400">School Accounts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5+</div>
                  <div className="text-xs text-slate-400">Platforms</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Unified social media monitoring platform for marketing team to track, analyze, and gather insights from all district school social media accounts across multiple platforms.
              </p>

              {/* Preview Image Container instead of iframe */}
              <div className="relative rounded-lg overflow-hidden border border-slate-600/50 bg-slate-900/50">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">📊</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Social Media Dashboard</h4>
                    <p className="text-slate-300 text-sm mb-4">Centralized Analytics Hub</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-white">Live</div>
                        <div className="text-xs text-slate-400">Updates</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">Multi</div>
                        <div className="text-xs text-slate-400">Platform</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">Smart</div>
                        <div className="text-xs text-slate-400">Insights</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="https://signal.shooflyai.com/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <span>Visit Platform</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20">
                  Social Analytics
                </span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/20">
                  Multi-Platform
                </span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full border border-indigo-500/20">
                  Marketing Insights
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <Users className="h-4 w-4" />
            <span className="text-sm">
              Trusted by companies, agencies, institutions nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}; 