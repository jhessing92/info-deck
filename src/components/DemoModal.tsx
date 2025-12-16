import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wifi, Search, CheckCircle, AlertCircle, TrendingUp, Activity } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  steps: string[];
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
};

const SimulationStep: React.FC<{ step: number; prefersReducedMotion: boolean }> = ({ step, prefersReducedMotion }) => {
  const [sources, setSources] = useState([
    { name: 'Facebook Groups', status: 'scanning' },
    { name: 'Twitter/X', status: 'scanning' },
    { name: 'Local News Sites', status: 'scanning' },
    { name: 'Reddit Communities', status: 'scanning' },
    { name: 'NextDoor Neighborhood', status: 'scanning' }
  ]);
  
  const [foundPost, setFoundPost] = useState(false);
  const [processingSteps, setProcessingSteps] = useState<Array<{name: string; progress: number; complete: boolean}>>([]);
  const [sheetRows, setSheetRows] = useState(3);

  useEffect(() => {
    if (step === 0) {
      // Reset state for fresh start
      setSources([
        { name: 'Facebook Groups', status: 'scanning' },
        { name: 'Twitter/X', status: 'scanning' },
        { name: 'Local News Sites', status: 'scanning' },
        { name: 'Reddit Communities', status: 'scanning' },
        { name: 'NextDoor Neighborhood', status: 'scanning' }
      ]);
      setFoundPost(false);
      
      // Step 1: Source scanning simulation
      const scanningTimer = setTimeout(() => {
        setSources(prev => prev.map((source, index) => 
          index === 0 ? { ...source, status: 'found' } :
          index < 3 ? { ...source, status: 'complete' } : source
        ));
        
        setTimeout(() => {
          setSources(prev => prev.map(source => 
            source.status === 'scanning' ? { ...source, status: 'complete' } : source
          ));
          setFoundPost(true);
        }, prefersReducedMotion ? 800 : 2000);
      }, prefersReducedMotion ? 1000 : 3000);
      
      return () => clearTimeout(scanningTimer);
    }
    
    if (step === 1) {
      // Reset state for fresh start
      setProcessingSteps([]);
      
      // Step 2: AI Processing simulation
      const steps = [
        'Content Analysis',
        'Sentiment Detection', 
        'Entity Extraction',
        'Context Classification'
      ];
      
      setProcessingSteps(steps.map(name => ({name, progress: 0, complete: false})));
      
      let stepIndex = 0;
      const processInterval = setInterval(() => {
        if (stepIndex < steps.length) {
          const currentStep = stepIndex;
          let progress = 0;
          
          const progressInterval = setInterval(() => {
            progress += 25;
            setProcessingSteps(prev => prev.map((step, i) => 
              i === currentStep ? {...step, progress: Math.min(progress, 100)} : step
            ));
            
            if (progress >= 100) {
              setProcessingSteps(prev => prev.map((step, i) => 
                i === currentStep ? {...step, complete: true} : step
              ));
              clearInterval(progressInterval);
            }
          }, prefersReducedMotion ? 100 : 350);
          
          stepIndex++;
        } else {
          clearInterval(processInterval);
        }
      }, prefersReducedMotion ? 500 : 1200);
      
      return () => clearInterval(processInterval);
    }
    
    if (step === 2) {
      // Reset state for fresh start
      setSheetRows(3);
      
      // Step 3: Sheet update simulation
      const timer = setTimeout(() => {
        setSheetRows(4);
      }, prefersReducedMotion ? 400 : 1500);
      
      return () => clearTimeout(timer);
    }
  }, [step, prefersReducedMotion]);

  if (step === 0) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg min-h-[400px]">
        {/* Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              {/* Mobile-only subtle indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse sm:hidden"></div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">CCSD AI Scanner</h3>
                              <p className="text-slate-400 text-xs sm:text-sm">Real-time (hourly) monitoring system</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-green-500/10 px-3 py-2 sm:px-4 rounded-full border border-green-500/20 self-start sm:self-auto">
            <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            <span className="text-green-400 text-xs sm:text-sm font-medium">Live Monitoring</span>
          </div>
        </div>
        
        {/* Sources Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6">
          {sources.map((source, index) => (
            <motion.div
              key={source.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.6, duration: 0.8 }}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                source.status === 'found' 
                  ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10' 
                  : source.status === 'complete'
                  ? 'bg-slate-800/50 border-slate-600/50'
                  : 'bg-slate-800/30 border-slate-700/50'
              }`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  {source.status === 'scanning' && (
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse" />
                  )}
                  {source.status === 'complete' && (
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                  )}
                  {source.status === 'found' && (
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`font-medium text-sm sm:text-base ${
                    source.status === 'found' ? 'text-green-300' : 'text-white'
                  }`}>
                    {source.name}
                  </span>
                  <div className="text-slate-400 text-xs mt-1">
                    {source.status === 'scanning' && 'Scanning for board member mentions...'}
                    {source.status === 'complete' && 'Scan complete - No new mentions'}
                    {source.status === 'found' && 'New mention detected'}
                  </div>
                </div>
              </div>
              
              {source.status === 'found' && (
                <motion.div
                  initial={prefersReducedMotion ? {} : { scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide shadow-lg"
                >
                  Found
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Detection Alert - Mobile Optimized */}
        {foundPost && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 sm:p-6 shadow-xl"
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-green-400 font-semibold text-base sm:text-lg mb-2">Board Member Mention Detected</div>
                <div className="text-green-300 text-sm sm:text-base mb-3 leading-relaxed">
                  "Great job by the school board on implementing these new safety measures. As a parent, I really appreciate the proactive approach and transparency in keeping our children safe. The new protocols show real leadership."
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-green-400">
                  <span className="flex items-center space-x-1">
                    <Activity className="h-3 w-3" />
                    <span>Cobb County Parents Group</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>2 minutes ago</span>
                </div>
                <div className="mt-3 text-green-400 text-sm font-medium">
                  → Proceeding to AI analysis...
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg min-h-[400px] max-h-[600px] overflow-y-auto">
        {/* Header - Mobile Optimized */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
          <div className="relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">AI Content Processor</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Advanced sentiment analysis engine</p>
          </div>
        </div>
        
        {/* Processing Steps - Mobile Optimized */}
        <div className="space-y-4 sm:space-y-6">
          {processingSteps.map((step, index) => (
            <div key={step.name} className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-white font-medium text-sm sm:text-base">{step.name}</span>
                  {step.complete && (
                    <motion.div
                      initial={prefersReducedMotion ? {} : { scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    </motion.div>
                  )}
                </div>
                <span className="text-slate-400 text-sm font-mono">{step.progress}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${step.progress}%` }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1.0, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    step.complete 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                      : 'bg-gradient-to-r from-blue-400 to-cyan-500'
                  }`}
                />
              </div>
            </div>
          ))}
          
          {/* Results Card - Mobile Optimized */}
          {processingSteps.every(s => s.complete) && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/50 shadow-xl mb-8"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-green-400 font-semibold text-base sm:text-lg">Analysis Complete</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-slate-400 text-xs sm:text-sm font-medium mb-1">Board Member</div>
                    <div className="text-white font-semibold text-sm sm:text-base">Sarah Johnson</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs sm:text-sm font-medium mb-1">Source Platform</div>
                    <div className="text-white text-sm sm:text-base">Facebook Community Group</div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-slate-400 text-xs sm:text-sm font-medium mb-1">Sentiment Score</div>
                    <div className="text-green-400 font-semibold text-sm sm:text-base">Positive (+0.84)</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs sm:text-sm font-medium mb-1">Topic Category</div>
                    <div className="text-white text-sm sm:text-base">School Safety Policy</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700">
                <div className="text-slate-400 text-xs sm:text-sm font-medium mb-3">Key Extract</div>
                <div className="text-slate-300 italic leading-relaxed text-sm sm:text-base mb-4">
                  "Great job by the school board on implementing these new safety measures. As a parent, I really appreciate the proactive approach and transparency in keeping our children safe. The new protocols show real leadership."
                </div>
                <div className="bg-slate-700/30 rounded-lg p-3 sm:p-4 border border-slate-600/30">
                  <div className="text-slate-400 text-xs font-medium mb-2">Analysis Summary</div>
                  <div className="text-slate-300 text-xs sm:text-sm">
                    <span className="text-green-400 font-medium">Positive sentiment</span> detected with high confidence. 
                    Mentions <span className="text-blue-400 font-medium">"school board"</span> and <span className="text-blue-400 font-medium">"safety measures"</span> 
                    indicating policy-related discussion requiring board awareness.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Step 3: Google Sheet Update - Mobile Optimized
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg min-h-[400px]">
      {/* Header - Mobile Optimized */}
      <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Google Sheets Integration</h3>
                          <p className="text-slate-400 text-xs sm:text-sm">Real-time (hourly) data synchronization</p>
        </div>
      </div>
      
      {/* Google Sheet Interface - Mobile Optimized */}
      <div className="bg-white rounded-xl min-h-[300px] sm:min-h-[350px] overflow-hidden shadow-2xl border border-gray-200">
        {/* Sheet Header - Mobile Optimized */}
        <div className="bg-gray-50 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-gray-800 font-semibold text-xs sm:text-sm lg:text-base truncate">CCSD Board Sentiment Tracker</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 text-xs sm:text-sm font-medium">Auto-updating</span>
          </div>
        </div>
        
        {/* Sheet Content - Mobile Optimized */}
        <div className="overflow-x-auto">
          {/* Column Headers */}
          <div className="grid grid-cols-6 gap-0 bg-gray-100 border-b border-gray-200 min-w-[500px] sm:min-w-[600px]">
            {['Date', 'Board Member', 'Source', 'Sentiment', 'Score', 'Topic'].map((header) => (
              <div key={header} className="px-1.5 sm:px-2 lg:px-4 py-2 sm:py-3 text-left">
                <span className="text-gray-700 font-semibold text-xs lg:text-sm">{header}</span>
              </div>
            ))}
          </div>
          
          {/* Data Rows */}
          <div className="divide-y divide-gray-200 min-w-[500px] sm:min-w-[600px]">
            <div className="grid grid-cols-6 gap-0 hover:bg-gray-50">
              {['Jan 14', 'Michael Smith', 'Twitter', 'Neutral', '0.12', 'Budget'].map((cell, i) => (
                <div key={i} className="px-1.5 sm:px-2 lg:px-4 py-2 sm:py-3 text-xs lg:text-sm text-gray-600 truncate">{cell}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-6 gap-0 hover:bg-gray-50">
              {['Jan 13', 'David Davis', 'Local News', 'Positive', '0.67', 'Curriculum'].map((cell, i) => (
                <div key={i} className="px-1.5 sm:px-2 lg:px-4 py-2 sm:py-3 text-xs lg:text-sm text-gray-600 truncate">{cell}</div>
              ))}
            </div>
            
            {/* New Row Animation */}
            {sheetRows > 3 && (
              <motion.div
                initial={prefersReducedMotion ? {} : { 
                  opacity: 0, 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  scale: 0.98 
                }}
                animate={{ 
                  opacity: 1, 
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  scale: 1 
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-6 gap-0 border-2 border-green-300"
              >
                {['Jan 15', 'Sarah Johnson', 'Facebook', 'Positive', '+0.84', 'Safety'].map((cell, i) => (
                  <div key={i} className={`px-1.5 sm:px-2 lg:px-4 py-2 sm:py-3 text-xs lg:text-sm truncate ${
                    i === 1 ? 'text-green-700 font-semibold' : 
                    i === 3 || i === 4 ? 'text-green-600 font-medium' : 
                    'text-gray-600'
                  }`}>
                    {cell}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Success Notification - Mobile Optimized */}
        {sheetRows > 3 && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200 p-3 sm:p-4"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <div className="text-center">
                <div className="text-green-800 font-semibold text-xs sm:text-sm">New mention added successfully</div>
                <div className="text-green-700 text-xs mt-1">Sheet updated in real-time (hourly) • Team notifications sent</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  title,
  steps
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const maxLoops = prefersReducedMotion ? 1 : 2;
  const baseStepDuration = prefersReducedMotion ? 5000 : 8000; // 8 seconds per step

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setLoopCount(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Auto-advance through steps with custom durations
    if (loopCount < maxLoops) {
      const advanceStep = () => {
        setCurrentStep(prevStep => {
          const nextStep = prevStep + 1;
          if (nextStep >= steps.length) {
            setLoopCount(prevCount => prevCount + 1);
            return 0;
          }
          return nextStep;
        });
      };

      // Set custom duration based on current step
      const getCurrentStepDuration = () => {
        const isMobile = window.innerWidth < 640;
        if (currentStep === 0) { // Scanner step - desktop freezes 1 second longer at bottom
          return baseStepDuration + (isMobile ? 0 : 1000); // Extra 1 second on desktop
        }
        if (currentStep === 1) { // AI Content Processor step - pause longer
          return baseStepDuration + (isMobile ? 6000 : 4000); // Extra 6 seconds on mobile, 4 on desktop (includes 1 extra second)
        }
        if (currentStep === 2) { // Google Sheets step - freeze 1 second longer at end
          return baseStepDuration + 1000; // Extra 1 second for both platforms
        }
        return baseStepDuration;
      };

      intervalRef.current = setTimeout(advanceStep, getCurrentStepDuration());
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isOpen, loopCount, maxLoops, steps.length, currentStep, baseStepDuration]);

  // Auto-scroll effect - Both mobile and desktop for step 0, both platforms for step 1
  useEffect(() => {
    // Check if we're on mobile (screen width < 640px)
    const isMobile = window.innerWidth < 640;
    
    if (currentStep === 0 && isOpen) {
      // Auto-scroll for step 0 when detection alert appears (both mobile and desktop)
      const scrollTimer = setTimeout(() => {
        if (modalScrollRef.current) {
          modalScrollRef.current.scrollTo({
            top: modalScrollRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 6000); // Wait 6 seconds for the detection alert to appear
      
      return () => clearTimeout(scrollTimer);
    }
    
    if (currentStep === 1 && isOpen) {
      // Auto-scroll for step 1 when analysis is complete (both mobile and desktop)
      const scrollTimer = setTimeout(() => {
        if (modalScrollRef.current) {
          // Scroll to the very bottom to ensure Key Extract section is visible
          const element = modalScrollRef.current;
          element.scrollTo({
            top: element.scrollHeight + 100, // Add extra pixels to ensure full visibility
            behavior: 'smooth'
          });
        }
      }, isMobile ? 10000 : 12000); // Wait 10 seconds on mobile, 12 seconds on desktop for full analysis completion
      
      return () => clearTimeout(scrollTimer);
    }
    
    // Reset scroll position when switching steps (both mobile and desktop)
    if (modalScrollRef.current && currentStep !== 0 && currentStep !== 1) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal - Mobile Optimized */}
      <div className="relative bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-700/50 w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl my-2 mx-1 sm:my-4 sm:mx-2 lg:my-8 lg:mx-4">
        {/* Header - Mobile Optimized */}
        <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b border-slate-700/50 bg-slate-800/50 flex-shrink-0">
          <div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white">CCSD Board Sentiment Monitor</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Live AI monitoring demonstration</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-lg sm:rounded-xl hover:bg-slate-800 transition-all duration-200"
            aria-label="Close demo"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        
        {/* Demo Content - Mobile Optimized */}
        <div 
          ref={modalScrollRef}
          className="relative min-h-[400px] sm:min-h-[500px] max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-200px)] overflow-y-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? {} : { opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              className="w-full"
            >
              <div className="p-3 sm:p-4 lg:p-6">
                <SimulationStep step={currentStep} prefersReducedMotion={prefersReducedMotion} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Footer with Controls - Mobile Optimized */}
        <div className="border-t border-slate-700/50 bg-slate-800/30 p-3 sm:p-4 lg:p-6 flex-shrink-0">
          {/* Progress and Controls */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex space-x-1.5 sm:space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                        : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-slate-400 text-xs sm:text-sm">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            
            {/* Loop Counter */}
            {loopCount > 0 && (
              <div className="bg-slate-700/50 text-slate-400 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                Demo {loopCount + 1}/{maxLoops}
              </div>
            )}
          </div>
          
          {/* Caption - Mobile Optimized */}
          <p className="text-slate-300 text-center text-xs sm:text-sm leading-relaxed">
            CCSD Board Sentiment Monitor automatically tracks every public mention, analyzes sentiment with AI, 
            and updates your Google Sheet in real-time (hourly) for comprehensive board member monitoring.
          </p>
        </div>
      </div>
    </div>
  );
}; 