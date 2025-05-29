
import React from 'react';
import { X, Phone, Mail, Clock, MessageCircle, Video, FileText } from 'lucide-react';

interface CustomerCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomerCareModal: React.FC<CustomerCareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-black border border-red-500 rounded-xl p-6 w-full max-w-md mx-4 animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold gradient-text">Customer Care</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Contact Options */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20 hover:border-red-500/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  <p className="text-red-500 text-xs">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20 hover:border-red-500/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email Support</h3>
                  <p className="text-gray-400 text-sm">support@shophub.com</p>
                  <p className="text-red-500 text-xs">Response within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20 hover:border-red-500/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Live Chat</h3>
                  <p className="text-gray-400 text-sm">Instant messaging support</p>
                  <p className="text-red-500 text-xs">Available 9 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-gray-800">
            <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-gray-900 p-3 rounded-lg text-white hover:bg-red-600 transition-colors text-sm">
                <FileText className="h-4 w-4 mx-auto mb-1" />
                Track Order
              </button>
              <button className="bg-gray-900 p-3 rounded-lg text-white hover:bg-red-600 transition-colors text-sm">
                <Video className="h-4 w-4 mx-auto mb-1" />
                Video Call
              </button>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5 text-red-500" />
              <h4 className="font-semibold text-white">Business Hours</h4>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCareModal;
