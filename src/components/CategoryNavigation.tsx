
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Shirt, Home, Dumbbell, Book, Sparkles, Car, Heart } from 'lucide-react';

const CategoryNavigation = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-blue-600', image: 'photo-1526374965328-7f61d4dc18c5' },
    { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-pink-600', image: 'photo-1581091226825-a6a2a5aee158' },
    { name: 'Home & Garden', icon: Home, color: 'from-green-500 to-green-600', image: 'photo-1721322800607-8c38375eef04' },
    { name: 'Sports', icon: Dumbbell, color: 'from-orange-500 to-orange-600', image: 'photo-1486312338219-ce68d2c6f44d' },
    { name: 'Books', icon: Book, color: 'from-purple-500 to-purple-600', image: 'photo-1531297484001-80022131f5a1' },
    { name: 'Beauty', icon: Sparkles, color: 'from-red-500 to-red-600', image: 'photo-1649972904349-6e44c42644a7' },
    { name: 'Automotive', icon: Car, color: 'from-gray-500 to-gray-600', image: 'photo-1488590528505-98d2b5aba04b' },
    { name: 'Health', icon: Heart, color: 'from-teal-500 to-teal-600', image: 'photo-1589003077984-894e133dabab' }
  ];

  const handleCategoryClick = (category: string) => {
    navigate(`/marketplace?category=${category.toLowerCase()}`);
  };

  return (
    <section className="py-8 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text animate-bounce-3d">
          Shop by Category
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-100 hover:border-red-300 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-float-in card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-center font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex-shrink-0 w-24 text-center cursor-pointer snap-start animate-float-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 transition-transform hover:scale-110`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-medium text-gray-900 text-center px-1">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
