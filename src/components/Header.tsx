
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top banner */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
            🚚 Free Shipping on Orders $50+ | 30-Day Returns | On-Time Delivery Guaranteed
          </div>
          
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigate('/')}
            >
              ShopHub
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
              
              <button 
                onClick={() => navigate('/cart')}
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;
