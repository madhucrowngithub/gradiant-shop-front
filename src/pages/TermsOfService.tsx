
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-red-200 p-8">
          <h1 className="text-4xl font-bold gradient-text mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using ShopHub, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on
                ShopHub's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be 18 years or older to use this service</li>
                <li>You must provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must not use the service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products and Services</h2>
              <p className="mb-4">
                All products and services are subject to availability. We reserve the right to
                discontinue any product or service at any time without notice.
              </p>
              <p>
                Prices for our products are subject to change without notice. We reserve the
                right to modify or discontinue promotions at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment is due at the time of purchase</li>
                <li>We accept major credit cards and PayPal</li>
                <li>All prices are in USD unless otherwise stated</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping and Returns</h2>
              <p className="mb-4">
                We offer free shipping on orders over $50. Standard shipping takes 3-7 business days.
                Returns are accepted within 30 days of purchase with original receipt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall ShopHub or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on ShopHub's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at
                legal@shophub.com or call us at (555) 123-4567.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
