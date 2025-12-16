import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <AlertCircle className="h-4 w-4 mr-2" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Simple, Predictable Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to support your accreditation readiness with comprehensive social media monitoring.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* Card Header */}
            <div className="px-6 py-12 text-center border-b border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div>
                  <div className="text-sm text-slate-400 mb-1">One-Time Build Fee</div>
                  <div className="text-4xl font-bold text-white">$9,500</div>
                  <div className="text-sm text-slate-400 mt-1">Initial Setup & Configuration</div>
                </div>
                <div className="hidden sm:block text-slate-600 font-bold">+</div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Monthly Subscription</div>
                  <div className="text-4xl font-bold text-white">$500</div>
                  <div className="text-sm text-slate-400 mt-1">12-Month Contract</div>
                  <div className="text-xs text-green-400 mt-1 font-medium">One month free when paid annually</div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-6 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Build Fee Includes */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Build Fee Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Custom dashboard setup and configuration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Historical data backfill to November 2024</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Integration with all district social accounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Custom AI model training for policy compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Team training and onboarding sessions</span>
                    </li>
                  </ul>
                </div>

                {/* Monthly Fee Includes */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Monthly Fee Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">24/7 automated monitoring across all platforms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Unlimited scraper tokens for monitoring and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Real-time (hourly) policy compliance alerts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Unlimited users and export capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Monthly reports sent to email</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Ongoing AI model updates and improvements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Priority technical support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contract Note */}
              <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <p className="text-slate-300 text-sm">
                  <span className="text-blue-400 font-semibold">12-Month Contract: </span>
                  Our enterprise plan requires a 12-month commitment to ensure comprehensive coverage through your accreditation cycle. This includes continuous monitoring, regular system updates, and dedicated support to maintain optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 