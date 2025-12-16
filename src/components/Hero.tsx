import React from 'react';
import { TrendingUp, Clock, Users, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleDemoClick = () => {
    // Find the demo section and scroll to it
    const demoSection = document.querySelector('[data-demo-section]');
    const demoCard = document.querySelector('[data-demo-card]') as HTMLElement;
    const isMobile = window.innerWidth < 640;

    if (demoSection) {
      // Scroll to the demo section first
      demoSection.scrollIntoView({ behavior: 'smooth' });

      // Mobile-only: Auto-click the demo play button after scrolling
      if (isMobile) {
        setTimeout(() => {
          if (demoCard) {
            demoCard.click();
          }
        }, 800); // Wait for scroll animation to complete
      }
      // Desktop: Just scroll to section, don't auto-play
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <div className="mb-2">Accreditation Support Tool:</div>
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Public Statements Monitor
                  </span>
                </div>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Automated tracking of current board member public statements across media platforms to support accreditation readiness. 
                Flags potential policy concerns and maintains centralized compliance documentation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <button 
              onClick={handleDemoClick}
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Live Demo
              <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4 sm:px-0">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg mr-3">
                <Clock className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">24/7 Monitoring</h3>
            </div>
            <p className="text-slate-300">Continuous tracking across news, social media, and community forums with hourly updates.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Historical Data</h3>
            </div>
            <p className="text-slate-300">Covers all public statements from current board members dating back to November 2024.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg mr-3">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
            </div>
            <p className="text-slate-300">Shared interface for filtering, annotating, and exporting reviewed statements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};