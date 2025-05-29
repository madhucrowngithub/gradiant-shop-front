
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
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-red-200">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-2 text-sm animate-pulse-modern">
          🚚 Free Shipping on Orders $50+ | 30-Day Returns | On-Time Delivery Guaranteed
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* 3D Logo */}
            <div 
              className="logo-3d gradient-text animate-bounce-3d"
              data-text="ShopHub"
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
                  className="w-full px-4 py-3 pl-12 bg-red-50 text-gray-900 border-2 border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-red-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Customer Care */}
              <button 
                onClick={() => setIsCustomerCareOpen(true)}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105 transform"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">Support</span>
              </button>

              {/* About */}
              <button 
                onClick={() => setIsAboutModalOpen(true)}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105 transform"
              >
                <Info className="h-5 w-5" />
                <span className="font-medium">About</span>
              </button>
              
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105 transform"
              >
                <User className="h-5 w-5" />
                <span className="font-medium">Sign In</span>
              </button>
              
              <button 
                onClick={() => navigate('/cart')}
                className="relative p-3 text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-110 transform bg-red-50 rounded-xl hover:bg-red-100"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce-3d font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-red-200 py-4 animate-slide-3d">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-12 bg-red-50 text-gray-900 border-2 border-red-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-red-400" />
                </div>
                <button 
                  onClick={() => setIsCustomerCareOpen(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  <span>Customer Care</span>
                </button>
                <button 
                  onClick={() => setIsAboutModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all"
                >
                  <Info className="h-5 w-5" />
                  <span>About Us</span>
                </button>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all"
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
      <CustomerCareModal isOpen={isCustomerCareOpen} onClose={() => setIsCustomerCareOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </>
  );
};

export default Header;
