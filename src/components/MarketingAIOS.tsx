import React, { useState, useEffect, useRef } from 'react';
import { 
  Network, 
  Zap, 
  TrendingUp, 
  Brain, 
  MessageSquare, 
  FileText, 
  Shield, 
  Activity, 
  Calendar,
  DollarSign,
  CheckCircle2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Database,
  Workflow,
  Send,
  Lightbulb,
  Target,
  ArrowRight,
  BarChart3,
  Users,
  Search,
  Play,
  FileCheck,
  Rocket,
  Wrench,
  Download,
  X,
  Calculator
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface SlideProps {
  isActive?: boolean;
  slideIndex: number;
}

const slides = [
  { id: 1, title: "Own your AI. ROI in weeks." },
  { id: 2, title: "Why Now" },
  { id: 3, title: "What 'Own Your AI' Means" },
  { id: 4, title: "What We Build" },
  { id: 5, title: "Outcomes We Deliver" },
  { id: 6, title: "How the Stack Fits Together" },
  { id: 7, title: "Proof & Vertical Wedges" },
  { id: 8, title: "30-Day Timeline" },
  { id: 9, title: "Guarantee + Ownership" },
  { id: 10, title: "Decide Now" }
];

// Slide 1 - Title: Own your AI. ROI in weeks.
const Slide1: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20 px-4 sm:px-6 lg:px-8 py-4 pb-32">
      {/* Enhanced gradient background with more visual interest */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Main content - Much tighter spacing */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-5 sm:space-y-7 lg:space-y-9 z-10 max-w-7xl animate-fade-in-up pt-16 sm:pt-20 lg:pt-24">
        {/* Main headline - Big but balanced */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] px-4">
          <span className="block text-white mb-2">
            Own your AI.
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient-shift">
            ROI in weeks.
          </span>
        </h1>
        
        {/* Tagline - More readable size */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 font-medium tracking-wide px-4 max-w-5xl mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Start small, prove value, scale forever. <span className="text-emerald-400 font-bold">You own it.</span>
        </p>
        
        {/* Badge - Prominent but not overwhelming */}
        <div className="inline-flex items-center space-x-3 px-7 sm:px-9 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl animate-fade-in-up shadow-lg shadow-emerald-500/20 mt-4" style={{ animationDelay: '0.4s' }}>
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
          <p className="text-base sm:text-lg lg:text-xl text-emerald-300 font-bold tracking-wide">
            Applied AI Infrastructure for Growing Organizations
          </p>
        </div>
      </div>

      {/* Footer - All same color and closer to content */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-slate-400 text-sm sm:text-base px-4 mt-8 pb-48 animate-fade-in z-10" style={{ animationDelay: '0.6s' }}>
        <span className="font-semibold">ShooflyAI</span>
        <span className="hidden sm:inline">•</span>
        <span>2025</span>
      </div>
    </div>
  );
};

// Slide 2 - Why Now
const Slide2: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-8 pb-32">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white animate-fade-in-up tracking-tight text-center">
          Why Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bullet 1 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30 h-full flex flex-col items-center text-center">
              <DollarSign className="w-16 h-16 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">AI is affordable now</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Old tech at new prices means you can finally <span className="text-emerald-400 font-semibold">own the stack</span> instead of renting agents
              </p>
          </div>
        </div>

          {/* Bullet 2 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 h-full flex flex-col items-center text-center">
              <Shield className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Owning beats renting</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Platform agents lock you in. <span className="text-blue-400 font-semibold">Own your infrastructure</span> and keep control forever
              </p>
            </div>
          </div>

          {/* Bullet 3 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 h-full flex flex-col items-center text-center">
              <Database className="w-16 h-16 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Portable data & skills</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Keep your data, playbooks, and <span className="text-cyan-400 font-semibold">model choice</span>. Never lose what you build
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 3 - What 'Own Your AI' Means
const Slide3: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white animate-fade-in-up tracking-tight text-center">
          What 'Own Your AI' Means
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="animate-slide-in-left space-y-6">
            <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
              Shoofly Intelligence Cloud (SIC) is your <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">owned, managed AI brain</span>.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Connects the tools you already use so agents, assistants and automations work across the firm. You keep the keys and the data. We can run it or hand it over anytime with no lock-in.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-400/30 flex items-center">
                <span className="text-emerald-300 font-medium text-[10px] leading-tight">Your data stays yours</span>
            </div>
              <div className="px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-400/30 flex items-center">
                <span className="text-blue-300 font-medium text-[10px] leading-tight">Access is controlled</span>
              </div>
              <div className="px-2.5 py-1 bg-cyan-500/10 rounded-full border border-cyan-400/30 flex items-center">
                <span className="text-cyan-300 font-medium text-[10px] leading-tight">Full traceability</span>
              </div>
              <div className="px-2.5 py-1 bg-purple-500/10 rounded-full border border-purple-400/30 flex items-center">
                <span className="text-purple-300 font-medium text-[10px] leading-tight">SOC 2 Aligned</span>
              </div>
          </div>
        </div>

          {/* Right: Visual - Brain + Lock with tool ring */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            <div className="relative w-80 h-80">
              {/* Connecting lines - behind everything */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                style={{ zIndex: 0, overflow: 'visible' }}
                viewBox="0 0 320 320"
              >
                <defs>
                  {[
                    { angle: 0, idx: 0 },
                    { angle: 90, idx: 1 },
                    { angle: 180, idx: 2 },
                    { angle: 270, idx: 3 }
                  ].map((tool) => {
                    const angle = (tool.angle * Math.PI) / 180;
                    const radius = 140;
                    const centerX = 160;
                    const centerY = 160;
                    const brainRadius = 64;
                    const moduleRadius = 32;
                    
                    const startX = centerX + Math.cos(angle) * brainRadius;
                    const startY = centerY + Math.sin(angle) * brainRadius;
                    const endX = centerX + Math.cos(angle) * (radius - moduleRadius);
                    const endY = centerY + Math.sin(angle) * (radius - moduleRadius);
                    
                    return (
                      <linearGradient key={`grad-${tool.idx}`} id={`gradient-line-${tool.idx}`} x1={startX} y1={startY} x2={endX} y2={endY} gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                      </linearGradient>
                    );
                  })}
                </defs>
                {[
                  { angle: 0 },
                  { angle: 90 },
                  { angle: 180 },
                  { angle: 270 }
                ].map((tool, idx) => {
                  const angle = (tool.angle * Math.PI) / 180;
                  const radius = 140;
                  const centerX = 160;
                  const centerY = 160;
                  const brainRadius = 64;
                  const moduleRadius = 32;
                  
                  const startX = centerX + Math.cos(angle) * brainRadius;
                  const startY = centerY + Math.sin(angle) * brainRadius;
                  const endX = centerX + Math.cos(angle) * (radius - moduleRadius);
                  const endY = centerY + Math.sin(angle) * (radius - moduleRadius);
                  
                  return (
                    <g key={idx}>
                      {/* Glow effect */}
                      <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke={`url(#gradient-line-${idx})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.5"
                        className="animate-pulse"
                        style={{
                          animationDelay: `${idx * 0.15}s`,
                          filter: 'blur(4px)'
                        }}
                      />
                      {/* Main pulsing line */}
                      <line
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke={`url(#gradient-line-${idx})`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="animate-pulse"
                        style={{
                          animationDelay: `${idx * 0.15}s`,
                          opacity: 1,
                          filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 1)) drop-shadow(0 0 4px rgba(59, 130, 246, 1))'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central brain with lock */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center border-2 border-emerald-500/30 shadow-xl">
                    <Brain className="w-16 h-16 text-emerald-400" />
                  </div>
                  <Shield className="absolute -bottom-2 -right-2 w-10 h-10 text-blue-400 bg-slate-900 rounded-full p-2 border-2 border-blue-500/30" />
                </div>
              </div>

              {/* Tool logos ring */}
              {[
                { icon: Database, label: 'DB', angle: 0 },
                { icon: Network, label: 'API', angle: 90 },
                { icon: Workflow, label: 'Flow', angle: 180 },
                { icon: Activity, label: 'Sync', angle: 270 }
              ].map((tool, idx) => {
                const angle = (tool.angle * Math.PI) / 180;
                const radius = 140;
                return (
            <div
              key={idx}
                    className="absolute animate-fade-in"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${idx * 0.2}s`,
                      zIndex: 10
                    }}
                  >
                    <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50">
                      <tool.icon className="w-8 h-8 text-slate-400" />
              </div>
            </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 4 - What We Build
const Slide4: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-8 pb-48">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white animate-fade-in-up tracking-tight text-center">
          What We Build
      </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Automations Card */}
          <div className="relative group animate-slide-in-left flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30 flex flex-col h-full">
              <div className="flex items-center justify-center mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center">
                  <Workflow className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Automations</h3>
              <p className="text-lg text-slate-300 mb-4 text-center leading-relaxed">
                "When X happens, Y is done across your tools."
              </p>
              <div className="space-y-2 flex-grow">
                <div className="flex items-center space-x-2 text-slate-400">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Doc chase</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Status sync</span>
            </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">Reconciliation</span>
          </div>
        </div>
              </div>
            </div>

          {/* Assistants Card */}
          <div className="relative group animate-slide-in-up flex flex-col" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 flex flex-col h-full">
              <div className="flex items-center justify-center mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-blue-400" />
                </div>
            </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Assistants</h3>
              <p className="text-lg text-slate-300 mb-4 text-center leading-relaxed">
                "Ask and act in natural language. Talk to your data."
              </p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex-grow flex items-center">
                <div className="flex items-start space-x-2 w-full">
                  <Brain className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-400 italic">"Ask your dashboard" - answers appear instantly</p>
      </div>
    </div>
                  </div>
                </div>

          {/* AI Agents Card */}
          <div className="relative group animate-slide-in-right flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 flex flex-col h-full">
              <div className="flex items-center justify-center mb-5">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-12 h-12 text-purple-400" />
                      </div>
                    </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">AI Agents</h3>
              <p className="text-lg text-slate-300 mb-4 text-center leading-relaxed">
                Virtual employees with memory and permissions.
              </p>
              <div className="space-y-2 flex-grow">
                <div className="flex items-start space-x-2 text-slate-400">
                  <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Watch for events, recall context</span>
                </div>
                <div className="flex items-start space-x-2 text-slate-400">
                  <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Take approved actions across tools</span>
                </div>
                <div className="flex items-start space-x-2 text-slate-400">
                  <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Follow SOPs, escalate, log steps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Footer - Enhanced with Custom Dashboard info */}
        <div className="mt-10 mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-emerald-400/30 backdrop-blur-sm p-3">
            <div className="flex flex-col items-center space-y-2.5">
              {/* Product flow */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded flex items-center justify-center border border-emerald-400/30">
                    <Workflow className="w-3.5 h-3.5 text-emerald-400" />
              </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded flex items-center justify-center border border-blue-400/30">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded flex items-center justify-center border border-purple-400/30">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
            </div>
              </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 mx-1" />
                <div className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded border border-emerald-400/40">
                  <span className="text-emerald-400 font-semibold text-xs">SIC</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 mx-1" />
                <div className="px-4 py-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-full border border-emerald-400/50">
                  <span className="text-white font-semibold text-xs">Agentic Operating System</span>
              </div>
            </div>

              {/* Custom Dashboard note */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-400/30">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300 font-semibold text-sm">
                    <span className="text-white font-bold">Custom Dashboard</span> — your window into Automations, Assistants, and Agents
                  </span>
              </div>
                <p className="text-slate-400 text-xs mt-2">
                  Included free with Agentic Operating System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ROI Calculator Modal Component
interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ROICalculatorModal: React.FC<ROICalculatorModalProps> = ({ isOpen, onClose }) => {
  const [teamSize, setTeamSize] = useState(5);
  const [avgHourlyRate, setAvgHourlyRate] = useState(75);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(20);
  const [efficiencyGain, setEfficiencyGain] = useState(60);

  // Calculate ROI
  const weeklySavings = teamSize * avgHourlyRate * hoursSavedPerWeek;
  const monthlySavings = weeklySavings * 4.33;
  const annualSavings = monthlySavings * 12;
  const efficiencyValue = (teamSize * avgHourlyRate * 40 * 52) * (efficiencyGain / 100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-slate-800/50">
          <div className="flex items-center space-x-3">
            <Calculator className="w-6 h-6 text-emerald-400" />
            <div>
              <h2 className="text-xl font-bold text-white">ROI Calculator</h2>
              <p className="text-slate-400 text-sm mt-1">See how these outcomes translate into dollars</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
            aria-label="Close calculator"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Calculator Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Team Metrics</h3>
              
              {/* Team Size */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Team Size
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Average Hourly Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="number"
                  min="20"
                  max="500"
                  value={avgHourlyRate}
                  onChange={(e) => setAvgHourlyRate(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Hours Saved Per Week */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Hours Saved Per Week (per person)
                </label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={hoursSavedPerWeek}
                  onChange={(e) => setHoursSavedPerWeek(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Efficiency Gain */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Efficiency Gain (%)
                </label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={efficiencyGain}
                  onChange={(e) => setEfficiencyGain(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <div className="mt-2 w-full bg-slate-800/60 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(efficiencyGain, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Your ROI</h3>
              
              {/* Weekly Savings */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl p-6 border border-emerald-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">Weekly Savings</span>
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-emerald-400">
                  ${weeklySavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {teamSize} team members × {hoursSavedPerWeek} hrs × ${avgHourlyRate}/hr
                </div>
              </div>

              {/* Monthly Savings */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">Monthly Savings</span>
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400">
                  ${monthlySavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Based on 4.33 weeks per month
                </div>
              </div>

              {/* Annual Savings */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">Annual Savings</span>
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-purple-400">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Projected yearly value
                </div>
              </div>

              {/* Efficiency Value */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-xl p-6 border border-slate-600/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">Efficiency Value</span>
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400">
                  ${efficiencyValue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {efficiencyGain}% efficiency gain across full team
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-8 bg-slate-800/40 rounded-xl p-6 border border-slate-700/30">
            <h4 className="text-lg font-semibold text-white mb-4">Key Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Time Recovery</div>
                  <div className="text-slate-400 text-sm">
                    {hoursSavedPerWeek * teamSize} hours recovered weekly across your team
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Break-even Timeline</div>
                  <div className="text-slate-400 text-sm">
                    Typically ROI achieved in 4-8 weeks
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Compound Effect</div>
                  <div className="text-slate-400 text-sm">
                    Savings compound as team efficiency increases
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Scalable Impact</div>
                  <div className="text-slate-400 text-sm">
                    Value increases with team size and usage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 5 - Outcomes We Deliver (Immersive)
const Slide5: React.FC<SlideProps> = ({ isActive }) => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  
  const outcomes = [
    { 
      icon: Clock, 
      title: 'Hours back', 
      stat: '20+ hrs/week',
      impact: 'Time saved',
      example: 'Campaign planning: 4hrs → 1hr',
      color: 'emerald'
    },
    { 
      icon: Zap, 
      title: 'Faster execution', 
      stat: 'Minutes not days',
      impact: 'Speed increase',
      example: 'Brief generation: instant',
      color: 'blue'
    },
    { 
      icon: Database, 
      title: 'One source of truth', 
      stat: '100% accuracy',
      impact: 'Data quality',
      example: 'All systems synced real-time',
      color: 'cyan'
    },
    { 
      icon: MessageSquare, 
      title: 'Ask anything', 
      stat: 'Natural language',
      impact: 'Zero learning curve',
      example: '"Show Q4 performance" → done',
      color: 'purple'
    },
    { 
      icon: BarChart3, 
      title: 'Single-pane control', 
      stat: 'One dashboard',
      impact: 'Unified view',
      example: 'Search, trigger actions, track results',
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-4 pb-20">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-white animate-fade-in-up tracking-tight text-center">
          Outcomes We Deliver
      </h2>

        {/* CTA Button */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <Calculator className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">See how this translates into dollars</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Left: Simplified outcomes */}
          <div className="space-y-4 animate-slide-in-left">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-5 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${outcome.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                  <outcome.icon className={`w-6 h-6 text-${outcome.color}-400`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1">{outcome.title}</h3>
                  <div className={`text-lg font-bold text-${outcome.color}-400`}>{outcome.stat}</div>
                </div>
              </div>
            ))}
              </div>

          {/* Right: Custom Dashboard - Real Dashboard Look */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-5xl">
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/40 overflow-hidden shadow-xl">
                {/* Dashboard Header */}
                <div className="px-6 py-4 border-b border-slate-700/30 bg-slate-900/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-semibold text-base">Custom Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-slate-400">Live</div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-slate-900/20">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <Workflow className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 text-xs font-medium">+23%</span>
              </div>
                      <div className="text-2xl font-black text-emerald-400 mb-1">3</div>
                      <div className="text-slate-400 text-xs mb-2">active workflows</div>
                      {/* Mini Chart */}
                      <div className="flex items-end space-x-1 h-8 mt-2">
                        <div className="flex-1 bg-emerald-400/40 rounded-t" style={{ height: '60%' }} />
                        <div className="flex-1 bg-emerald-400/40 rounded-t" style={{ height: '80%' }} />
                        <div className="flex-1 bg-emerald-400/40 rounded-t" style={{ height: '70%' }} />
                        <div className="flex-1 bg-emerald-400 rounded-t" style={{ height: '100%' }} />
            </div>
          </div>
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-400 text-xs font-medium">+45%</span>
      </div>
                      <div className="text-2xl font-black text-blue-400 mb-1">12</div>
                      <div className="text-slate-400 text-xs mb-2">queries today</div>
                      {/* Mini Chart */}
                      <div className="flex items-end space-x-1 h-8 mt-2">
                        <div className="flex-1 bg-blue-400/40 rounded-t" style={{ height: '50%' }} />
                        <div className="flex-1 bg-blue-400/40 rounded-t" style={{ height: '70%' }} />
                        <div className="flex-1 bg-blue-400/40 rounded-t" style={{ height: '60%' }} />
                        <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '90%' }} />
    </div>
                  </div>
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-400 text-xs font-medium">+12%</span>
                      </div>
                      <div className="text-2xl font-black text-purple-400 mb-1">5</div>
                      <div className="text-slate-400 text-xs mb-2">agents monitoring</div>
                      {/* Mini Chart */}
                      <div className="flex items-end space-x-1 h-8 mt-2">
                        <div className="flex-1 bg-purple-400/40 rounded-t" style={{ height: '70%' }} />
                        <div className="flex-1 bg-purple-400/40 rounded-t" style={{ height: '85%' }} />
                        <div className="flex-1 bg-purple-400/40 rounded-t" style={{ height: '75%' }} />
                        <div className="flex-1 bg-purple-400 rounded-t" style={{ height: '100%' }} />
                    </div>
                  </div>
                </div>

                  {/* Main Dashboard Widgets */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Ask Widget */}
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <MessageSquare className="w-5 h-5 text-emerald-400" />
                        <span className="text-white font-semibold text-sm">Ask</span>
                  </div>
                      <div className="bg-slate-800/60 rounded-lg p-3 mb-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          <span className="text-slate-300 text-xs">Show Q4 performance</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                          <div className="text-lg font-bold text-emerald-400">+197%</div>
                          <div className="text-base font-semibold text-blue-400">$2.1M</div>
                    </div>
                  </div>
                </div>

                    {/* Act Widget */}
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <Play className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-semibold text-sm">Act</span>
                  </div>
                      <div className="bg-slate-800/60 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-slate-300 text-xs">Pending</span>
                          <span className="text-emerald-400 font-bold text-base">3</span>
                    </div>
                        <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg px-3 py-2 text-xs text-white font-medium">
                          Review All
                        </button>
                  </div>
                </div>

                    {/* Audit Widget */}
                    <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-semibold text-sm">Audit</span>
              </div>
                      <div className="bg-slate-800/60 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-xs">Last export</span>
                          <span className="text-purple-400 text-xs">2h ago</span>
                        </div>
                        <div className="w-full bg-slate-900/50 rounded-full h-1.5">
                          <div className="bg-purple-400 rounded-full h-1.5" style={{ width: '85%' }} />
                        </div>
            </div>
          </div>
        </div>

                  {/* Activity Timeline */}
                  <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                    <div className="flex items-center space-x-2 mb-3">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-semibold text-sm">Recent Activity</span>
              </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="flex-1">Status sync completed</span>
                        <span className="text-slate-500">2m ago</span>
          </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="flex-1">Assistant queried data</span>
                        <span className="text-slate-500">5m ago</span>
        </div>
      </div>
    </div>

                  {/* Footer */}
                  <div className="text-center pt-4 mt-4 border-t border-slate-700/30">
                    <div className="text-slate-400 text-xs">
                      Powered by <span className="text-emerald-400 font-semibold">Shoofly Intelligence Cloud</span>
            </div>
          </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Modal */}
      <ROICalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </div>
  );
};

// Slide 7 - Two Clear Ways Into the Catalog
const Slide7: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white animate-fade-in-up tracking-tight relative z-10 text-center">
        Two Clear Ways In
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl relative z-10 mb-12">
        {/* Advisory-first */}
        <div className="relative group animate-slide-in-left">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 shadow-2xl shadow-emerald-500/10 h-full">
            <div className="flex items-center justify-center mb-8">
              <div className="px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-400/40">
                <span className="text-emerald-300 text-xl font-semibold">Advisory-First</span>
                </div>
                </div>
            <div className="flex items-center justify-center mb-8">
              <Lightbulb className="w-20 h-20 text-emerald-400" />
                </div>
            <div className="space-y-4">
              {[
                '90-min working session',
                'KPI map & backlog',
                'Optional co-build webinar for accountants',
                'Then ladder to pilot or OS'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">{item}</span>
                  </div>
              ))}
                </div>
              </div>
            </div>

        {/* Pilot-first */}
        <div className="relative group animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-10 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-2xl shadow-blue-500/10 h-full">
            <div className="flex items-center justify-center mb-8">
              <div className="px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/40">
                <span className="text-blue-300 text-xl font-semibold">Pilot-First</span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-20 h-20 text-blue-400" />
            </div>
            <div className="space-y-4">
              {[
                '30-day Proof-of-Value',
                'Or "Free 1 Workflow" for qualified teams',
                'Then upgrade to paid pilot',
                'Ladder to Sprint → OS'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-lg font-medium">{item}</span>
          </div>
        ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center animate-fade-in-up relative z-10" style={{ animationDelay: '0.6s' }}>
        <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-400/30">
          <ArrowRight className="w-5 h-5 text-emerald-400" />
          <p className="text-lg text-emerald-300 font-semibold">
            Pilot → Sprint → OS
          </p>
        </div>
      </div>
    </div>
  );
};

// Slide 6 - Your Custom Dashboard — the control plane
const Slide6: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-white animate-fade-in-up tracking-tight text-center">
          Your Custom Dashboard — the control plane
        </h2>
        <p className="text-lg text-slate-400 mb-10 text-center animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          One window across your tools to see, ask, and act in real time.
        </p>

        {/* Dashboard Mockup */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/40 shadow-xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/30">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-semibold text-base">Custom Dashboard</span>
            </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs">Live</span>
          </div>
        </div>

            {/* Top Row: Products */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Automation */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-3">
                  <Workflow className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold text-sm">Automation</span>
                </div>
                <div className="text-slate-400 text-xs mb-2">3 active workflows</div>
                <div className="w-full bg-slate-800/60 rounded-full h-2">
                  <div className="bg-emerald-400 rounded-full h-2" style={{ width: '70%' }} />
                      </div>
                    </div>

              {/* Assistant */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold text-sm">Assistant</span>
              </div>
                <div className="text-slate-400 text-xs mb-2">12 queries today</div>
                <div className="w-full bg-slate-800/60 rounded-full h-2">
                  <div className="bg-blue-400 rounded-full h-2" style={{ width: '60%' }} />
            </div>
          </div>

              {/* Agent */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold text-sm">Agent</span>
            </div>
                <div className="text-slate-400 text-xs mb-2">5 agents monitoring</div>
                <div className="w-full bg-slate-800/60 rounded-full h-2">
                  <div className="bg-purple-400 rounded-full h-2" style={{ width: '80%' }} />
            </div>
              </div>
            </div>
            
            {/* Bottom Row: Features */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Ask */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold text-sm">Ask</span>
              </div>
                <div className="text-emerald-400 text-xs font-medium mb-1">→ answers</div>
                <div className="text-slate-400 text-xs">Plain-English queries</div>
            </div>

              {/* Act */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Play className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold text-sm">Act</span>
          </div>
                <div className="text-blue-400 text-xs font-medium mb-1">→ one-click</div>
                <div className="text-slate-400 text-xs">Actions & approvals</div>
        </div>

              {/* Audit */}
              <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold text-sm">Audit</span>
              </div>
                <div className="text-purple-400 text-xs font-medium mb-1">→ RBAC, logs</div>
                <div className="text-slate-400 text-xs">Export anytime</div>
            </div>
        </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-slate-700/30">
              <div className="text-slate-400 text-xs">
                Powered by <span className="text-emerald-400 font-semibold">Shoofly Intelligence Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 8 - Proof & Vertical Wedges (with product tags)
const Slide8: React.FC<SlideProps> = ({ isActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isK12ModalOpen, setIsK12ModalOpen] = useState(false);
  const [isContentEngineModalOpen, setIsContentEngineModalOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white animate-fade-in-up tracking-tight relative z-10 text-center">
        Proof & Vertical Wedges
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl relative z-10">
        {/* K-12 */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/40 transition-all h-full flex flex-col">
            {/* Single consolidated tag */}
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/50 text-xs text-slate-400 font-medium">
                Shown in dashboard
              </span>
              <span className="px-3 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-xs text-emerald-400 font-medium">
                Assistant + SIC
              </span>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="w-14 h-14 text-emerald-400" />
            </div>
            
            <div className="relative mb-6">
              <h3 className="text-3xl font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-200 md:block hidden">
                K-12
              </h3>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsK12ModalOpen(true);
                }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-emerald-400 hover:text-emerald-300 font-semibold text-lg cursor-pointer z-10 md:flex hidden"
              >
                View Demo →
              </a>
              {/* Mobile/Tablet: Always visible button */}
              <div className="md:hidden flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">K-12</h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsK12ModalOpen(true);
                  }}
                  className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-medium px-6 py-2.5 rounded-lg transition-all"
                >
                  View Demo →
                </button>
              </div>
            </div>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-start space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">"<span className="text-emerald-400 font-medium">Ask your dashboard</span>" to review social at scale</p>
              </div>
              <div className="flex items-start space-x-3">
                <Network className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">112 schools, one unified voice</p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">10× capacity increase</p>
              </div>
            </div>
            
            {/* Mini KPI Card */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">18 hrs</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Time saved this week</div>
              </div>
            </div>
          </div>
        </div>

        {/* CPA */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/40 transition-all h-full flex flex-col">
            {/* Single consolidated tag */}
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/50 text-xs text-slate-400 font-medium">
                Shown in dashboard
              </span>
              <span className="px-3 py-1.5 bg-blue-500/10 rounded-lg border border-blue-500/30 text-xs text-blue-400 font-medium">
                Automations + SIC
              </span>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <DollarSign className="w-14 h-14 text-blue-400" />
            </div>
            
            <div className="relative mb-6">
              <h3 className="text-3xl font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-200 md:block hidden">
                CPA
              </h3>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 hover:text-blue-300 font-semibold text-lg cursor-pointer z-10 md:flex hidden"
              >
                View Demo →
              </a>
              {/* Mobile/Tablet: Always visible button */}
              <div className="md:hidden flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">CPA</h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium px-6 py-2.5 rounded-lg transition-all"
                >
                  View Demo →
                </button>
              </div>
            </div>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-start space-x-3">
                <Workflow className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">Smart routing & status sync</p>
              </div>
              <div className="flex items-start space-x-3">
                <Activity className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">Nightly reconciliation</p>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300"><span className="font-medium">Phase 2:</span> 1099-K monitor + IRS MeF readiness</p>
              </div>
            </div>
            
            {/* Mini KPI Card */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">6 hrs</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Time saved this week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Engine */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/40 transition-all h-full flex flex-col">
            {/* Single consolidated tag */}
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/50 text-xs text-slate-400 font-medium">
                Shown in dashboard
              </span>
              <span className="px-3 py-1.5 bg-purple-500/10 rounded-lg border border-purple-500/30 text-xs text-purple-400 font-medium">
                Automation outcomes
              </span>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-14 h-14 text-purple-400" />
            </div>
            
            <div className="relative mb-6">
              <h3 className="text-3xl font-bold text-white mb-2 text-center group-hover:opacity-0 transition-opacity duration-200 md:block hidden">
                Content Engine
              </h3>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsContentEngineModalOpen(true);
                }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 hover:text-purple-300 font-semibold text-lg cursor-pointer z-10 md:flex hidden"
              >
                View Demo →
              </a>
              {/* Mobile/Tablet: Always visible button */}
              <div className="md:hidden flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">Content Engine</h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContentEngineModalOpen(true);
                  }}
                  className="bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400/30 text-purple-300 font-medium px-6 py-2.5 rounded-lg transition-all"
                >
                  View Demo →
                </button>
              </div>
            </div>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300"><span className="text-purple-400 font-bold text-xl">730% ROI</span> in 4 months</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">&gt;20 hrs/week saved</p>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-300">From research to multi-format publishing</p>
              </div>
            </div>
            
            {/* Mini KPI Card */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">22 hrs</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Time saved this week</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner note */}
      <div className="mt-12 text-center text-sm text-slate-500 animate-fade-in-up relative z-10" style={{ animationDelay: '0.6s' }}>
        <p>Leverage partner co-sell where available</p>
      </div>

      {/* CPA Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-slate-900 rounded-xl border border-slate-700/50 w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/50">
              <div>
                <h2 className="text-lg font-bold text-white">CPA Demo</h2>
                <p className="text-slate-400 text-sm mt-1">Staging Environment</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Iframe Content */}
            <div className="relative w-full h-[calc(90vh-80px)]">
              <iframe
                src="https://staging.d25gsvjhc7g9yz.amplifyapp.com/"
                className="w-full h-full border-0"
                title="CPA Demo"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}

      {/* K-12 Modal */}
      {isK12ModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsK12ModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-slate-900 rounded-xl border border-slate-700/50 w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/50">
              <div>
                <h2 className="text-lg font-bold text-white">K-12 Demo</h2>
                <p className="text-slate-400 text-sm mt-1">Signal Dashboard Video</p>
              </div>
              <button
                onClick={() => setIsK12ModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Video Content */}
            <div className="relative w-full h-[calc(90vh-80px)] bg-black">
              <video
                src="/videos/k12-signal-demo.mp4"
                className="w-full h-full object-contain"
                controls
                muted
                autoPlay
                playsInline
              >
                <source src="/videos/k12-signal-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Content Engine Modal */}
      {isContentEngineModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsContentEngineModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-slate-900 rounded-xl border border-slate-700/50 w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/50">
              <div>
                <h2 className="text-lg font-bold text-white">Content Engine Demo</h2>
                <p className="text-slate-400 text-sm mt-1">Creative Workshop Presentation</p>
              </div>
              <button
                onClick={() => setIsContentEngineModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Canva Embed Content */}
            <div className="relative w-full h-[calc(90vh-80px)] overflow-auto bg-slate-950">
              <div className="flex flex-col items-center justify-start p-4">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                  <iframe 
                    loading="lazy" 
                    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                    src="https://www.canva.com/design/DAG3wEvuvaA/mv742EqTgaqlOrSYvOz5gA/view?embed" 
                    allowFullScreen={true}
                    allow="fullscreen"
                  />
                </div>
                <a 
                  href="https://www.canva.com/design/DAG3wEvuvaA/mv742EqTgaqlOrSYvOz5gA/view?utm_content=DAG3wEvuvaA&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Copy of Copy of ShooflyAI Creative Workshop
                </a>
                <span className="text-slate-500 text-sm ml-2">by admin shoofly</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Slide 9 - 30-Day Launch Plan (Commitment Plan) - Interactive Version
const Slide9: React.FC<SlideProps> = ({ isActive }) => {
  const [selectedWeek, setSelectedWeek] = React.useState<number | null>(null);
  const [showAllWeeks, setShowAllWeeks] = React.useState(false);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
            
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Headline + Subhead */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-white animate-fade-in-up tracking-tight text-center">
          30-Day Launch Plan
        </h2>
        <p className="text-lg text-slate-400 mb-8 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Ship value in 7 days. Prove ROI by Day 30.
        </p>

        {/* Interactive Timeline */}
        <div className="relative mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between relative max-w-4xl mx-auto">
            {/* Progress line - dynamic based on selection */}
            <div className="absolute left-0 right-0 top-[28px] h-1 bg-slate-800 rounded-full" />
            <div 
              className="absolute left-0 top-[28px] h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
              style={{ 
                width: selectedWeek === null ? '0%' : selectedWeek === 1 ? '33%' : selectedWeek === 2 ? '66%' : '100%'
              }}
            />
            
            {/* Interactive Gates */}
            <div className="relative flex items-center justify-between w-full">
              {/* Week 1 Gate */}
              <button
                onClick={() => setSelectedWeek(selectedWeek === 1 ? null : 1)}
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 transition-all duration-500 cursor-pointer ${
                  selectedWeek === 1 
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 scale-110' 
                    : 'bg-slate-800 hover:bg-emerald-500/50'
                }`}>
                  <Rocket className={`w-6 h-6 transition-colors duration-300 ${
                    selectedWeek === 1 ? 'text-white' : 'text-slate-400 group-hover:text-emerald-400'
                  }`} />
                </div>
                <div className={`mt-3 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  selectedWeek === 1 
                    ? 'bg-emerald-500/20 border-2 border-emerald-400/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}>
                  <span className={`text-xs font-semibold ${
                    selectedWeek === 1 ? 'text-emerald-400' : 'text-slate-400'
                  }`}>Week 1</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">Kickoff</div>
              </button>
              
              {/* Week 2-3 Gate */}
              <button
                onClick={() => setSelectedWeek(selectedWeek === 2 ? null : 2)}
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 transition-all duration-500 cursor-pointer ${
                  selectedWeek === 2 
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-110' 
                    : 'bg-slate-800 hover:bg-blue-500/50'
                }`}>
                  <Wrench className={`w-6 h-6 transition-colors duration-300 ${
                    selectedWeek === 2 ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'
                  }`} />
                </div>
                <div className={`mt-3 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  selectedWeek === 2 
                    ? 'bg-blue-500/20 border-2 border-blue-400/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}>
                  <span className={`text-xs font-semibold ${
                    selectedWeek === 2 ? 'text-blue-400' : 'text-slate-400'
                  }`}>Week 2–3</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">Iterate</div>
              </button>
              
              {/* Week 4 Gate */}
              <button
                onClick={() => setSelectedWeek(selectedWeek === 3 ? null : 3)}
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 transition-all duration-500 cursor-pointer ${
                  selectedWeek === 3 
                    ? 'bg-purple-500 shadow-lg shadow-purple-500/50 scale-110' 
                    : 'bg-slate-800 hover:bg-purple-500/50'
                }`}>
                  <FileCheck className={`w-6 h-6 transition-colors duration-300 ${
                    selectedWeek === 3 ? 'text-white' : 'text-slate-400 group-hover:text-purple-400'
                  }`} />
                </div>
                <div className={`mt-3 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  selectedWeek === 3 
                    ? 'bg-purple-500/20 border-2 border-purple-400/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}>
                  <span className={`text-xs font-semibold ${
                    selectedWeek === 3 ? 'text-purple-400' : 'text-slate-400'
                  }`}>Week 4</span>
                </div>
                <div className="mt-1 text-xs text-slate-500">Decide</div>
              </button>
            </div>
          </div>
          
          {/* Click prompt */}
          {selectedWeek === null && (
            <div className="text-center mt-6 animate-pulse">
              <p className="text-sm text-slate-500">👆 Click a phase to explore the timeline</p>
            </div>
          )}
        </div>

        {/* Interactive Content Area */}
        <div className="min-h-[400px] mb-8">
          {/* Week 1 Content */}
          {selectedWeek === 1 && (
            <div className="bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20 animate-fade-in-up">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Week 1</h3>
                    <p className="text-sm text-emerald-400 font-medium">Kickoff & Connect</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                  <p className="text-xs font-semibold text-emerald-400">Day 1-7</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Deliverables */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-1 h-6 bg-emerald-400 rounded-full" />
                    <h4 className="text-base font-semibold text-white">What We Deliver</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">Kickoff call, connect tools, align on KPIs</p>
                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 space-y-3">
                    <p className="text-sm text-emerald-400 font-semibold">✨ Ship Working Dashboard</p>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                      <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>2–3 KPI cards + Ask box + 1 approval action</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Baseline captured (hours, cycle time, errors)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Guardrails on (RBAC/SSO, encrypted, audit logs)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Right: Client tasks */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-1 h-6 bg-blue-400 rounded-full" />
                    <h4 className="text-base font-semibold text-white">Your Action Items</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center space-x-3 group hover:bg-slate-700/30 p-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>Champion named</span>
                    </li>
                    <li className="flex items-center space-x-3 group hover:bg-slate-700/30 p-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>Read-only access granted</span>
                    </li>
                    <li className="flex items-center space-x-3 group hover:bg-slate-700/30 p-2 rounded-lg transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>SOP for 1 workflow</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Week 2-3 Content */}
          {selectedWeek === 2 && (
            <div className="bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 animate-fade-in-up">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                    <Wrench className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Week 2–3</h3>
                    <p className="text-sm text-blue-400 font-medium">Build & Iterate</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                  <p className="text-xs font-semibold text-blue-400">Day 8-21</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-2">Ship First Workflow</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">Ship first workflow by Day 10–12 → Office Hours on Day 7 & Day 21 → Iterate & expand based on feedback</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <h4 className="text-sm font-semibold text-white">Key Milestones</h4>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400 font-medium">Day 10-12:</span>
                        <span>First workflow live</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400 font-medium">Day 14:</span>
                        <span>User feedback review</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400 font-medium">Day 21:</span>
                        <span>Office hours checkpoint</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <p className="text-xs text-blue-400 font-semibold mb-1">Success Checkpoint</p>
                      <p className="text-xs text-slate-400 italic">Complete Success Checklist by Day 21 to unlock pilot credit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Week 4 Content */}
          {selectedWeek === 3 && (
            <div className="bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Week 4</h3>
                    <p className="text-sm text-purple-400 font-medium">Review & Next Steps</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
                  <p className="text-xs font-semibold text-purple-400">Day 22-30</p>
                </div>
              </div>
              
              {/* Guarantee Banner */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/40 mb-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <p className="text-sm text-purple-300 font-medium">Miss KPI? We keep working or pro-rate refund.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                      <h4 className="text-base font-semibold text-white">Day-30 Usage & ROI Report</h4>
                    </div>
                    {/* Sparkline */}
                    <div className="flex items-end space-x-1 h-8">
                      <div className="w-2 bg-purple-400/60 rounded-t transition-all hover:bg-purple-400" style={{ height: '40%' }} />
                      <div className="w-2 bg-purple-400/60 rounded-t transition-all hover:bg-purple-400" style={{ height: '60%' }} />
                      <div className="w-2 bg-purple-400/60 rounded-t transition-all hover:bg-purple-400" style={{ height: '50%' }} />
                      <div className="w-2 bg-purple-400 rounded-t transition-all hover:bg-purple-300" style={{ height: '100%' }} />
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">(Δ vs baseline) → Decide: Sprint or OS Foundation</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">📊</div>
                    <p className="text-xs text-slate-400 mb-1">Metrics Review</p>
                    <p className="text-xs text-slate-500">vs. baseline</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">💬</div>
                    <p className="text-xs text-slate-400 mb-1">Stakeholder Feedback</p>
                    <p className="text-xs text-slate-500">team input</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">🎯</div>
                    <p className="text-xs text-slate-400 mb-1">Path Forward</p>
                    <p className="text-xs text-slate-500">next steps</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Default state - Show all overview */}
          {selectedWeek === null && (
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 text-center animate-fade-in-up">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Explore the Timeline</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">Click on any phase above to see detailed milestones, deliverables, and action items for that week.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                  <span>👆</span>
                  <span>Select a week to get started</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All / Interactive Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => {
              setShowAllWeeks(!showAllWeeks);
              if (!showAllWeeks) setSelectedWeek(null);
            }}
            className="group inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-all"
          >
            {showAllWeeks ? (
              <>
                <span className="text-sm text-slate-300 font-medium">Hide Full Timeline</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span className="text-sm text-slate-300 font-medium">View Full Timeline</span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Full Timeline View (when showAllWeeks is true) */}
        {showAllWeeks && (
          <div className="space-y-4 mb-8 animate-fade-in-up">
            {/* Week 1 - Compact */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-slate-800/50 backdrop-blur-xl rounded-xl p-5 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Week 1: Kickoff & Connect</h4>
                    <p className="text-xs text-slate-400">Day 1-7</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowAllWeeks(false);
                    setSelectedWeek(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  Explore →
                </button>
              </div>
              <p className="text-sm text-slate-300 ml-13">Ship working dashboard with 2-3 KPI cards, baseline metrics, and security guardrails</p>
            </div>

            {/* Week 2-3 - Compact */}
            <div className="bg-gradient-to-r from-blue-500/10 to-slate-800/50 backdrop-blur-xl rounded-xl p-5 border border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Week 2-3: Build & Iterate</h4>
                    <p className="text-xs text-slate-400">Day 8-21</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowAllWeeks(false);
                    setSelectedWeek(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Explore →
                </button>
              </div>
              <p className="text-sm text-slate-300 ml-13">Ship first workflow, iterate based on feedback, office hours checkpoints</p>
            </div>

            {/* Week 4 - Compact */}
            <div className="bg-gradient-to-r from-purple-500/10 to-slate-800/50 backdrop-blur-xl rounded-xl p-5 border border-purple-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Week 4: Review & Next Steps</h4>
                    <p className="text-xs text-slate-400">Day 22-30</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowAllWeeks(false);
                    setSelectedWeek(3);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Explore →
                </button>
              </div>
              <p className="text-sm text-slate-300 ml-13">Day-30 Usage & ROI Report, decide next steps with full guarantee</p>
            </div>
          </div>
        )}

        {/* Footer ribbon */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-400/30">
            <Clock className="w-5 h-5 text-emerald-400" />
            <p className="text-sm text-white font-medium">Built to prove next step on this call.</p>
          </div>
        </div>

        {/* Risk Management Footer Strip */}
        <div className="mt-6 pt-6 border-t border-slate-700/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-slate-700/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-300">Built to Work — Even When AI Doesn't</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every system runs in our <span className="text-emerald-400 font-medium">SOC-aligned Shoofly Intelligence Cloud</span> with layered fail-safes: <span className="text-slate-300">99% confidence filtering</span>, <span className="text-slate-300">automatic fallback models</span>, and <span className="text-slate-300">proactive monitoring</span>. You own the system. We operate it safely, with human-in-the-loop governance every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 10 - Guarantee + Ownership (with restaurant metaphor)
const Slide10: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white animate-fade-in-up tracking-tight text-center">
        Guarantee + Ownership
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mb-8">
        {/* Left: 30-Day PoV Guarantee */}
        <div className="relative group animate-slide-in-left">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-7 border border-emerald-500/30 h-full">
            <div className="flex items-center justify-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">30-Day PoV Guarantee</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4 text-center">
              We will <span className="text-emerald-400 font-semibold">optimize for free</span> until you do
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-4" />
            <p className="text-base text-slate-400 text-center">
              Hit your KPI or we keep working at no extra cost
            </p>
          </div>
        </div>
            
        {/* Right: You Own It */}
        <div className="relative group animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-7 border border-blue-500/30 h-full">
            <div className="flex items-center justify-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">You Own It</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-slate-300">You own code and artifacts</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-slate-300">Optional handoff from managed cloud</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-base text-slate-300">No vendor lock-in, ever</p>
              </div>
            </div>
            {/* Dashboard ownership */}
            <div className="mt-4 pt-3 border-t border-blue-500/20">
              <p className="text-xs text-slate-300 text-center">
                <span className="text-blue-400 font-semibold">You own the dashboard schema and widgets.</span> We host it, or hand it off on request.
              </p>
            </div>
            {/* Restaurant metaphor */}
            <div className="mt-4 pt-3 border-t border-blue-500/20">
              <div className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 italic">
                  You own the restaurant; we run the kitchen. Replace us anytime and keep everything. Handoff available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing summary */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-white mb-4 text-center">Simple, Transparent Pricing</h4>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-slate-400 text-sm mb-1">PoV</p>
              <p className="text-2xl font-bold text-emerald-400">$4,999</p>
              <p className="text-slate-500 text-xs mt-1">one-time</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Sprint</p>
              <p className="text-2xl font-bold text-blue-400">$9,999</p>
              <p className="text-slate-500 text-xs mt-1">one-time</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">OS Foundation</p>
              <p className="text-2xl font-bold text-cyan-400">$25K+</p>
              <p className="text-slate-500 text-xs mt-1">from</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 11 - Decide Now
const Slide11: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center px-4 sm:px-8 lg:px-16 py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto w-full flex flex-col h-full">
        <h2 className="text-5xl sm:text-6xl font-bold mb-0 text-white animate-fade-in-up tracking-tight flex-shrink-0 pt-8">
          Decide Now
        </h2>

        {/* Content container - equal spacing from title and nav bar */}
        <div className="flex-1 flex flex-col justify-center items-center">
          {/* Three paths */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 w-full">
            {/* Advisory-First */}
            <div className="relative group animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all h-full">
                <Lightbulb className="w-14 h-14 text-emerald-400 mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3">Advisory-First</h3>
                <p className="text-lg text-slate-300 mb-5">90-min working session this week</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-center space-x-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">KPI map & backlog</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Co-build option</span>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Pilot-First */}
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all h-full">
                <Zap className="w-14 h-14 text-blue-400 mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3">Pilot-First</h3>
                <p className="text-lg text-slate-300 mb-5">Start today with a 30-day PoV</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">KPI guarantee</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Upgrade path to Sprint/OS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to go Agentic */}
            <div className="relative group animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all h-full">
                <Rocket className="w-14 h-14 text-purple-400 mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-white mb-3">Ready to go Agentic</h3>
                <p className="text-lg text-slate-300 mb-5">Deploy full OS Foundation</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-center space-x-2 text-purple-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Complete Agentic OS</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-purple-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Custom dashboard + all products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Decisions */}
          <div className="animate-fade-in-up w-full" style={{ animationDelay: '0.4s' }}>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-7 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-5">Confirm These 4 Things:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-left">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base">KPI</p>
                    <p className="text-slate-400 text-sm">What success looks like</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Network className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base">Tools</p>
                    <p className="text-slate-400 text-sm">What we're connecting to</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base">Start Date</p>
                    <p className="text-slate-400 text-sm">When we kick off</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base">Payment</p>
                    <p className="text-slate-400 text-sm">Invoice & terms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
export const MarketingAIOS: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const downloadPDF = () => {
    // Simply trigger browser's native print dialog with optimized print CSS
    window.print();
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const renderSlide = () => {
    const isActive = true;
    switch (currentSlide) {
      case 0: return <Slide1 isActive={isActive} slideIndex={currentSlide} />;
      case 1: return <Slide2 isActive={isActive} slideIndex={currentSlide} />;
      case 2: return <Slide3 isActive={isActive} slideIndex={currentSlide} />;
      case 3: return <Slide4 isActive={isActive} slideIndex={currentSlide} />;
      case 4: return <Slide5 isActive={isActive} slideIndex={currentSlide} />;
      case 5: return <Slide6 isActive={isActive} slideIndex={currentSlide} />;
      case 6: return <Slide8 isActive={isActive} slideIndex={currentSlide} />;
      case 7: return <Slide9 isActive={isActive} slideIndex={currentSlide} />;
      case 8: return <Slide10 isActive={isActive} slideIndex={currentSlide} />;
      case 9: return <Slide11 isActive={isActive} slideIndex={currentSlide} />;
      default: return <Slide1 isActive={isActive} slideIndex={currentSlide} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Main slide area with proper spacing */}
      <div ref={slideContainerRef} style={{ height: 'calc(100vh - 100px)', overflow: 'auto' }}>
        {renderSlide()}
      </div>

      {/* Modern Navigation controls - Fixed height navigation area */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[100px] bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Progress bar */}
          <div className="mb-1.5 md:mb-2">
            <div className="h-1 bg-slate-800/50 backdrop-blur-sm rounded-full overflow-hidden border border-slate-700/30">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-500 transition-all duration-500 ease-out shadow-lg shadow-emerald-500/30"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 md:gap-4">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="group flex items-center space-x-2 md:space-x-3 px-3 md:px-4 lg:px-5 py-1 md:py-1.5 lg:py-2 bg-slate-900/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-slate-300 group-hover:text-white font-medium transition-colors">Previous</span>
            </button>

            {/* Print/Download PDF button */}
            <button
              onClick={downloadPDF}
              className="group flex items-center space-x-2 px-3 md:px-4 py-1 md:py-1.5 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-xl text-sm md:text-base"
              title="Print or Save as PDF"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="hidden lg:inline text-slate-300 group-hover:text-emerald-400 font-medium transition-colors">
                Print / PDF
              </span>
            </button>

            {/* Slide indicators */}
            <div className="hidden md:flex items-center space-x-2 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 px-3 lg:px-4 py-1 lg:py-1.5 shadow-xl">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`group relative transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-8 lg:w-12 h-3 lg:h-4'
                      : 'w-3 lg:w-4 h-3 lg:h-4 hover:w-5 lg:hover:w-6'
                  } rounded-full`}
                  title={slide.title}
                >
                  {idx === currentSlide ? (
                    <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full shadow-lg shadow-emerald-500/50" />
                  ) : (
                    <div className="w-full h-full bg-slate-700 group-hover:bg-slate-600 rounded-full transition-colors" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile counter */}
            <div className="flex md:hidden items-center px-3 py-1 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-lg">
              <span className="text-slate-400 font-medium tabular-nums text-sm">
                <span className="text-white">{currentSlide + 1}</span> / {slides.length}
              </span>
            </div>

            {/* Next button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex px-3 lg:px-4 py-1 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-lg">
                <span className="text-slate-400 font-medium tabular-nums text-sm lg:text-base">
                  <span className="text-white">{currentSlide + 1}</span> / {slides.length}
                </span>
              </div>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="group flex items-center space-x-2 md:space-x-3 px-3 md:px-4 lg:px-5 py-1 md:py-1.5 lg:py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 rounded-xl md:rounded-2xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 text-sm md:text-base"
              >
                <span className="text-white font-semibold">Next</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




