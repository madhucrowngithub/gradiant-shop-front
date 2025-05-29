
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white mt-16">
      {/* Features Strip */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="bg-red-600 p-3 rounded-full">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-gray-400 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="bg-red-600 p-3 rounded-full">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">30-Day Returns</h4>
                <p className="text-gray-400 text-sm">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="bg-red-600 p-3 rounded-full">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-gray-400 text-sm">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="bg-red-600 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Round the clock help</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">ShopHub</h3>
            <p className="text-gray-400">
              Your ultimate shopping destination with premium products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => navigate('/')} className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={() => navigate('/marketplace')} className="text-gray-400 hover:text-red-500 transition-colors">Marketplace</a></li>
              <li><a href="#" onClick={() => navigate('/cart')} className="text-gray-400 hover:text-red-500 transition-colors">Cart</a></li>
              <li><a href="#" onClick={() => navigate('/profile')} className="text-gray-400 hover:text-red-500 transition-colors">Profile</a></li>
              <li><a href="#" onClick={() => navigate('/support')} className="text-gray-400 hover:text-red-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Home & Garden</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Sports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Books</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">123 Shopping St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">support@shophub.com</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <CreditCard className="h-8 w-12 text-gray-400" />
              <CreditCard className="h-8 w-12 text-gray-400" />
              <CreditCard className="h-8 w-12 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
