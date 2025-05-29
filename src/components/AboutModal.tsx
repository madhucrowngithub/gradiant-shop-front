
import React from 'react';
import { X, Award, Users, Globe, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-black border border-red-500 rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold gradient-text">About ShopHub</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Company Description */}
          <div className="text-gray-300">
            <p className="mb-4">
              Welcome to ShopHub, your ultimate destination for premium shopping experiences. 
              Since our founding in 2020, we've been committed to revolutionizing online retail 
              by offering exceptional products, unmatched customer service, and innovative shopping solutions.
            </p>
            <p>
              Our mission is to make premium products accessible to everyone while maintaining 
              the highest standards of quality and customer satisfaction.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg text-center border border-red-500/20">
              <div className="text-2xl font-bold text-red-500">1M+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border border-red-500/20">
              <div className="text-2xl font-bold text-red-500">50K+</div>
              <div className="text-gray-400 text-sm">Products</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border border-red-500/20">
              <div className="text-2xl font-bold text-red-500">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg text-center border border-red-500/20">
              <div className="text-2xl font-bold text-red-500">4.9</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Quality First</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  We source only the finest products from trusted brands and suppliers.
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Customer Centric</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Your satisfaction is our top priority. We're here to serve you better.
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Global Reach</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Serving customers worldwide with fast and reliable shipping.
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Community</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Building a community of passionate shoppers and brand enthusiasts.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
            <h4 className="font-semibold text-white mb-3">Get in Touch</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p><strong>Address:</strong> 123 Shopping Street, Tech City, TC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> hello@shophub.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
