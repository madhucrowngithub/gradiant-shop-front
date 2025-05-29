
import React, { useState } from 'react';
import { User, Package, Heart, Settings, MapPin, Phone, Mail, Edit, Camera } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const orders = [
    {
      id: '12345',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299.99,
      items: ['Premium Wireless Headphones', 'Phone Case']
    },
    {
      id: '12344',
      date: '2024-01-10',
      status: 'Shipped',
      total: 89.99,
      items: ['Laptop Stand']
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Smart Watch Pro',
      price: 399,
      image: 'photo-1649972904349-6e44c42644a7'
    },
    {
      id: 2,
      name: 'Gaming Keyboard',
      price: 129,
      image: 'photo-1486312338219-ce68d2c6f44d'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="gradient-bg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold gradient-text animate-bounce-in">My Account</h1>
          <p className="text-gray-300 mt-2">Manage your profile and preferences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl border border-red-500/20 p-6 animate-fade-in">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 bg-red-600 rounded-full p-1 hover:bg-red-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="font-semibold text-white">John Doe</h3>
                <p className="text-gray-400 text-sm">john.doe@email.com</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl border border-red-500/20 p-6 animate-slide-up">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold gradient-text">Personal Information</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <Edit className="h-4 w-4" />
                      <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">First Name</label>
                      <input
                        type="text"
                        value="John"
                        disabled={!isEditing}
                        className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        value="Doe"
                        disabled={!isEditing}
                        className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        value="john.doe@email.com"
                        disabled={!isEditing}
                        className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">Phone</label>
                      <input
                        type="tel"
                        value="+1 (555) 123-4567"
                        disabled={!isEditing}
                        className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-400 mb-2">Address</label>
                      <textarea
                        value="123 Main Street, City, State 12345"
                        disabled={!isEditing}
                        rows={3}
                        className="w-full bg-black border border-red-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 flex space-x-4">
                      <button className="btn-primary">Save Changes</button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="bg-black p-6 rounded-lg border border-red-500/20">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                          <div>
                            <h3 className="font-semibold text-white">Order #{order.id}</h3>
                            <p className="text-gray-400 text-sm">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === 'Delivered' 
                                ? 'bg-green-600 text-white' 
                                : 'bg-blue-600 text-white'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-400 text-sm mb-1">Items:</p>
                            <p className="text-white">{order.items.join(', ')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">Total</p>
                            <p className="text-xl font-bold gradient-text">${order.total}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-6">My Wishlist</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="bg-black rounded-lg border border-red-500/20 overflow-hidden card-hover">
                        <img
                          src={`https://images.unsplash.com/${item.image}?w=300&h=200&fit=crop`}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-red-400 font-bold text-lg mb-3">${item.price}</p>
                          <div className="flex space-x-2">
                            <button className="btn-primary flex-1 text-sm">Add to Cart</button>
                            <button className="btn-secondary text-sm">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="bg-black p-6 rounded-lg border border-red-500/20">
                      <h3 className="font-semibold text-white mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <label className="flex items-center justify-between">
                          <span className="text-gray-300">Email notifications</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-gray-300">SMS notifications</span>
                          <input type="checkbox" className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-gray-300">Push notifications</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                      </div>
                    </div>

                    <div className="bg-black p-6 rounded-lg border border-red-500/20">
                      <h3 className="font-semibold text-white mb-4">Security</h3>
                      <div className="space-y-4">
                        <button className="btn-secondary w-full text-left">Change Password</button>
                        <button className="btn-secondary w-full text-left">Enable Two-Factor Authentication</button>
                        <button className="btn-secondary w-full text-left">Download My Data</button>
                      </div>
                    </div>

                    <div className="bg-black p-6 rounded-lg border border-red-500/20">
                      <h3 className="font-semibold text-white mb-4">Account Actions</h3>
                      <div className="space-y-4">
                        <button className="text-red-500 hover:text-red-400 transition-colors">Deactivate Account</button>
                        <button className="text-red-500 hover:text-red-400 transition-colors">Delete Account</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
