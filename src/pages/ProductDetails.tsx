
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    images: [
      "photo-1488590528505-98d2b5aba04b",
      "photo-1649972904349-6e44c42644a7",
      "photo-1531297484001-80022131f5a1"
    ],
    rating: 4.5,
    reviews: 128,
    category: "Electronics",
    brand: "TechPro",
    inStock: true,
    description: "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge: 5 minutes = 3 hours",
      "Premium comfort design",
      "Bluetooth 5.0 connectivity"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely amazing headphones! The sound quality is incredible and the noise cancellation works perfectly.",
      helpful: 12
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      date: "2024-01-10",
      comment: "Great value for money. Very comfortable for long listening sessions.",
      helpful: 8
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      date: "2024-01-05",
      comment: "Best purchase I've made this year. Highly recommended!",
      helpful: 15
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={`https://images.unsplash.com/${product.images[selectedImage]}?w=600&h=400&fit=crop`}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={`https://images.unsplash.com/${image}?w=100&h=100&fit=crop`}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">{product.brand} • {product.category}</p>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                
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
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                    25% OFF
                  </span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="h-5 w-5" />
                  </button>
                  
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm">2 Year Warranty</span>
                  </div>
                  <div className="flex items-center">
                    <RotateCcw className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-sm">30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              {['description', 'features', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium capitalize ${
                    activeTab === tab 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {tab === 'reviews' && ` (${reviews.length})`}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold">{review.name}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
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
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">
                          {review.helpful} people found this helpful
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add Review Button */}
                  <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Write a Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
