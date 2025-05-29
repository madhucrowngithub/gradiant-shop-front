
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and clicking on 'Order History'. You'll also receive tracking information via email once your order ships."
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply for certain products."
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping is available on orders over $50."
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination."
    },
    {
      id: 5,
      question: "How can I change or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placement. After that, please contact our customer service team for assistance."
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      detail: "Available 24/7",
      action: "Start Chat",
      color: "green"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly",
      detail: "+1 (555) 123-4567",
      action: "Call Now",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email",
      detail: "support@shophub.com",
      action: "Send Email",
      color: "red"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-bounce-in">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            We're here to support you every step of the way
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative animate-slide-up">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-xl px-6 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text animate-bounce-in">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClasses = {
                green: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
                blue: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
                red: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
              };
              
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 border border-red-500/20 text-center card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{method.title}</h3>
                  <p className="text-gray-400 mb-2">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.detail}</p>
                  <button className={`btn-primary bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} border-none`}>
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text animate-bounce-in">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-900 rounded-xl border border-red-500/20 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-red-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-500" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4 animate-slide-up">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQ found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="btn-secondary mt-4"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* Operating Hours */}
        <section className="mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border border-red-500/20 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold gradient-text">Support Hours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400">24/7 Available</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400">Mon-Fri: 9 AM - 8 PM EST</p>
                <p className="text-gray-400">Sat-Sun: 10 AM - 6 PM EST</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-400">24-48 hours response time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text animate-bounce-in">
            Send Us a Message
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="bg-gray-900 rounded-xl p-8 border border-red-500/20 animate-scale-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select Topic</option>
                  <option value="order">Order Issue</option>
                  <option value="product">Product Question</option>
                  <option value="return">Return/Refund</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 mb-6"
              />
              
              <textarea
                placeholder="Describe your issue or question..."
                rows={6}
                className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 mb-6"
              ></textarea>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
