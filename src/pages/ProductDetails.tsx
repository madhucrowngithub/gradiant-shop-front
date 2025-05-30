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
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

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

  const handleSubmitReview = () => {
    if (reviewText.trim()) {
      console.log('Review submitted:', { rating: reviewRating, comment: reviewText });
      setReviewText('');
      setReviewRating(5);
      alert('Thank you for your review!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-red-600 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/marketplace')} className="hover:text-red-600 transition-colors">Electronics</button>
            <span>/</span>
            <span className="text-red-600 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4 animate-fade-in">
            <div className="aspect-square bg-white rounded-xl overflow-hidden border-2 border-red-200 shadow-lg">
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
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-red-500' : 'border-red-200 hover:border-red-400'
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
              <p className="text-red-600 text-sm mb-2 font-medium">{product.category} • {product.brand}</p>
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
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-900 font-semibold">{product.rating}</span>
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 font-semibold">Quantity:</span>
              <div className="flex items-center border border-red-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-red-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-gray-900 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-red-100 transition-colors"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b border-red-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Hassle-free returns</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">2-Year Warranty</p>
                  <p className="text-sm text-gray-600">Manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl border border-red-200 shadow-lg animate-fade-in">
          <div className="flex border-b border-red-200">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-900">Customer Reviews</h4>
                </div>

                {/* Write Review Section */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-gray-900 mb-3">Write a Review</h5>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setReviewRating(star)}
                            className={`h-6 w-6 ${
                              star <= reviewRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          >
                            <Star className="h-6 w-6" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                      <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows={4}
                        placeholder="Share your experience with this product..."
                      />
                    </div>
                    <button
                      onClick={handleSubmitReview}
                      className="btn-primary"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>

                {/* Existing Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">{review.user}</span>
                          {review.verified && (
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                          )}
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < review.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
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
