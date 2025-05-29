
import React, { useState } from 'react';
import { X, Mail, Phone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Join ShopHub'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        {/* Login Method Toggle */}
        {isLogin && (
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md transition-colors ${
                loginMethod === 'email' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 flex items-center justify-center py-2 rounded-md transition-colors ${
                loginMethod === 'phone' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              <Phone className="h-4 w-4 mr-2" />
              Phone
            </button>
          </div>
        )}

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <input
              type={loginMethod === 'email' ? 'email' : 'tel'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 hover:underline ml-1"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
