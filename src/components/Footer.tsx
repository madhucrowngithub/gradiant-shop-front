
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white mt-16">
      {/* Features Strip */}
      <div className="border-b border-red-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 animate-float-in">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-red-200 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-float-in">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">30-Day Returns</h4>
                <p className="text-red-200 text-sm">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-float-in">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-red-200 text-sm">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 animate-float-in">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-red-200 text-sm">Round the clock help</p>
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
            <h3 className="text-2xl font-bold text-white logo-3d" data-text="ShopHub">ShopHub</h3>
            <p className="text-red-200">
              Your ultimate shopping destination with premium products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={() => navigate('/')} className="text-red-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" onClick={() => navigate('/marketplace')} className="text-red-200 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" onClick={() => navigate('/cart')} className="text-red-200 hover:text-white transition-colors">Cart</a></li>
              <li><a href="#" onClick={() => navigate('/profile')} className="text-red-200 hover:text-white transition-colors">Profile</a></li>
              <li><a href="#" onClick={() => navigate('/support')} className="text-red-200 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Fashion</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Sports</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Books</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-300" />
                <span className="text-red-200">123 Shopping St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-300" />
                <span className="text-red-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-300" />
                <span className="text-red-200">support@shophub.com</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                <CreditCard className="h-3 w-3 text-white" />
              </div>
              <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
                <CreditCard className="h-3 w-3 text-white" />
              </div>
              <div className="w-8 h-5 bg-yellow-500 rounded flex items-center justify-center">
                <CreditCard className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-500/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-red-200 text-sm">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-red-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-red-200 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-red-200 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
