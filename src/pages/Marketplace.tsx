
import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Slider } from '@/components/ui/slider';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All Categories',
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
    'Beauty',
    'Automotive'
  ];

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 200) + 600,
    image: `photo-${['1486312338219-ce68d2c6f44d', '1649972904349-6e44c42644a7', '1531297484001-80022131f5a1'][i % 3]}`,
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 500) + 20,
    category: categories[Math.floor(Math.random() * categories.length)],
    isNew: Math.random() > 0.7,
    isSale: Math.random() > 0.6
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Offer Banner Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text animate-bounce-in">
              🔥 MEGA SALE 🔥
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-fade-in">
              Up to 70% OFF on Electronics & Fashion
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold">Electronics 50% OFF</span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold">Fashion 60% OFF</span>
              <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold">Home 40% OFF</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-lg animate-fade-in">
              <h3 className="text-lg font-semibold mb-4 gradient-text">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.toLowerCase()}
                        checked={selectedCategory === category.toLowerCase()}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-red-500 focus:ring-red-500"
                      />
                      <span className="text-gray-700 hover:text-red-600 transition-colors">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="text-red-500 focus:ring-red-500" />
                      <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-red-500 fill-current" />
                        ))}
                        <span className="ml-2 text-gray-700 text-sm">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Showing 1-12 of 1,234 results</span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white text-gray-900 border-2 border-red-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode */}
                <div className="flex border-2 border-red-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'} hover:text-red-600 transition-colors`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'} hover:text-red-600 transition-colors`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      page === 1 ? 'bg-red-600 text-white' : 'bg-white border-2 border-red-200 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
