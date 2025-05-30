
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device
                when you visit our website. They are widely used to make websites work more
                efficiently and provide information to website owners.
              </p>
              <p>
                Cookies allow us to recognize you and remember your preferences when you return
                to our website, making your shopping experience more personalized and efficient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable
                    you to navigate the website and use its features, such as accessing secure
                    areas and making purchases.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how visitors use our website, such as
                    which pages are visited most often. This helps us improve the website's performance
                    and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                  <p>
                    These cookies remember your preferences and choices to provide a more personalized
                    experience, such as your language preference or region.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p>
                    These cookies track your browsing habits to show you relevant advertisements
                    and measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="mb-4">
                We may also use third-party cookies from our partners and service providers, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Google Analytics for website performance analysis</li>
                <li>Payment processors for secure transactions</li>
                <li>Social media platforms for sharing features</li>
                <li>Advertising networks for targeted advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Cookie preferences: Use our cookie banner to customize your preferences</li>
                <li>Third-party opt-out: Visit third-party websites to opt out of their cookies</li>
                <li>Clear cookies: Delete existing cookies through your browser settings</li>
              </ul>
              <p className="mt-4">
                Please note that disabling certain cookies may affect the functionality of our website
                and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="mb-4">
                The length of time cookies remain on your device depends on their type:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Session cookies: Deleted when you close your browser</li>
                <li>Persistent cookies: Remain until they expire or you delete them</li>
                <li>Third-party cookies: Managed by the respective third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our
                practices or applicable laws. We will notify you of any significant changes
                by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy,
                please contact us at cookies@shophub.com or call us at (555) 123-4567.
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

export default CookiePolicy;
