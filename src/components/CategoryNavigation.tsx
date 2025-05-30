
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Shirt, Home, Dumbbell, Book, Sparkles, Car, Heart } from 'lucide-react';

const CategoryNavigation = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
    { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-pink-600' },
    { name: 'Home & Garden', icon: Home, color: 'from-green-500 to-green-600' },
    { name: 'Sports', icon: Dumbbell, color: 'from-orange-500 to-orange-600' },
    { name: 'Books', icon: Book, color: 'from-purple-500 to-purple-600' },
    { name: 'Beauty', icon: Sparkles, color: 'from-red-500 to-red-600' },
    { name: 'Automotive', icon: Car, color: 'from-gray-500 to-gray-600' },
    { name: 'Health', icon: Heart, color: 'from-teal-500 to-teal-600' }
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
        
        {/* Horizontal Scrollable Categories */}
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer snap-start animate-float-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Button */}
                <div className={`bg-gradient-to-r ${category.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl mb-3 card-3d`}>
                  <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                
                {/* Category Name */}
                <h3 className="text-center font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm md:text-base whitespace-nowrap">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
