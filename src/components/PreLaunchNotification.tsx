
import React, { useState, useEffect } from 'react';
import { Clock, Bell, Star, Gift } from 'lucide-react';

const PreLaunchNotification = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set target date (7 days from now for demo)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Gift className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-bounce-in">
            Exclusive Product Launch
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Be the first to experience our revolutionary new product line. 
            Get notified when we launch and enjoy exclusive early-bird discounts!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 animate-scale-in">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Crafted with the finest materials and cutting-edge technology</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Gift className="h-8 w-8 text-red-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Early Bird Offer</h3>
              <p className="text-gray-400 text-sm">Get up to 40% off when you pre-order before launch</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Bell className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Limited Edition</h3>
              <p className="text-gray-400 text-sm">Only 1000 units available in the first batch</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Clock className="h-6 w-6 mr-2 text-red-500" />
              Launch Countdown
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 animate-pulse-glow">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{timeLeft.days}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Days</div>
              </div>
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 animate-pulse-glow">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{timeLeft.hours}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Hours</div>
              </div>
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 animate-pulse-glow">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{timeLeft.minutes}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Minutes</div>
              </div>
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-red-500/30 animate-pulse-glow">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{timeLeft.seconds}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Seconds</div>
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="animate-slide-up">
                <h3 className="text-xl font-bold text-white mb-4">Get Notified First!</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  We'll never spam you. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6 animate-bounce-in">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-green-600 rounded-full p-2">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">You're All Set!</h3>
                <p className="text-green-300">
                  We'll notify you as soon as the product launches. Get ready for something amazing!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLaunchNotification;
