
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';
import { Product } from '../services/api';

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  // Transform API products to ProductCard format
  const transformedProducts = products.map(product => ({
    id: parseInt(product.id),
    name: product.name,
    price: product.price,
    originalPrice: product.offers ? product.price / (1 - product.offers.discountPercentage / 100) : undefined,
    image: product.imageUrls[0] || 'photo-1486312338219-ce68d2c6f44d',
    rating: product.reviews.length > 0 ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length : 0,
    reviews: product.reviews.length,
    category: product.category,
    isNew: new Date(product.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    isSale: !!product.offers
  }));

  return (
    <div className="animate-float-in scroll-3d">
      {title && (
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center animate-bounce-3d">
          {title}
        </h2>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {transformedProducts.map((product, index) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div 
                style={{ animationDelay: `${index * 0.1}s` }} 
                className="animate-slide-3d parallax-scroll"
              >
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 bg-white border-2 border-red-300 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-lg" />
        <CarouselNext className="hidden sm:flex -right-4 bg-white border-2 border-red-300 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-lg" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
