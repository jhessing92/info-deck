import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { config } from '../config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Branding */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHAxZXRsY3BpN2VvbHg3ejNjdzB0NnEweXg4MzZmOXpvcm90NjB2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7N4Jh8cXWPeu3q8pZx/giphy.gif" 
                alt="CCSD Logo" 
                className="h-10 w-10 object-contain rounded"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Accreditation Support Tool</h3>
                <p className="text-slate-400 text-sm">Public Statements Monitor & Policy Compliance</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm">
              Research agent supporting Cobb County School District's accreditation readiness by tracking current board member public statements across media platforms and flagging potential policy concerns with historical backfill from November 2024.
            </p>
          </div>
          
          {/* Right Column - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:jonathan@shooflyai.com" className="hover:text-white transition-colors">
                  jonathan@shooflyai.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-5 w-5 text-slate-400" />
                <a href="tel:+16785179652" className="hover:text-white transition-colors">
                  (678) 517-9652
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span>Alpharetta, GA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} ShooflyAI, LLC. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};