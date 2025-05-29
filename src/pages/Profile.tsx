
import React, { useState } from 'react';
import { User, Package, Heart, Settings, Edit, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    avatar: "JD",
    memberSince: "January 2023",
    totalOrders: 24,
    totalSpent: 3250
  };

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: 299,
      status: "Delivered",
      items: 2
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      total: 159,
      status: "Shipped",
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      total: 89,
      status: "Processing",
      items: 1
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Smart Home Speaker",
      price: 199,
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      price: 49,
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.avatar}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-600 mb-2">Member since {user.memberSince}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{user.totalOrders} Orders</span>
                  <span>•</span>
                  <span>${user.totalSpent} Total Spent</span>
                </div>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <nav className="p-2">
                  {[
                    { id: 'overview', label: 'Overview', icon: User },
                    { id: 'orders', label: 'Orders', icon: Package },
                    { id: 'wishlist', label: 'Wishlist', icon: Heart },
                    { id: 'settings', label: 'Settings', icon: Settings }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === item.id 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-8">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Profile Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg mb-2">Total Orders</h3>
                        <p className="text-3xl font-bold text-purple-600">{user.totalOrders}</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg mb-2">Total Spent</h3>
                        <p className="text-3xl font-bold text-blue-600">${user.totalSpent}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3 md:col-span-2">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <span>{user.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Order History</h2>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.total}</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                          <img
                            src={`https://images.unsplash.com/${item.image}?w=200&h=150&fit=crop`}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <p className="text-lg font-bold text-purple-600 mb-4">${item.price}</p>
                          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                            Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span>Email notifications for order updates</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span>SMS notifications for shipping</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" />
                            <span>Marketing emails</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Privacy</h3>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span>Make profile public</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span>Allow data collection for recommendations</span>
                          </label>
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
    </div>
  );
};

export default Profile;
