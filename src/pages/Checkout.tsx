
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center animate-bounce-in">
          <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Order Placed Successfully!</h2>
          <p className="text-gray-400 mb-4">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="gradient-bg py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Cart</span>
          </button>
          <h1 className="text-4xl font-bold gradient-text animate-bounce-in">Checkout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center space-x-4 mb-8 animate-fade-in">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNumber ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 ${step > stepNumber ? 'bg-red-600' : 'bg-gray-700'}`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            {step >= 1 && (
              <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20 animate-slide-up">
                <h2 className="text-xl font-bold mb-4 gradient-text">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div></div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                {step === 1 && (
                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary mt-4"
                  >
                    Continue to Shipping
                  </button>
                )}
              </div>
            )}

            {/* Shipping Address */}
            {step >= 2 && (
              <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20 animate-slide-up">
                <h2 className="text-xl font-bold mb-4 gradient-text">Shipping Address</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
                {step === 2 && (
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary mt-4"
                  >
                    Continue to Payment
                  </button>
                )}
              </div>
            )}

            {/* Payment Information */}
            {step >= 3 && (
              <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20 animate-slide-up">
                <h2 className="text-xl font-bold mb-4 gradient-text">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on card"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20 sticky top-4 animate-scale-in">
              <h2 className="text-xl font-bold mb-6 gradient-text">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm">{item.name}</p>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-white font-semibold">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 border-t border-red-500/20 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-red-500/20 pt-3">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-xl font-bold gradient-text">
                      ${(getTotalPrice() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {step === 3 && (
                <button
                  onClick={handlePlaceOrder}
                  className="btn-primary w-full"
                >
                  Place Order
                </button>
              )}

              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>SSL Secured Checkout</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Truck className="h-4 w-4 text-blue-500" />
                  <span>Free shipping on orders over $50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
