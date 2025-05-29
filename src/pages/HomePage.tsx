
import React from 'react';
import { ArrowRight, Star, Truck, Shield, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

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
    }
  ];

  const offerCategories = [
    { name: "Electronics", discount: "Up to 50% OFF", image: "photo-1526374965328-7f61d4dc18c5" },
    { name: "Fashion", discount: "Buy 2 Get 1 Free", image: "photo-1581091226825-a6a2a5aee158" },
    { name: "Home & Garden", discount: "30% OFF", image: "photo-1721322800607-8c38375eef04" },
    { name: "Sports", discount: "25% OFF", image: "photo-1486312338219-ce68d2c6f44d" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-red-900/30"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-in">
              Shop the <span className="gradient-text">Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Discover amazing products with unbeatable prices and lightning-fast delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button 
                onClick={() => navigate('/marketplace')}
                className="btn-primary"
              >
                Shop Now <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => navigate('/marketplace')}
                className="btn-secondary"
              >
                View Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Free Shipping</h3>
              <p className="text-gray-400">On orders over $50</p>
            </div>
            <div className="text-center group animate-fade-in">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">30-Day Returns</h3>
              <p className="text-gray-400">Hassle-free returns</p>
            </div>
            <div className="text-center group animate-fade-in">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Fast Delivery</h3>
              <p className="text-gray-400">Same-day delivery available</p>
            </div>
            <div className="text-center group animate-fade-in">
              <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">24/7 Support</h3>
              <p className="text-gray-400">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">
              Trending Products
            </h2>
            <p className="text-gray-400 text-lg">Discover what's popular this week</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trendingProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/marketplace')}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-red-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">
              Special Offers
            </h2>
            <p className="text-gray-400 text-lg">Limited time deals you can't miss</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl shadow-xl card-hover overflow-hidden cursor-pointer group border border-red-500/20 animate-fade-in"
                onClick={() => navigate('/marketplace')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${category.image}?w=400&h=200&fit=crop`}
                    alt={category.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-red-400">{category.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text animate-bounce-in">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review, index) => (
              <div 
                key={review} 
                className="bg-black p-6 rounded-xl border border-red-500/20 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "Amazing quality and fast shipping! I'm extremely satisfied with my purchase."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-white">John Doe</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
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
