
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCarousel from '../components/ProductCarousel';
import CategoryNavigation from '../components/CategoryNavigation';
import PreLaunchNotification from '../components/PreLaunchNotification';
import { Loader2 } from 'lucide-react';

const HomePage = () => {
  console.log('HomePage component rendering...');
  
  const { data: products, isLoading, error } = useProducts();
  
  console.log('Products data:', products);
  console.log('Is loading:', isLoading);
  console.log('Error:', error);

  if (isLoading) {
    console.log('Showing loading state');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-red-600" />
      </div>
    );
  }

  if (error) {
    console.log('Showing error state:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error loading products</h1>
          <p className="text-gray-600">Please try again later</p>
          <p className="text-sm text-red-500 mt-2">Error: {error?.message || 'Unknown error'}</p>
        </div>
      </div>
    );
  }

  const featuredProducts = products?.slice(0, 8) || [];
  const saleProducts = products?.filter(p => p.offers) || [];
  const newProducts = products?.filter(p => new Date(p.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) || [];

  console.log('Featured products:', featuredProducts.length);
  console.log('Sale products:', saleProducts.length);
  console.log('New products:', newProducts.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce-3d">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing products at unbeatable prices
          </p>
          <button 
            onClick={() => window.location.href = '/marketplace'}
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNavigation />

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <ProductCarousel 
          products={featuredProducts} 
          title="Featured Products" 
        />
      </section>

      {/* Sale Products */}
      {saleProducts.length > 0 && (
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <ProductCarousel 
              products={saleProducts} 
              title="🔥 Hot Deals" 
            />
          </div>
        </section>
      )}

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="py-16 container mx-auto px-4">
          <ProductCarousel 
            products={newProducts} 
            title="✨ New Arrivals" 
          />
        </section>
      )}

      {/* Pre-launch notification section */}
      <PreLaunchNotification />
    </div>
  );
};

export default HomePage;
