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
  Calculator,
  Info,
  Coins,
  Layers,
  Server,
  Building2
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface SlideProps {
  isActive?: boolean;
  slideIndex: number;
}

const slides = [
  { id: 1, title: "Own Your AI. ROI in Weeks." },
  { id: 2, title: "The Problem" },
  { id: 3, title: "Renting Intelligence Costs You" },
  { id: 4, title: "The Solution" },
  { id: 5, title: "You Own It. We Operate It." },
  { id: 6, title: "Why Now" },
  { id: 7, title: "The Shoofly Method" },
  { id: 8, title: "Demo: Workflow" },
  { id: 9, title: "What We Build" },
  { id: 10, title: "Proof: Real Results" },
  { id: 11, title: "The Control Plane" },
  { id: 12, title: "30-Day Launch + Pricing" },
  { id: 13, title: "Appendix: Tech Stack" },
  { id: 14, title: "Appendix: Native vs Custom AI" }
];

// Slide 1 - Cover: Own Your AI. ROI in Weeks.
const Slide1: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20 px-4 sm:px-6 lg:px-8 py-4 pb-32">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 lg:space-y-10 z-10 max-w-7xl animate-fade-in-up pt-16 sm:pt-20 lg:pt-24">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] px-4">
          <span className="block text-white mb-2">
            Own Your AI.
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient-shift">
            ROI in Weeks.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 font-medium tracking-wide px-4 max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your AI brain. <span className="text-emerald-400 font-bold">Your keys.</span> We handle the ops.
        </p>
        
        {/* Footer tagline badge */}
        <div className="inline-flex items-center space-x-3 px-7 sm:px-9 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl animate-fade-in-up shadow-lg shadow-emerald-500/20" style={{ animationDelay: '0.4s' }}>
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
          <p className="text-base sm:text-lg lg:text-xl text-emerald-300 font-bold tracking-wide">
            Start small → Prove value → Scale forever
          </p>
        </div>

        {/* Brain + connected apps visual hint */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up mt-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center">
              <Database className="w-6 h-6 text-slate-400" />
            </div>
            <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-blue-500/30 border-2 border-emerald-400/50 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Brain className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full" />
            <div className="w-1 h-1 bg-blue-400 rounded-full" />
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center">
              <Workflow className="w-6 h-6 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Logo */}
      <div className="flex flex-col items-center justify-center gap-3 px-4 mt-8 pb-48 animate-fade-in z-10" style={{ animationDelay: '0.8s' }}>
        <img src="/shoofly-wordmark.png" alt="ShooflyAI" className="h-7 sm:h-9 opacity-70 hover:opacity-100 transition-opacity" />
        <span className="text-slate-500 text-xs">2025</span>
      </div>
    </div>
  );
};

// Slide 2 - The Problem: "AI is everywhere… and nowhere"
const Slide2: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-950 via-red-950/10 to-slate-950 relative overflow-hidden py-8 pb-32">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          Every tool is adding AI.
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">None of it works together.</span>
        </h2>

        {/* Three bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-8 h-8 text-red-400" />
                <h3 className="text-lg font-bold text-white">Siloed "Brains"</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Each app has a "brain" (AI assistant) + "body" (your data). Those brains <span className="text-red-400 font-semibold">can't see across tools</span>.
              </p>
          </div>
        </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Wrench className="w-8 h-8 text-orange-400" />
                <h3 className="text-lg font-bold text-white">Manual Glue Work</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You become the integration layer—copying, pasting, reconciling data between systems <span className="text-orange-400 font-semibold">every day</span>.
              </p>
            </div>
          </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Growing Lock-in</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Fragmented intelligence + <span className="text-yellow-400 font-semibold">vendor dependency</span>. Your AI capability is trapped in someone else's product.
              </p>
            </div>
          </div>
        </div>

        {/* Brain/Body Diagram with tools */}
        <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Tool boxes with their own isolated brains */}
            {[
              { name: 'Fireflies', icon: '🎙️', color: 'purple' },
              { name: 'HubSpot', icon: '🧡', color: 'orange' },
              { name: 'QuickBooks', icon: '📊', color: 'green' },
              { name: 'Monday', icon: '📅', color: 'red' },
              { name: 'Slack', icon: '💬', color: 'blue' },
            ].map((tool, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className={`w-16 h-16 rounded-xl bg-slate-800/80 border border-slate-600/50 flex flex-col items-center justify-center`}>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">isolated</span>
                </div>
                <span className="text-xs text-slate-400">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-center text-slate-300 text-sm sm:text-base">
              <span className="text-red-400 font-semibold">"Ask Fireflies: which deals are closing?"</span> → It can't answer, because it can't see CRM + QuickBooks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 3 - What "Renting Intelligence" Costs You
const Slide3: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-orange-950/10 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          You can export data…
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">but you can't export intelligence</span>
        </h2>

        {/* Three bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-8 h-8 text-orange-400" />
                <h3 className="text-lg font-bold text-white">Export Records ✓</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Vendors let you export records (CSV)… but <span className="text-orange-400 font-semibold">not AI memory or playbooks</span>.
              </p>
            </div>
          </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-8 h-8 text-red-400" />
                <h3 className="text-lg font-bold text-white">Context Lost</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Switching models = <span className="text-red-400 font-semibold">rebuilding context from scratch</span>. All that learning? Gone.
              </p>
            </div>
              </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Trapped Capability</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Your "AI capability" becomes <span className="text-yellow-400 font-semibold">trapped inside someone else's product</span>.
              </p>
              </div>
          </div>
        </div>

        {/* Split-screen visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">Export Data</h3>
                  </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> CSV downloads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> API data access
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Record backups
              </li>
            </ul>
              </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <X className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">Export Intelligence</h3>
              </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span> AI memory & context
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span> Trained playbooks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span> Custom workflows
              </li>
            </ul>
            </div>
            </div>

        {/* Memory is the moat callout */}
        <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-full">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-lg font-semibold text-orange-300">Memory is the moat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 4 - The Solution in One Sentence
const Slide4: React.FC<SlideProps> = ({ isActive }) => {
  const [showSICModal, setShowSICModal] = useState(false);
  
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* SIC Pricing Modal */}
      <SICPricingModal isOpen={showSICModal} onClose={() => setShowSICModal(false)} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up tracking-tight text-center">
          Own the brain that
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">connects all your tools</span>
      </h2>
      
        {/* Main value proposition */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/30 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Central brain visual with SIC logo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div 
                  className="w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-3xl flex items-center justify-center border-2 border-emerald-400/50 shadow-xl shadow-emerald-500/20 p-4 cursor-pointer hover:scale-105 transition-transform group"
                  onClick={() => setShowSICModal(true)}
                >
                  <img src="/sic-logo.png" alt="SIC" className="w-full h-full object-contain" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-2 py-0.5 bg-emerald-500/90 rounded-full text-[9px] text-white font-medium whitespace-nowrap">
                      Click for details
              </div>
            </div>
                </div>
            </div>
          </div>

            {/* Copy */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Shoofly Intelligence Cloud (SIC) = your <span className="text-emerald-400">owned, managed AI brain</span>
              </h3>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Connects your apps + databases + workflows into <span className="text-white font-semibold">one intelligence layer</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Swap models <span className="text-white font-semibold">without losing your playbooks</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Feed everything into a <span className="text-white font-semibold">custom dashboard</span> (single pane of truth)</span>
                </li>
              </ul>
              {/* SIC Details Link */}
              <button
                onClick={() => setShowSICModal(true)}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg text-emerald-400 text-sm font-medium transition-all group"
              >
                <Info className="w-4 h-4" />
                <span>How SIC Pricing Works</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
        </div>
              </div>
            </div>

        {/* Visual: Central brain with connectors to tools + dashboard */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {/* Left tools - 2 columns */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '👥', name: 'CRM' },
                { icon: '📊', name: 'QuickBooks' },
                { icon: '🎙️', name: 'AI Notetaker' },
                { icon: '🤖', name: 'AI Agents' },
                { icon: '⚡', name: 'Automations' },
                { icon: '🔧', name: 'Custom Tools' },
              ].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-600/50 flex items-center justify-center">
                    <span className="text-base">{tool.icon}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 hidden sm:block">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Connector dots */}
            <div className="flex flex-col gap-1">
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            </div>

            {/* Central SIC brain with swap models indicator + info hover */}
            <div className="relative mx-3 group/sic">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border-2 border-emerald-400/50 shadow-lg shadow-emerald-500/20">
                <Brain className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-2 py-0.5 bg-emerald-500 border border-emerald-300 rounded-md">
                <span className="text-white font-bold text-[8px] tracking-wide">SIC</span>
              </div>
              {/* Swap models indicator with info icon */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-slate-800/90 border border-cyan-500/50 rounded-full flex items-center gap-1 cursor-help">
                <span className="text-cyan-400 font-medium text-[9px] whitespace-nowrap">🔄 Swap Models</span>
                <Info className="w-3 h-3 text-cyan-400/70" />
              </div>
              
              {/* Info tooltip on hover */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 -translate-y-full w-72 bg-slate-950 border border-cyan-500/40 rounded-xl p-4 shadow-2xl opacity-0 invisible group-hover/sic:opacity-100 group-hover/sic:visible transition-all duration-200 z-50">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-slate-950 border-r border-b border-cyan-500/40" />
                <h5 className="text-cyan-400 font-bold text-sm mb-2 flex items-center gap-2">
                  <span>🔄</span> Why Model Swapping Matters
                </h5>
                <div className="space-y-2 text-xs">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2">
                    <p className="text-red-400 font-semibold mb-1">❌ ChatGPT / Rented AI</p>
                    <p className="text-slate-400">Your "memory" lives on OpenAI's servers. Switch to Claude? <span className="text-red-300">Start from scratch.</span> They own your context.</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2">
                    <p className="text-emerald-400 font-semibold mb-1">✓ SIC / Owned Intelligence</p>
                    <p className="text-slate-400">Your memory, playbooks & workflows stay in <span className="text-emerald-300">your</span> SIC. Swap GPT-4 → Claude → Gemini → local models. <span className="text-emerald-300">Zero data loss.</span></p>
                  </div>
                  <p className="text-slate-500 text-[10px] italic pt-1 border-t border-slate-700/50">
                    The intelligence layer is yours. Models are just the engine—swap anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* Connector dots */}
            <div className="flex flex-col gap-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full" />
              <div className="w-1 h-1 bg-blue-400 rounded-full" />
              <div className="w-1 h-1 bg-blue-400 rounded-full" />
            </div>

            {/* Right side: Custom Dashboard */}
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-blue-400" />
              </div>
              <div className="hidden sm:block">
                <span className="text-sm text-white font-semibold">Custom Dashboard</span>
                <p className="text-[10px] text-slate-400">Single pane of truth</p>
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

// SIC Pricing Modal Component
interface SICPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SICPricingModal: React.FC<SICPricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-5xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/50 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
          <div className="flex items-center space-x-3">
            <img src="/sic-logo.png" alt="SIC" className="h-8 w-8 object-contain" />
            <div>
              <h2 className="text-xl font-bold text-white">Shoofly Intelligence Cloud</h2>
              <p className="text-slate-400 text-sm">Own your AI. We operate it. | <span className="text-cyan-400">Operations</span> + <span className="text-emerald-400">Credits</span></p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {/* Standard */}
            <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-600/50 hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">Standard</h4>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-400">$499</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Credits</span>
                  <span className="text-white font-medium">25k</span>
              </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Lanes</span>
                  <span className="text-white font-medium">1</span>
                    </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>AI Employees</span>
                  <span className="text-white font-medium">2</span>
                    </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Connectors</span>
                  <span className="text-white font-medium">2</span>
                  </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 italic">Prove ROI on 1 lane</p>
                </div>

            {/* Pro - Highlighted */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-5 border-2 border-blue-500/50 relative">
              <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 px-3 py-0.5 bg-blue-500 rounded-full text-xs font-bold text-white">
                POPULAR
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  <h4 className="text-lg font-bold text-white">Pro</h4>
              </div>
                <div>
                  <span className="text-2xl font-bold text-blue-400">$2,499</span>
                  <span className="text-slate-400 text-sm">/mo</span>
            </div>
          </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Credits</span>
                  <span className="text-white font-medium">150k</span>
      </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Lanes</span>
                  <span className="text-white font-medium">3</span>
    </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>AI Employees</span>
                  <span className="text-white font-medium">10</span>
                  </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Connectors</span>
                  <span className="text-white font-medium">10</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 italic">Multi-agent + dashboards</p>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-600/50 hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-bold text-white">Enterprise</h4>
                      </div>
                <div>
                  <span className="text-2xl font-bold text-purple-400">Custom</span>
                    </div>
                  </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Credits</span>
                  <span className="text-white font-medium">500k+</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Lanes</span>
                  <span className="text-white font-medium">Unlimited</span>
                  </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>AI Employees</span>
                  <span className="text-white font-medium">Custom</span>
                        </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Connectors</span>
                  <span className="text-white font-medium">Custom</span>
                    </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 italic">Dedicated + SLA + governance</p>
                  </div>
                </div>

          {/* Bottom Row: Credits + Governance side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* What Credits Cover */}
            <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
              <div className="flex items-center gap-2 mb-3">
                <Coins className="w-5 h-5 text-amber-400" />
                <h4 className="text-base font-semibold text-white">What Credits Cover</h4>
                  </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {[
                  { label: 'Model calls', icon: Brain },
                  { label: 'RAG/embeddings', icon: Database },
                  { label: 'Agent runtime', icon: Workflow },
                  { label: 'Voice minutes', icon: MessageSquare },
                  { label: 'Storage', icon: FileText },
                  { label: 'Automations', icon: Zap }
                ].map(({ label, icon: Icon }, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-400">
                    <Icon className="w-4 h-4 text-slate-500" />
                    <span>{label}</span>
                    </div>
                ))}
                  </div>
                </div>

            {/* Governance */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-4 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-semibold text-white">No Surprise Bills</h4>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Soft/hard caps</span>
                        </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Usage ledger</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Team budgets</span>
                        </div>
            </div>
          </div>
        </div>

          {/* Footer message */}
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              Unlike typical SaaS, you own the intelligence layer. We operate it securely.
            </p>
              </div>
          </div>
        </div>
      </div>
  );
};

// Slide 5 - You Own It. We Operate It.
const Slide5: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          Ownership without the
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">operational burden</span>
      </h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* You Own */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
            </div>
                <h3 className="text-2xl font-bold text-white">You Own</h3>
          </div>
              <ul className="space-y-4">
                {[
                  'Code & workflows',
                  'Dashboard schema & widgets',
                  'Intelligence artifacts & playbooks',
                  'Your data—always'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
      </div>
              </div>

          {/* We Operate */}
          <div className="relative group animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-blue-400" />
            </div>
                <h3 className="text-2xl font-bold text-white">We Operate</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Integrations & API changes',
                  'Security + access controls',
                  'Uptime & monitoring',
                  'Governance & auditability'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>

        {/* Fireflies example callout */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Real example: API deprecation protection</h4>
              <p className="text-slate-300">
                When Fireflies deprecated V1 and migrated to V2, we handled the entire migration. <span className="text-purple-400 font-semibold">Your workflows never broke</span>. This is why managed operations matter.
              </p>
                    </div>
                  </div>
                </div>

        {/* Handoff ready badge */}
        <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 rounded-full">
            <ArrowRight className="w-5 h-5 text-emerald-400" />
            <span className="text-lg font-semibold text-emerald-300">Handoff-ready: acquisition, vendor change, or internal team takeover</span>
              </div>
            </div>
          </div>
    </div>
  );
};

// Slide 7 - The Shoofly Method: Build AI That Actually Ships
const Slide7: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden py-8 pb-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          The 3-Phase Path to an
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Agentic OS</span>
      </h2>
      
        {/* Maturity Staircase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phase 1 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-white">Business Strategy</h3>
                </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <Target className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Pick KPI(s) to optimize</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <BarChart3 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Establish baseline metrics</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <FileCheck className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>Define success criteria</span>
                </li>
              </ul>
                </div>
                  </div>

          {/* Phase 2 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-white">Data & Systems</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <Database className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Map existing tools</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Network className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Connect sources of truth</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Set up access controls</span>
                </li>
              </ul>
              </div>
            </div>

          {/* Phase 3 */}
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-lg">3</span>
              </div>
                <h3 className="text-xl font-bold text-white">Agentic OS</h3>
            </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300">
                  <Workflow className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Deploy Automations</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <MessageSquare className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Add Assistants</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span>Launch Agents</span>
                </li>
              </ul>
            </div>
          </div>
            </div>

        {/* All visible in dashboard */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-2xl">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-semibold text-white">All visible in your <span className="text-purple-400">Custom Dashboard</span></span>
          </div>
        </div>
      </div>
                </div>
  );
};

// Slide 6 - Why Now: AI Is Unbundling SaaS
const Slide6: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
              </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          What eCommerce did to malls,
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">AI is doing to SaaS</span>
        </h2>

        {/* Three bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 h-full">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Development is Cheap</h3>
                        </div>
              <p className="text-slate-300 leading-relaxed">
                Building is <span className="text-cyan-400 font-semibold">dramatically cheaper and faster</span> now. What took months takes hours.
              </p>
                        </div>
            </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Internal Tools Fast</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Internal tools can be <span className="text-blue-400 font-semibold">built in hours</span>, not months. Custom solutions are now accessible.
              </p>
          </div>
        </div>

          <div className="relative group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Own the Stack</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You can finally <span className="text-emerald-400 font-semibold">"own the stack"</span> instead of renting it from vendors.
              </p>
          </div>
        </div>
      </div>

        {/* Visual: SaaS bundle → modular components */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Old way: SaaS Bundle */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-3">
                <div className="text-4xl">📦</div>
              </div>
              <p className="text-slate-400 text-sm">Bundled SaaS</p>
              <p className="text-red-400 text-xs">Pay for features you don't use</p>
    </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center">
              <ArrowRight className="w-8 h-8 text-cyan-400" />
            </div>

            {/* New way: Modular */}
            <div className="text-center">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-emerald-400" />
          </div>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
      </div>
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
              <p className="text-slate-300 text-sm font-semibold">Modular Components</p>
              <p className="text-emerald-400 text-xs">Build exactly what you need</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

// Slide 8 - What We Build: Automations, Assistants, Agents (3 Building Blocks)
const Slide8: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          Three building blocks.
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">One operating system.</span>
      </h2>
      
        {/* Three Building Blocks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10 mb-10">
          {/* Automations */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-emerald-400" />
            </div>
                </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Automations</h3>
              <p className="text-lg text-slate-300 mb-6 text-center">
                <span className="text-emerald-400 font-semibold">"When X happens → Y happens"</span> across tools
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Doc chase & status sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Nightly reconciliation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Smart routing & triggers</span>
                </li>
              </ul>
          </div>
        </div>

          {/* Assistants */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Assistants</h3>
              <p className="text-lg text-slate-300 mb-6 text-center">
                <span className="text-blue-400 font-semibold">"Ask + Act"</span> in natural language on your data
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">"Show Q4 performance" → done</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">"Draft campaign brief" → done</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Zero learning curve</span>
                </li>
              </ul>
                      </div>
                    </div>

          {/* Agents */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-400" />
              </div>
            </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Agents</h3>
              <p className="text-lg text-slate-300 mb-6 text-center">
                <span className="text-purple-400 font-semibold">Always-on workers</span> with memory + permissions
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Watch for events & recall context</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Take approved actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Follow SOPs, escalate when needed</span>
                </li>
              </ul>
            </div>
            </div>
          </div>

        {/* Footer: All connected through SIC */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-emerald-400" />
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <Brain className="w-6 h-6 text-cyan-400" />
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-slate-300">All connected through <span className="text-cyan-400 font-semibold">SIC</span> → surfaced in your <span className="text-blue-400 font-semibold">Custom Dashboard</span></span>
            </div>
              </div>
            </div>
    </div>
  );
};

// Slide 9 - Demo: 1 Workflow End-to-End
const Slide9Demo: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
              </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          A wedge workflow that
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">proves value fast</span>
        </h2>

        {/* Workflow Flow Diagram */}
        <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Trigger */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-3">
                <Zap className="w-10 h-10 text-cyan-400" />
            </div>
              <h4 className="text-white font-semibold mb-1">Trigger</h4>
              <p className="text-sm text-slate-400 max-w-[140px]">Meeting ends / doc received / form submitted</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-slate-500 hidden md:block" />
            <div className="md:hidden w-1 h-8 bg-gradient-to-b from-cyan-500/50 to-blue-500/50 rounded-full" />

            {/* AI Processing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-3">
                <Brain className="w-10 h-10 text-blue-400" />
          </div>
              <h4 className="text-white font-semibold mb-1">AI Extracts</h4>
              <p className="text-sm text-slate-400 max-w-[140px]">Decisions + action items + owners</p>
        </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-slate-500 hidden md:block" />
            <div className="md:hidden w-1 h-8 bg-gradient-to-b from-blue-500/50 to-emerald-500/50 rounded-full" />

            {/* Action */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mb-3">
                <Send className="w-10 h-10 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-1">One-Click</h4>
              <p className="text-sm text-slate-400 max-w-[140px]">Send to CRM / Monday / Slack</p>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-slate-500 hidden md:block" />
            <div className="md:hidden w-1 h-8 bg-gradient-to-b from-emerald-500/50 to-purple-500/50 rounded-full" />

              {/* Audit */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mb-3">
                <FileCheck className="w-10 h-10 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold mb-1">Audit Log</h4>
              <p className="text-sm text-slate-400 max-w-[140px]">Log everything for traceability</p>
            </div>
            </div>
        </div>

        {/* Example: Fireflies → Action Items → Monday */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🎙️</span>
              </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Example: Meeting Intelligence</h4>
              <p className="text-slate-300">
                <span className="text-cyan-400 font-semibold">Fireflies transcript</span> → AI extracts action items → 
                <span className="text-blue-400 font-semibold"> One-click to Monday</span> with owners & due dates → 
                <span className="text-emerald-400 font-semibold"> Logged for audit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 10 - Proof: Real Results (K-12, CPA, Content Engine)
const Slide10Proof: React.FC<SlideProps> = ({ isActive }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isK12ModalOpen, setIsK12ModalOpen] = React.useState(false);
  const [isContentEngineModalOpen, setIsContentEngineModalOpen] = React.useState(false);

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white animate-fade-in-up tracking-tight text-center">
          Proof across industries
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">(ROI in weeks)</span>
        </h2>

        {/* Three Proof Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10 mb-10">
          {/* K-12 Social Scoring */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/40 transition-all h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
            </div>
                <div>
                  <h3 className="text-xl font-bold text-white">K-12 Social Scoring</h3>
                  <span className="text-xs text-emerald-400">Assistant + SIC</span>
            </div>
              </div>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Problem:</span> Manual quarterly audit
                </div>
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Build:</span> Automated crawl + scoring
                </div>
                <div className="text-sm text-emerald-400 font-semibold">
                  Result: 80 hrs → ~2.5 hrs + human review
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-emerald-400">18 hrs</div>
                <div className="text-xs text-slate-400">saved this week</div>
              </div>
                <button
                onClick={() => setIsK12ModalOpen(true)}
                className="mt-4 w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-medium py-2 rounded-lg transition-all text-sm"
                >
                  View Demo →
                </button>
              </div>
            </div>
            
          {/* CPA Firm Operations */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/40 transition-all h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CPA Firm Ops</h3>
                  <span className="text-xs text-blue-400">Automations + SIC</span>
              </div>
              </div>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Problem:</span> Owner bottleneck (calls/email)
            </div>
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Build:</span> DocuSign auto-updates + nightly reconciliation
              </div>
                <div className="text-sm text-blue-400 font-semibold">
                  Result: Smart routing + CRM ↔ QuickBooks sync
            </div>
          </div>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-blue-400">6 hrs</div>
                <div className="text-xs text-slate-400">saved this week</div>
        </div>
                <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium py-2 rounded-lg transition-all text-sm"
                >
                  View Demo →
                </button>
              </div>
            </div>
            
          {/* Content / Marketing Ops */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/40 transition-all h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Content Engine</h3>
                  <span className="text-xs text-purple-400">Full Automation</span>
              </div>
              </div>
              <div className="space-y-3 mb-4 flex-grow">
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Problem:</span> Manual research to publish
            </div>
                <div className="text-sm text-slate-400">
                  <span className="text-slate-300 font-medium">Build:</span> Automated pipeline
              </div>
                <div className="text-sm text-purple-400 font-semibold">
                  Result: 730% ROI in 4 months
            </div>
          </div>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-purple-400">22 hrs</div>
                <div className="text-xs text-slate-400">saved this week</div>
        </div>
                <button
                onClick={() => setIsContentEngineModalOpen(true)}
                className="mt-4 w-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400/30 text-purple-300 font-medium py-2 rounded-lg transition-all text-sm"
                >
                  View Demo →
                </button>
            </div>
              </div>
            </div>
            
        {/* Testimonials Row - Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {/* K-12 Testimonial */}
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
            <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
              "ShooflyAI helped bring Christmas magic to our families with AI Santa, enhancing our year-end fundraising goals."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Dan Vehar</p>
                <p className="text-slate-500 text-xs">Marketing, Cobb County Schools</p>
              </div>
              <a href="https://shooflyai.com/cobbcounty" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-xs font-medium">
                Case Study →
              </a>
              </div>
          </div>

          {/* CPA Testimonial */}
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
            <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
              "The preparers are the ones with the higher billing rates, and when they get more efficient, that's how we reduce our time and become more profitable."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Kendyl Strickland</p>
                <p className="text-slate-500 text-xs">Firm Owner, Strickland CPA</p>
              </div>
              <a href="https://shooflyai.com/data-reconciliation-case-study" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs font-medium">
                Case Study →
              </a>
              </div>
            </div>
            
          {/* Law Firm Testimonial */}
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
            <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
              "We have significantly increased our reach using AI avatars and marketing automation with ShooflyAI."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Chris Lowe</p>
                <p className="text-slate-500 text-xs">Firm Director, Lowe Law</p>
              </div>
              <a href="https://shooflyai.com/lowelaw" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-xs font-medium">
                Case Study →
              </a>
            </div>
          </div>
        </div>
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
                src="https://staging.d2oouzph28ekuq.amplifyapp.com/"
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

// Slide 11 - The Control Plane: Your Custom Dashboard
const Slide11ControlPlane: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-8 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white animate-fade-in-up tracking-tight text-center">
          One window to
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up tracking-tight text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Ask, Act, and Audit</span>
        </h2>

        {/* Dashboard Mock - Compact but Visual */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-2xl p-4 lg:p-5 border-2 border-slate-700/50 shadow-2xl shadow-blue-500/10 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Dashboard Header - Compact */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                  </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Command Center</h3>
                <p className="text-[10px] text-slate-400">Custom Dashboard • Single Pane of Truth</p>
                  </div>
                </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-semibold">Live</span>
              </div>
            </div>
              
          {/* 6 Widget Grid with Charts/Data */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-4">
            {/* Widget 1: Active Workflows with mini bar chart */}
            <div className="bg-slate-800/60 rounded-xl p-3 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-semibold text-xs">Active Workflows</span>
                  </div>
                <Activity className="w-3 h-3 text-emerald-400/50" />
                  </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">12</div>
              <div className="flex items-center gap-0.5 mb-2 h-6">
                {[80, 65, 90, 75, 95, 85].map((height, i) => (
                  <div key={i} className="flex-1 bg-emerald-500/30 rounded-sm border border-emerald-500/50" style={{ height: `${height/3.5}px` }} />
                ))}
                </div>
              <div className="text-[10px] text-emerald-400">↑ 23% vs last week</div>
              </div>

            {/* Widget 2: Agent Status with status indicator */}
            <div className="bg-slate-800/60 rounded-xl p-3 lg:p-4 border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-semibold text-xs">Agent Status</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-1">3/3</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-purple-500/20 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="text-[9px] text-slate-500">100%</span>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">All systems operational</div>
            </div>

            {/* Widget 3: Queries Today with trend */}
            <div className="bg-slate-800/60 rounded-xl p-3 border border-blue-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-semibold text-xs">Queries Today</span>
                  </div>
                <TrendingUp className="w-3 h-3 text-blue-400" />
                  </div>
              <div className="text-2xl font-bold text-blue-400 mb-2">847</div>
              <div className="flex items-center gap-0.5 mb-2 h-6">
                {[12, 18, 15, 22, 28, 35, 42, 38, 45, 52].map((height, i) => (
                  <div key={i} className="flex-1 bg-blue-500/40 rounded-sm border border-blue-500/60" style={{ height: `${height/2.5}px` }} />
                ))}
                </div>
              <div className="text-[10px] text-blue-400">Peak: 2-4pm (87 q/hr)</div>
              </div>

            {/* Widget 4: Approvals Queue with list */}
            <div className="bg-slate-800/60 rounded-xl p-3 border border-orange-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-semibold text-xs">Approvals</span>
                </div>
                <Clock className="w-3 h-3 text-orange-400/50" />
              </div>
              <div className="text-2xl font-bold text-orange-400 mb-2">5</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[9px] text-slate-400">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span>2 workflow triggers</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] text-slate-400">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  <span>3 agent actions</span>
                </div>
            </div>
          </div>

            {/* Widget 5: KPI Cards with progress */}
            <div className="bg-slate-800/60 rounded-xl p-3 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-semibold text-xs">Time Saved</span>
                </div>
                <Target className="w-3 h-3 text-cyan-400/50" />
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">18 hrs</div>
              <div className="mb-1">
                <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full shadow-lg shadow-cyan-500/50" style={{ width: '72%' }} />
                </div>
              </div>
              <div className="text-[10px] text-cyan-400">Goal: 25 hrs/week</div>
            </div>

            {/* Widget 6: Audit Log with recent activity */}
            <div className="bg-slate-800/60 rounded-xl p-3 border border-pink-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-pink-400" />
                  <span className="text-white font-semibold text-xs">Audit Log</span>
                </div>
                <Shield className="w-3 h-3 text-pink-400/50" />
              </div>
              <div className="text-2xl font-bold text-pink-400 mb-1">1.2k</div>
              <div className="space-y-0.5">
                <div className="text-[9px] text-slate-500">• CRM sync completed</div>
                <div className="text-[9px] text-slate-500">• 3 workflows triggered</div>
                <div className="text-[9px] text-slate-500">• 2 approvals processed</div>
              </div>
            </div>
          </div>

          {/* Ask, Act, Audit Row - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
            <div className="bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-xl p-4 border-2 border-cyan-500/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-cyan-300 font-bold text-base">Ask</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                Plain-English queries → <span className="text-cyan-400 font-semibold">instant answers</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/15 to-blue-500/15 rounded-xl p-4 border-2 border-emerald-500/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-emerald-300 font-bold text-base">Act</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                <span className="text-emerald-400 font-semibold">One-click approvals</span> across your stack
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-xl p-4 border-2 border-purple-500/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-purple-300 font-bold text-base">Audit</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                <span className="text-purple-400 font-semibold">RBAC</span>, logs, export anytime
              </p>
            </div>
          </div>
        </div>

        {/* Cost Lever Callout - Compact */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-500/30 mb-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-blue-400" />
            </div>
                  <div>
              <h4 className="text-sm font-semibold text-white mb-0.5">Cost lever</h4>
              <p className="text-slate-300 text-xs leading-snug">
                Reduce seat costs by shifting work into your owned dashboard; keep only minimum <span className="text-blue-400 font-semibold">system-of-record</span> licenses.
              </p>
                  </div>
                </div>
        </div>

        {/* Footer with SIC Logo */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
            <img src="/sic-logo.png" alt="SIC" className="h-5 w-5 object-contain" />
            <span className="text-xs text-slate-300">Powered by <span className="text-cyan-400 font-semibold">Shoofly Intelligence Cloud</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 12 - 30-Day Launch Plan + Commercials (condensed final slide)
const Slide12Final: React.FC<SlideProps> = ({ isActive }) => {
  const [showSICModal, setShowSICModal] = useState(false);
  
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      {/* SIC Pricing Modal */}
      <SICPricingModal isOpen={showSICModal} onClose={() => setShowSICModal(false)} />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white animate-fade-in-up tracking-tight text-center">
          Ship value in 7 days. <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">Prove ROI by Day 30.</span>
        </h2>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Left: Timeline + Guarantee */}
          <div className="space-y-3">
            {/* Timeline */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-5 border border-slate-700/50">
              <h4 className="text-white font-bold mb-4 text-center text-lg">30-Day Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Week 1</p>
                    <p className="text-xs text-slate-400">Connect + baseline + ship dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Week 2-3</p>
                    <p className="text-xs text-slate-400">Ship workflows + iterate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Week 4</p>
                    <p className="text-xs text-slate-400">ROI review + expand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-emerald-300 font-semibold text-base">We fine-tune at no cost until it works</p>
          </div>
        </div>

          {/* Right: Pricing */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-5 border border-slate-700/50">
            <h4 className="text-white font-bold mb-4 text-center text-lg">Packaging & Pricing</h4>
            
            {/* Core Packages */}
            <div className="space-y-2.5 mb-4">
              <div className="bg-slate-800/50 rounded-lg p-3.5 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-base">Proof-of-Value (PoV) Pilot</p>
                  <p className="text-xs text-slate-400">30-day validation</p>
                </div>
                <p className="text-emerald-400 font-bold text-xl">$4-8k</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-3.5 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-base">Sprint</p>
                  <p className="text-xs text-slate-400">Expand workflows + agents</p>
                </div>
                <p className="text-blue-400 font-bold text-xl">$10-18k</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-3.5 border border-purple-500/30 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-base">AI OS Foundation</p>
                  <p className="text-xs text-slate-400">Full Agentic OS</p>
                </div>
                <p className="text-purple-400 font-bold text-xl">$25k+</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-3" />

            {/* Additional Services */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span>Advising (monthly)</span>
                <span className="text-cyan-400 font-semibold">min $2,500/mo</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>AI Development</span>
                <span className="text-blue-400 font-semibold">Varies</span>
              </div>
              <button 
                onClick={() => setShowSICModal(true)}
                className="flex items-center justify-between w-full text-slate-300 hover:bg-emerald-500/10 rounded-lg px-2 py-1 -mx-2 transition-all group"
              >
                <span className="flex items-center gap-2">
                  SIC Cloud (managed ops)
                  <Info className="w-3 h-3 text-emerald-400/70 group-hover:text-emerald-400 transition-colors" />
                </span>
                <span className="text-emerald-400 font-semibold group-hover:text-emerald-300">$350–2.5k/mo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Close CTA */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h4 className="text-xl font-bold text-white mb-3 text-center">Pick 1 Workflow → Pick 1 KPI → Pick Start Date</h4>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-200 text-base font-medium">KPI</span>
            </div>
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" />
              <span className="text-slate-200 text-base font-medium">Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-200 text-base font-medium">Start Date</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-purple-400" />
              <span className="text-slate-200 text-base font-medium">Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 13 - Appendix: PurTera IT Tech Stack Example
const Slide13Appendix: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white animate-fade-in-up tracking-tight">
            Appendix: <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Real Client Architecture</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            PurTera IT "Mullet Stack" — <span className="text-cyan-400">Buy vs Build</span> approach for field services
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">BUY</span>
            <span className="text-slate-400 text-sm">Existing SaaS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-cyan-500 text-slate-900 text-xs font-bold rounded-full">BUILD</span>
            <span className="text-slate-400 text-sm">Custom AI/IP</span>
          </div>
        </div>

        {/* Main Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Core Stack */}
          <div className="lg:col-span-2 space-y-3">
            {/* Front Office Layer */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-purple-400 font-bold text-base">Front Office (SaaS Layer)</h3>
                <span className="px-2 py-0.5 bg-purple-600/30 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/50">BUY</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">HubSpot</span>
                    <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">BUY</span>
                  </div>
                  <p className="text-slate-500 text-xs">Deals, tickets, invoices</p>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">Fireflies.ai</span>
                    <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">BUY</span>
                  </div>
                  <p className="text-slate-500 text-xs">Calls + transcripts</p>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">Field Nation</span>
                    <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">BUY</span>
                  </div>
                  <p className="text-slate-500 text-xs">1099 dispatch + pay</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-purple-500/50 to-blue-500/50" />
            </div>

            {/* Orchestration Layer */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-blue-400 font-bold text-base">Orchestration & Glue Layer</h3>
                <span className="px-2 py-0.5 bg-purple-600/30 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/50">BUY</span>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-sm">n8n Orchestrator</span>
                  <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">BUY</span>
                </div>
                <p className="text-slate-500 text-xs">Workflow engine + webhooks; routes data between systems</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-cyan-500/50" />
            </div>

            {/* AI Brain Layer */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/30 relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-bold text-base">AI Brain (Our IP)</h3>
                <span className="px-2 py-0.5 bg-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/50">BUILD</span>
              </div>
              <p className="text-slate-500 text-xs mb-3">Core: Python / FastAPI "Brain" — Catches bad work before tech leaves site → fewer truck rolls</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-800/60 rounded-lg p-2.5 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-medium text-sm">SOW Generator</span>
                    <span className="px-1.5 py-0.5 bg-cyan-500 text-slate-900 text-[10px] font-bold rounded">BUILD</span>
                  </div>
                  <p className="text-slate-500 text-[10px]">RAG + LLM (SOW in ~30s)</p>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-2.5 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-medium text-sm">Risk Engine</span>
                    <span className="px-1.5 py-0.5 bg-cyan-500 text-slate-900 text-[10px] font-bold rounded">BUILD</span>
                  </div>
                  <p className="text-slate-500 text-[10px]">COT schedule / margin risk</p>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-2.5 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-medium text-sm">Vision QC Engine</span>
                    <span className="px-1.5 py-0.5 bg-cyan-500 text-slate-900 text-[10px] font-bold rounded">BUILD</span>
                  </div>
                  <p className="text-slate-500 text-[10px]">Photo QC (labels, cable mgmt)</p>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-2.5 border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-white font-medium text-sm">FastAPI Brain</span>
                    <span className="px-1.5 py-0.5 bg-cyan-500 text-slate-900 text-[10px] font-bold rounded">BUILD</span>
                  </div>
                  <p className="text-slate-500 text-[10px]">API + rules + auth</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500/50 to-emerald-500/50" />
            </div>

            {/* Data Layer */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-emerald-400 font-bold text-base">Data & Persistence Layer</h3>
                <span className="px-2 py-0.5 bg-purple-600/30 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/50">BUY</span>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50 mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-sm">Supabase DB</span>
                  <span className="px-1.5 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded">BUY</span>
                </div>
                <p className="text-slate-500 text-xs">Postgres shadow DB + evidence trail</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['WAPs', 'Patch panels', 'Photos', 'QC results', 'Projects', 'Sites', 'Rooms', 'Racks', 'Ports', 'Cable runs'].map((entity) => (
                  <span key={entity} className="px-2 py-1 bg-slate-800/80 text-slate-400 text-[10px] rounded border border-slate-700/50">{entity}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Field Execution */}
          <div className="space-y-3">
            {/* Field Execution */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/30 h-fit">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-cyan-400 font-bold text-base">Field Execution (Offline-First)</h3>
                <span className="px-2 py-0.5 bg-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/50">BUILD</span>
              </div>
              
              <div className="bg-slate-800/60 rounded-lg p-3 border border-cyan-500/20 mb-3">
                <h4 className="text-white font-semibold text-sm mb-2">Custom Offline App (React Native)</h4>
                <p className="text-slate-500 text-xs mb-2">"Fisher-Price simple" for subs</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    Runbook synced from SOW
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    Step-by-step checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    Photo capture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    Barcode / label scans
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                    100% offline (basement-safe)
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                <h4 className="text-white font-semibold text-sm mb-2">Field Technicians (1099 subs)</h4>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    Tech uses app on site
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    Photos sync → Vision QC checks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full" />
                    FAIL → app flashes red, request fix
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                    PASS → triggers payment + invoicing
                  </li>
                </ul>
              </div>
            </div>

            {/* Offline Badge */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/40 text-center">
              <p className="text-emerald-300 font-semibold text-sm">Works 100% offline — basement-safe, zero connectivity required</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-slate-500 text-xs">
            Suggested core: HubSpot + Fireflies + Field Nation | n8n orchestrates | FastAPI brain + Vision QC | Supabase shadow DB | Offline React Native app.
          </p>
          <p className="text-slate-600 text-xs mt-2 italic">
            Architecture shared by PurTera IT — demonstrating the Shoofly "Buy vs Build" approach
          </p>
        </div>
      </div>
    </div>
  );
};

// Slide 14 - Appendix: Fred's Native AI vs Custom AI Architecture
const Slide14NativeAI: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pb-32">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white animate-fade-in-up tracking-tight">
            Appendix: <span className="bg-gradient-to-r from-orange-400 to-blue-400 text-transparent bg-clip-text">Native AI vs Custom Agents</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            How we layer custom intelligence on top of native AI features
          </p>
        </div>

        {/* Main Architecture Diagram */}
        <div className="relative">
          {/* Top Row - Native AI Apps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Fireflies */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-xl rounded-xl p-5 border border-purple-500/30 text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Fireflies AI Notetaker</h3>
              <p className="text-purple-300 text-sm font-medium mb-2">Native AI App</p>
              <p className="text-slate-500 text-xs">Auto-transcribes calls, extracts action items</p>
            </div>

            {/* HubSpot Breeze */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl rounded-xl p-5 border border-orange-500/30 text-center">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">'Breeze' HubSpot AI</h3>
              <p className="text-orange-300 text-sm font-medium mb-2">Native AI App</p>
              <p className="text-slate-500 text-xs">CRM summaries, email drafts, lead scoring</p>
            </div>

            {/* ChatGPT */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-xl rounded-xl p-5 border border-emerald-500/30 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Brain className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">ChatGPT Chat</h3>
              <p className="text-emerald-300 text-sm font-medium mb-2">Native AI App</p>
              <p className="text-slate-500 text-xs">Ad-hoc queries, content generation</p>
            </div>
          </div>

          {/* Connector Lines */}
          <div className="flex justify-center items-center gap-8 my-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-slate-600" />
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500/50 to-blue-500/50 rounded-full" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-orange-500/50 to-blue-500/50 rounded-full" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-8 bg-gradient-to-b from-emerald-500/50 to-blue-500/50 rounded-full" />
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600 via-slate-600 to-transparent" />
          </div>

          {/* API Layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-4 border border-slate-600/50 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-5 h-5 text-purple-400" />
                <h4 className="text-white font-semibold">Fireflies APIs</h4>
              </div>
              <p className="text-slate-500 text-xs">Transcripts, summaries, action items, meeting data</p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-4 border border-slate-600/50 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Network className="w-5 h-5 text-orange-400" />
                <h4 className="text-white font-semibold">HubSpot APIs</h4>
              </div>
              <p className="text-slate-500 text-xs">Contacts, deals, tickets, emails, custom objects</p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-gradient-to-b from-slate-600 to-cyan-500" />
              <ArrowRight className="w-5 h-5 text-cyan-400 rotate-90" />
            </div>
          </div>

          {/* Custom AI Agents */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-cyan-500/40">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-cyan-400 font-bold text-xl">Custom AI Agents</h3>
              <span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/50">YOUR IP</span>
            </div>
            
            <p className="text-slate-400 text-sm text-center mb-4">
              Your custom agents consume data from native AI tools via APIs, then apply <span className="text-cyan-400 font-semibold">your business logic</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-slate-800/60 rounded-lg p-3 border border-cyan-500/20 text-center">
                <p className="text-white text-sm font-medium">Deal Scorer</p>
                <p className="text-slate-500 text-[10px]">Prioritize by fit</p>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-cyan-500/20 text-center">
                <p className="text-white text-sm font-medium">Follow-up Agent</p>
                <p className="text-slate-500 text-[10px]">Auto-draft sequences</p>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-cyan-500/20 text-center">
                <p className="text-white text-sm font-medium">Meeting Intel</p>
                <p className="text-slate-500 text-[10px]">Extract commitments</p>
              </div>
              <div className="bg-slate-800/60 rounded-lg p-3 border border-cyan-500/20 text-center">
                <p className="text-white text-sm font-medium">Risk Alerter</p>
                <p className="text-slate-500 text-[10px]">Flag churn signals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-6 bg-gradient-to-r from-orange-500/10 via-slate-900/50 to-cyan-500/10 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 text-center">
          <p className="text-slate-300 text-sm">
            <span className="text-orange-400 font-semibold">Native AI</span> handles the basics → 
            <span className="text-cyan-400 font-semibold"> Custom Agents</span> add your competitive edge
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-slate-600 text-xs italic">
            Diagram illustrating layered AI approach — native tools + custom agents via APIs
          </p>
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
      case 0: return <Slide1 isActive={isActive} slideIndex={currentSlide} />;           // Cover
      case 1: return <Slide2 isActive={isActive} slideIndex={currentSlide} />;           // The Problem
      case 2: return <Slide3 isActive={isActive} slideIndex={currentSlide} />;           // Renting Intelligence Costs
      case 3: return <Slide4 isActive={isActive} slideIndex={currentSlide} />;           // The Solution
      case 4: return <Slide5 isActive={isActive} slideIndex={currentSlide} />;           // You Own It. We Operate It.
      case 5: return <Slide6 isActive={isActive} slideIndex={currentSlide} />;           // Why Now
      case 6: return <Slide7 isActive={isActive} slideIndex={currentSlide} />;           // The Shoofly Method
      case 7: return <Slide9Demo isActive={isActive} slideIndex={currentSlide} />;       // Demo Workflow (SWAPPED - now 8)
      case 8: return <Slide8 isActive={isActive} slideIndex={currentSlide} />;           // What We Build (SWAPPED - now 9)
      case 9: return <Slide10Proof isActive={isActive} slideIndex={currentSlide} />;     // Proof: Real Results
      case 10: return <Slide11ControlPlane isActive={isActive} slideIndex={currentSlide} />; // Control Plane Dashboard
      case 11: return <Slide12Final isActive={isActive} slideIndex={currentSlide} />;    // 30-Day Launch + Pricing
      case 12: return <Slide13Appendix isActive={isActive} slideIndex={currentSlide} />;  // Appendix: Tech Stack
      case 13: return <Slide14NativeAI isActive={isActive} slideIndex={currentSlide} />;  // Appendix: Native vs Custom AI
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











