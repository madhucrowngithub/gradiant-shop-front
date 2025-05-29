
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
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
          {products.map((product, index) => (
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
