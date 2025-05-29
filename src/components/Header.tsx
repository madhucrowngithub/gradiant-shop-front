import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, Phone, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import AuthModal from './AuthModal';
import CustomerCareModal from './CustomerCareModal';
import AboutModal from './AboutModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCustomerCareOpen, setIsCustomerCareOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="bg-black shadow-2xl sticky top-0 z-50 border-b border-red-900/30">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-2 text-sm animate-pulse-glow">
          🚚 Free Shipping on Orders $50+ | 30-Day Returns | On-Time Delivery Guaranteed
        </div>
        
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform animate-bounce-in"
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
                className="w-full px-4 py-2 pl-10 bg-gray-900 text-white border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Customer Care */}
            <button 
              onClick={() => setIsCustomerCareOpen(true)}
              className="hidden md:flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Support</span>
            </button>

            {/* About */}
            <button 
              onClick={() => setIsAboutModalOpen(true)}
              className="hidden md:flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </button>
            
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="hidden md:flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
            
            <button 
              onClick={() => navigate('/cart')}
              className="relative p-2 text-white hover:text-red-500 transition-colors hover:scale-110 transform"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-red-900/30 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 bg-gray-900 text-white border border-red-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button 
                onClick={() => setIsCustomerCareOpen(true)}
                className="flex items-center space-x-2 text-white hover:text-red-500"
              >
                <Phone className="h-5 w-5" />
                <span>Customer Care</span>
              </button>
              <button 
                onClick={() => setIsAboutModalOpen(true)}
                className="flex items-center space-x-2 text-white hover:text-red-500"
              >
                <Info className="h-5 w-5" />
                <span>About Us</span>
              </button>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-2 text-white hover:text-red-500"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CustomerCareModal isOpen={isCustomerCareOpen} onClose={() => setIsCustomerCareOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </>
  );
};

export default Header;
