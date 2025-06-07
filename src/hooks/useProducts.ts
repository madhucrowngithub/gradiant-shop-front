
import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../services/api';

export const useProducts = () => {
  console.log('useProducts hook called');
  
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from API...');
      try {
        const result = await productsApi.getAll();
        console.log('Products API response:', result);
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
    queryFn: () => productsApi.getById(id),
    enabled: !!id,
  });
};
