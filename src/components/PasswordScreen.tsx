import React, { useState, FormEvent } from 'react';

interface PasswordScreenProps {
  onSuccess: () => void;
}

export const PasswordScreen: React.FC<PasswordScreenProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = 'AGENTCCSD25';

  // Function to send email notification
  const sendEmailNotification = async (success: boolean) => {
    const timestamp = new Date().toLocaleString();
    const userAgent = navigator.userAgent;
    
    try {
      const response = await fetch('/.netlify/functions/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          success,
          timestamp,
          userAgent,
          ip: 'Client-side'
        })
      });
      
      if (!response.ok) {
        console.error('Failed to send notification');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password === correctPassword) {
      // Password correct - send success notification
      await sendEmailNotification(true);
      
      // Store authentication in sessionStorage
      sessionStorage.setItem('ccsd_auth', 'true');
      
      // Call success callback
      onSuccess();
    } else {
      // Password incorrect - send failure notification
      await sendEmailNotification(false);
      
      // Show error
      setError(true);
      
      // Clear error after 3 seconds
      setTimeout(() => {
        setError(false);
      }, 3000);
      
      // Clear password field
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* GIF Container with Circular Green Gradient Border */}
        <div className="w-32 h-32 mx-auto mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 p-1 shadow-lg shadow-green-400/30">
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHAxZXRsY3BpN2VvbHg3ejNjdzB0NnEweXg4MzZmOXpvcm80NjB2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7N4Jh8cXWPeu3q8pZx/giphy.gif" 
              alt="CCSD Logo" 
              className="w-full h-full rounded-full object-cover bg-slate-800"
            />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">Private Access</h1>
        <p className="text-slate-300 mb-8">This site is password protected</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label htmlFor="password" className="block text-slate-300 font-medium mb-2">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 ${
                error ? 'border-red-400' : 'border-slate-600'
              }`}
              placeholder="Enter site password"
              required
              disabled={isLoading}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
          >
            {isLoading ? 'Verifying...' : 'Access Site'}
          </button>
        </form>
        
        <div className="text-slate-500 text-sm mt-8 space-y-1">
          <p>Created for: CCSD</p>
          <p>© 2025 ShooflyAI, LLC. • Private Preview</p>
        </div>
      </div>
    </div>
  );
}; 