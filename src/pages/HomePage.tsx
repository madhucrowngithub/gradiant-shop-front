import React from 'react';
import { ArrowRight, Star, Truck, Shield, Clock, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import PreLaunchNotification from '../components/PreLaunchNotification';

const HomePage = () => {
  const navigate = useNavigate();

  const trendingProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.5,
      reviews: 128,
      category: "Electronics",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199,
      image: "photo-1649972904349-6e44c42644a7",
      rating: 4.8,
      reviews: 256,
      category: "Wearables",
      isNew: true
    },
    {
      id: 3,
      name: "Professional Laptop Stand",
      price: 89,
      originalPrice: 120,
      image: "photo-1531297484001-80022131f5a1",
      rating: 4.6,
      reviews: 94,
      category: "Accessories",
      isSale: true
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 449,
      image: "photo-1721322800607-8c38375eef04",
      rating: 4.7,
      reviews: 87,
      category: "Furniture"
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      price: 159,
      originalPrice: 199,
      image: "photo-1486312338219-ce68d2c6f44d",
      rating: 4.9,
      reviews: 342,
      category: "Gaming",
      isSale: true
    },
    {
      id: 6,
      name: "4K Webcam Pro",
      price: 89,
      image: "photo-1526374965328-7f61d4dc18c5",
      rating: 4.4,
      reviews: 156,
      category: "Electronics",
      isNew: true
    }
  ];

  const featuredProducts = [
    {
      id: 7,
      name: "Smart Home Hub",
      price: 249,
      originalPrice: 299,
      image: "photo-1581091226825-a6a2a5aee158",
      rating: 4.6,
      reviews: 89,
      category: "Smart Home",
      isSale: true
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 49,
      image: "photo-1649972904349-6e44c42644a7",
      rating: 4.3,
      reviews: 234,
      category: "Accessories"
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      price: 79,
      originalPrice: 99,
      image: "photo-1488590528505-98d2b5aba04b",
      rating: 4.7,
      reviews: 167,
      category: "Audio",
      isSale: true
    },
    {
      id: 10,
      name: "Smart Light Bulbs (4-Pack)",
      price: 69,
      image: "photo-1531297484001-80022131f5a1",
      rating: 4.5,
      reviews: 203,
      category: "Smart Home",
      isNew: true
    }
  ];

  const offerCategories = [
    { name: "Electronics", discount: "Up to 50% OFF", image: "photo-1526374965328-7f61d4dc18c5" },
    { name: "Fashion", discount: "Buy 2 Get 1 Free", image: "photo-1581091226825-a6a2a5aee158" },
    { name: "Home & Garden", discount: "30% OFF", image: "photo-1721322800607-8c38375eef04" },
    { name: "Sports", discount: "25% OFF", image: "photo-1486312338219-ce68d2c6f44d" }
  ];

  const newLaunchProducts = [
    {
      id: 11,
      name: "AI-Powered Smart Speaker",
      price: 199,
      originalPrice: 249,
      image: "photo-1589003077984-894e133dabab",
      rating: 4.9,
      reviews: 45,
      category: "Smart Home",
      isNew: true,
      isSale: true
    },
    {
      id: 12,
      name: "Ultra-Fast Wireless Charger",
      price: 79,
      image: "photo-1558618666-fcd25c85cd64",
      rating: 4.7,
      reviews: 67,
      category: "Accessories",
      isNew: true
    },
    {
      id: 13,
      name: "Smart Fitness Tracker Pro",
      price: 129,
      originalPrice: 159,
      image: "photo-1575311373937-040b8e1fd5b6",
      rating: 4.8,
      reviews: 89,
      category: "Wearables",
      isNew: true,
      isSale: true
    },
    {
      id: 14,
      name: "Noise-Cancelling Earbuds",
      price: 149,
      image: "photo-1606220945770-b5b6c2c55bf1",
      rating: 4.6,
      reviews: 123,
      category: "Audio",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Background Animation */}
      <section className="relative gradient-bg-dark text-white py-20 overflow-hidden">
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
              Shop the <span className="text-white">Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-float-in">
              Discover amazing products with unbeatable prices and lightning-fast delivery
            </p>
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
                View Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Friendly Horizontal Scroll */}
      <section className="py-8 md:py-16 bg-white border-b border-red-100">
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

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden features-mobile">
            <div className="feature-item-mobile text-center feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-gray-900">Free Shipping</h3>
              <p className="text-xs text-red-600">On orders $50+</p>
            </div>
            <div className="feature-item-mobile text-center feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-gray-900">30-Day Returns</h3>
              <p className="text-xs text-red-600">Hassle-free</p>
            </div>
            <div className="feature-item-mobile text-center feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-gray-900">Fast Delivery</h3>
              <p className="text-xs text-red-600">Same-day</p>
            </div>
            <div className="feature-item-mobile text-center feature-card">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-gray-900">24/7 Support</h3>
              <p className="text-xs text-red-600">Always here</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Launches Section */}
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

      {/* Trending Products Carousel */}
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

      {/* Pre-Launch Notification Section */}
      <PreLaunchNotification />

      {/* Featured Products Carousel */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <ProductCarousel products={featuredProducts} title="Featured Collection" />
        </div>
      </section>

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
