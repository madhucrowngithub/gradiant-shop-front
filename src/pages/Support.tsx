
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, ChevronDown, Search } from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'Orders' section. You'll also receive tracking information via email once your order ships."
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Returns are free for orders over $50. Please contact our support team to initiate a return."
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping is available on orders over $50."
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by location."
    },
    {
      id: 5,
      question: "How can I change or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, please contact our support team for assistance."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Customer Support
            </h1>
            <p className="text-gray-600 text-lg">We're here to help you 24/7</p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us directly</p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Call Now
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email</p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Send Email
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-purple-600" />
              <div className="text-center">
                <h3 className="font-semibold text-lg">Support Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9 AM - 8 PM EST</p>
                <p className="text-gray-600">Saturday - Sunday: 10 AM - 6 PM EST</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'faq' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'contact' 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Contact Form
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'faq' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  
                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform ${
                              expandedFaq === faq.id ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Order Issue</option>
                        <option>Product Question</option>
                        <option>Shipping Inquiry</option>
                        <option>Return Request</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Please describe your issue or question..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
