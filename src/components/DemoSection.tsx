import React, { useState } from 'react';
import { BarChart3, Users, Bell, TrendingUp, MessageSquare, AlertCircle, Search, Clock } from 'lucide-react';
import { DemoCard } from './DemoCard';
import { DemoModal } from './DemoModal';
import demoManifest from '../data/demoManifest.json';

export const DemoSection: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<typeof demoManifest[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoClick = (demo: typeof demoManifest[0]) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDemo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" data-demo-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Search className="h-4 w-4 mr-2" />
            Accreditation Support Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Monitor Board Member{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Statements for Compliance
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Help the Cobb County School District automate the tracking of current board member statements across public platforms—supporting our accreditation review by flagging potential board policy violations and logging them for human review.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <BarChart3 className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Policy Compliance Alerts</h3>
                <p className="text-slate-300">AI-powered flagging of statements that may conflict with board policy, requiring human review for compliance documentation.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Bell className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time (Hourly) Alerts</h3>
                <p className="text-slate-300">Immediate notifications for high-impact statements and policy concerns that need your attention.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
                <p className="text-slate-300">Shared workspace with commenting, filtering, and export capabilities for accreditation documentation.</p>
              </div>
            </div>

            {/* Live Stats Preview */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mt-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                  Live Monitoring Stats
                </h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">Monitoring Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Monitoring Status</span>
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Statements Logged</span>
                      <span className="text-green-400">156</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Policy Flags</span>
                      <span className="text-orange-400">3</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Review Status</span>
                    <MessageSquare className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Reviewed</span>
                      <span className="text-green-400">89%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Pending</span>
                      <span className="text-blue-400">11%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Demo Card */}
          <div>
            {demoManifest.map((demo) => (
              <DemoCard
                key={demo.id}
                id={demo.id}
                title={demo.title}
                description={demo.description}
                thumbnail={demo.thumbnail}
                onClick={() => handleDemoClick(demo)}
                data-demo-card
              />
            ))}
            
            {/* Historical backfill badge */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center space-x-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Historical backfill from November 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Modal */}
      {selectedDemo && (
        <DemoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedDemo.title}
          steps={selectedDemo.steps}
        />
      )}
    </section>
  );
};