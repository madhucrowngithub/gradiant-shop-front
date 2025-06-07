import React from 'react';
import { ArrowRight, Star, Truck, Shield, Clock, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import PreLaunchNotification from '../components/PreLaunchNotification';
import CategoryNavigation from '../components/CategoryNavigation';
import { useProducts } from '../hooks/useProducts';

const HomePage = () => {
  const navigate = useNavigate();
  const { data: products = [], isLoading, error } = useProducts();

  // Filter products for different sections
  const trendingProducts = products.slice(0, 6);
  const featuredProducts = products.slice(6, 10);
  const newLaunchProducts = products.slice(10, 14);

  const offerCategories = [
    { name: "Electronics", discount: "Up to 50% OFF", image: "photo-1526374965328-7f61d4dc18c5" },
    { name: "Fashion", discount: "Buy 2 Get 1 Free", image: "photo-1581091226825-a6a2a5aee158" },
    { name: "Home & Garden", discount: "30% OFF", image: "photo-1721322800607-8c38375eef04" },
    { name: "Sports", discount: "25% OFF", image: "photo-1486312338219-ce68d2c6f44d" }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-red-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error loading products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Offer Banner Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-600"></div>
          {/* Multiple animated background elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-white/8 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-3d">
              🔥 <span className="text-white">MEGA SALE</span> 🔥
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 animate-float-in">
              Up to 70% OFF on Electronics, Fashion & More!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg">
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold animate-bounce">Electronics 50% OFF</span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold animate-bounce" style={{ animationDelay: '0.2s' }}>Fashion 60% OFF</span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold animate-bounce" style={{ animationDelay: '0.4s' }}>Home 40% OFF</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-3d">
              <button 
                onClick={() => navigate('/marketplace')}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:scale-105 transform shadow-lg"
              >
                Shop Now <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => navigate('/marketplace')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 transform"
              >
                View All Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Section */}
      <CategoryNavigation />

      {/* Features Section - Responsive Mobile View */}
      <section className="py-6 md:py-12 bg-white border-b border-red-100">
        <div className="container mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group animate-float-in feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-modern">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Free Shipping</h3>
              <p className="text-red-600">On orders over $50</p>
            </div>
            <div className="text-center group animate-float-in feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-modern">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">30-Day Returns</h3>
              <p className="text-red-600">Hassle-free returns</p>
            </div>
            <div className="text-center group animate-float-in feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-modern">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-red-600">Same-day delivery available</p>
            </div>
            <div className="text-center group animate-float-in feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-modern">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">24/7 Support</h3>
              <p className="text-red-600">We're here to help</p>
            </div>
          </div>

          {/* Mobile Horizontal Layout - Responsive */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-red-50 p-3 rounded-lg border border-red-200">
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">Free Shipping</h3>
                <p className="text-xs text-red-600">Orders $50+</p>
              </div>
              <div className="text-center bg-red-50 p-3 rounded-lg border border-red-200">
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1 text-gray-900">30-Day Returns</h3>
                <p className="text-xs text-red-600">Hassle-free</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Launches Section */}
      {newLaunchProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-red-600 mr-3 animate-rotate-3d" />
                <h2 className="text-4xl font-bold gradient-text animate-bounce-3d">
                  New Launches
                </h2>
                <Sparkles className="h-8 w-8 text-red-600 ml-3 animate-rotate-3d" />
              </div>
              <p className="text-red-600 text-lg font-medium">Fresh arrivals just for you!</p>
            </div>
            <ProductCarousel products={newLaunchProducts} title="" />
            
            <div className="text-center mt-8">
              <button 
                onClick={() => navigate('/marketplace')}
                className="btn-primary text-lg px-8 py-4"
              >
                Explore All New Products
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Trending Products Carousel */}
      {trendingProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ProductCarousel products={trendingProducts} title="Trending Products" />
            
            <div className="text-center mt-8">
              <button 
                onClick={() => navigate('/marketplace')}
                className="btn-primary"
              >
                View All Products
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Pre-Launch Notification Section */}
      <PreLaunchNotification />

      {/* Featured Products Carousel */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <ProductCarousel products={featuredProducts} title="Featured Collection" />
          </div>
        </section>
      )}

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-br from-white via-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text animate-bounce-3d">
              Special Offers
            </h2>
            <p className="text-red-600 text-lg mt-2 font-medium">Limited time deals you can't miss</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg card-hover overflow-hidden cursor-pointer group border border-red-200 animate-float-in"
                onClick={() => navigate('/marketplace')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${category.image}?w=400&h=200&fit=crop`}
                    alt={category.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-red-200">{category.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text animate-bounce-3d">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review, index) => (
              <div 
                key={review} 
                className="bg-red-50 p-6 rounded-xl border border-red-200 card-hover animate-float-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Amazing quality and fast shipping! I'm extremely satisfied with my purchase."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">John Doe</p>
                    <p className="text-sm text-red-600">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
