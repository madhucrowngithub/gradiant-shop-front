
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrls: string[];
  offers?: {
    discountPercentage: number;
    startDate: string;
    endDate: string;
    description: string;
  };
  reviews: {
    userId: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  stockQuantity: number;
  createdAt: string;
  updatedAt: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    category: "Electronics",
    imageUrls: ["photo-1505740420928-5e560c06d30e"],
    offers: {
      discountPercentage: 20,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      description: "20% off for limited time"
    },
    reviews: [
      {
        userId: "user1",
        rating: 5,
        comment: "Excellent sound quality!",
        date: "2024-01-15"
      }
    ],
    stockQuantity: 50,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    name: "Stylish Winter Coat",
    description: "Warm and fashionable winter coat for cold weather",
    price: 189.99,
    category: "Fashion",
    imageUrls: ["photo-1551028719-00167b16eac5"],
    reviews: [
      {
        userId: "user2",
        rating: 4,
        comment: "Very warm and comfortable",
        date: "2024-01-10"
      }
    ],
    stockQuantity: 25,
    createdAt: "2024-01-02T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z"
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with AI assistant",
    price: 99.99,
    category: "Electronics",
    imageUrls: ["photo-1543512214-318c7553f230"],
    offers: {
      discountPercentage: 15,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      description: "15% off smart home devices"
    },
    reviews: [
      {
        userId: "user3",
        rating: 4,
        comment: "Great sound and smart features",
        date: "2024-01-12"
      }
    ],
    stockQuantity: 100,
    createdAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-03T00:00:00Z"
  },
  {
    id: "4",
    name: "Professional Camera",
    description: "High-resolution digital camera for photography enthusiasts",
    price: 899.99,
    category: "Electronics",
    imageUrls: ["photo-1502920917128-1aa500764cbd"],
    reviews: [
      {
        userId: "user4",
        rating: 5,
        comment: "Amazing image quality!",
        date: "2024-01-08"
      }
    ],
    stockQuantity: 15,
    createdAt: "2024-01-04T00:00:00Z",
    updatedAt: "2024-01-04T00:00:00Z"
  },
  {
    id: "5",
    name: "Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring",
    price: 149.99,
    category: "Sports",
    imageUrls: ["photo-1544117519-31a4b719223d"],
    offers: {
      discountPercentage: 25,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      description: "25% off fitness accessories"
    },
    reviews: [
      {
        userId: "user5",
        rating: 4,
        comment: "Great for tracking workouts",
        date: "2024-01-06"
      }
    ],
    stockQuantity: 75,
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z"
  },
  {
    id: "6",
    name: "Designer Handbag",
    description: "Elegant leather handbag perfect for any occasion",
    price: 259.99,
    category: "Fashion",
    imageUrls: ["photo-1553062407-98eeb64c6a62"],
    reviews: [
      {
        userId: "user6",
        rating: 5,
        comment: "Beautiful design and quality",
        date: "2024-01-04"
      }
    ],
    stockQuantity: 30,
    createdAt: "2024-01-06T00:00:00Z",
    updatedAt: "2024-01-06T00:00:00Z"
  },
  {
    id: "7",
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with powerful graphics",
    price: 1299.99,
    category: "Electronics",
    imageUrls: ["photo-1603302576837-37561b2e2302"],
    offers: {
      discountPercentage: 10,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      description: "10% off gaming laptops"
    },
    reviews: [
      {
        userId: "user7",
        rating: 5,
        comment: "Incredible gaming performance!",
        date: "2024-01-02"
      }
    ],
    stockQuantity: 20,
    createdAt: "2024-01-07T00:00:00Z",
    updatedAt: "2024-01-07T00:00:00Z"
  },
  {
    id: "8",
    name: "Organic Skincare Set",
    description: "Natural skincare products for healthy glowing skin",
    price: 79.99,
    category: "Beauty",
    imageUrls: ["photo-1556228578-dd6e4b90e4c5"],
    reviews: [
      {
        userId: "user8",
        rating: 4,
        comment: "Love the natural ingredients",
        date: "2024-01-01"
      }
    ],
    stockQuantity: 60,
    createdAt: "2024-01-08T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z"
  }
];

// Mock API functions
export const mockProductsApi = {
  getAll: async (): Promise<Product[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Mock API: Returning', mockProducts.length, 'products');
    return mockProducts;
  },

  getById: async (id: string): Promise<Product> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
};
