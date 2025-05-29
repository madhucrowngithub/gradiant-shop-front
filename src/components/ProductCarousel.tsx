
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
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 gradient-text text-center animate-bounce-in">
        {title}
      </h2>
      
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
              <div style={{ animationDelay: `${index * 0.1}s` }} className="animate-scale-in">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 bg-gray-900 border-red-500/30 text-white hover:bg-red-600 hover:border-red-500" />
        <CarouselNext className="hidden sm:flex -right-4 bg-gray-900 border-red-500/30 text-white hover:bg-red-600 hover:border-red-500" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
