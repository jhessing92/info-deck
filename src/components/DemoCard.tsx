import React from 'react';
import { Play, BarChart, Activity, Users } from 'lucide-react';

interface DemoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  onClick: () => void;
}

export const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  onClick
}) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden cursor-pointer hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10"
      onClick={onClick}
      data-demo-card
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative p-8 flex flex-col items-center justify-center min-h-[400px]">
        {/* Animated Stats Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-6 left-6 opacity-30">
            <BarChart className="h-6 w-6 text-green-400" />
          </div>
          <div className="absolute top-6 right-6 opacity-30">
            <Activity className="h-6 w-6 text-blue-400" />
          </div>
          <div className="absolute bottom-6 left-6 opacity-30">
            <Users className="h-6 w-6 text-purple-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Chart Icon */}
          <div className="relative mx-auto w-24 h-24 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 flex items-center justify-center">
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Demo Preview</h3>
          
          {/* Play Button */}
          <div className="transform group-hover:scale-110 transition-transform duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <button className="relative bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full p-4 shadow-lg group-hover:shadow-green-500/30 transition-all duration-500">
                <Play className="h-8 w-8 fill-current" />
              </button>
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-4">Click to watch demonstration</p>
        </div>
      </div>

      {/* Bottom Info with Single Line Effect */}
      <div className="relative">
        <div className="px-8 pb-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Single Bottom Line */}
        <div className="absolute bottom-0 inset-x-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}; 