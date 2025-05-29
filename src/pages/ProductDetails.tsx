
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: parseInt(id || '1'),
    name: "Premium Wireless Headphones Pro Max",
    price: 299,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 256,
    category: "Electronics",
    brand: "TechPro",
    inStock: true,
    description: "Experience premium sound quality with our latest wireless headphones featuring advanced noise cancellation, 30-hour battery life, and crystal-clear audio.",
    features: [
      "Advanced Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge: 5 min = 3 hours",
      "Premium comfort design",
      "Multi-device connectivity"
    ],
    specifications: {
      "Weight": "250g",
      "Battery": "30 hours",
      "Connectivity": "Bluetooth 5.2",
      "Frequency Response": "20Hz - 20kHz",
      "Warranty": "2 years"
    }
  };

  const reviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2024-01-15",
      comment: "Amazing sound quality! The noise cancellation is incredible.",
      verified: true
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2024-01-10",
      comment: "Great headphones, very comfortable for long listening sessions.",
      verified: true
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      date: "2024-01-05",
      comment: "Worth every penny! Battery life is exactly as advertised.",
      verified: true
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        image: product.images[0]
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <button onClick={() => navigate('/')} className="hover:text-red-500 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/marketplace')} className="hover:text-red-500 transition-colors">Electronics</button>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4 animate-fade-in">
            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-red-500/20">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-900 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-red-500' : 'border-red-500/20 hover:border-red-500/50'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <p className="text-red-400 text-sm mb-2">{product.category} • {product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-white font-semibold">{product.rating}</span>
                <span className="ml-2 text-gray-400">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-white">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Quantity:</span>
              <div className="flex items-center border border-red-500/30 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-red-600 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-white font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-red-600 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b border-red-500/20">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-red-500" />
                <div>
                  <p className="font-semibold text-white">Free Shipping</p>
                  <p className="text-sm text-gray-400">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-red-500" />
                <div>
                  <p className="font-semibold text-white">30-Day Returns</p>
                  <p className="text-sm text-gray-400">Hassle-free returns</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-red-500" />
                <div>
                  <p className="font-semibold text-white">2-Year Warranty</p>
                  <p className="text-sm text-gray-400">Manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-gray-900 rounded-xl border border-red-500/20 animate-fade-in">
          <div className="flex border-b border-red-500/20">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="font-semibold text-white">{key}:</span>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">Customer Reviews</h4>
                  <button className="btn-primary">Write a Review</button>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-black p-4 rounded-lg border border-red-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-white">{review.user}</span>
                          {review.verified && (
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
