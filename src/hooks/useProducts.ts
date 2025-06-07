
import { useQuery } from '@tanstack/react-query';
import { mockProductsApi } from '../services/mockApi';

export const useProducts = () => {
  console.log('useProducts hook called');
  
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from Mock API...');
      try {
        const result = await mockProductsApi.getAll();
        console.log('Mock API response:', result);
        return result;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => mockProductsApi.getById(id),
    enabled: !!id,
  });
};
