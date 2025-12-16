import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { config } from '../config';

export const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHAxZXRsY3BpN2VvbHg3ejNjdzB0NnEweXg4MzZmOXpvcm90NjB2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7N4Jh8cXWPeu3q8pZx/giphy.gif" 
                  alt="ShooflyAI Logo" 
                  className="h-10 w-10 object-contain rounded"
                />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white">CCSD Accreditation Agent</h1>
                <p className="text-xs text-slate-400 hidden sm:block">AI-Powered Monitoring by ShooflyAI</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-teal-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/marketing-ai-os"
                className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                  location.pathname === '/marketing-ai-os'
                    ? 'text-teal-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Marketing AI OS™</span>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-bold text-white">{config.company.name}</p>
            </div>
            <img 
              src="https://i.imgur.com/x9p5eHG.png" 
              alt="CCSD Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};