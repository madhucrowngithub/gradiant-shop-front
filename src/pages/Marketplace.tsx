
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
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
      image: "photo-1526374965328-7f61d4dc18c5",
      rating: 4.4,
      reviews: 203,
      category: "Electronics"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 79,
      originalPrice: 99,
      image: "photo-1581091226825-a6a2a5aee158",
      rating: 4.3,
      reviews: 156,
      category: "Electronics",
      isSale: true
    }
  ];

  const categories = ['all', 'Electronics', 'Wearables', 'Accessories', 'Furniture'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Marketplace
          </h1>
          <p className="text-gray-600">Discover amazing products from top brands</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
