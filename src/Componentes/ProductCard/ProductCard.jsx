import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function ProductCard() {

const {
  data: productsData,
  isLoading: isLoadingProducts,
  isError: isErrorProducts,
  error: productsError,
} = useQuery({
  queryKey: ["products"],
  queryFn: () => {
    // The axios.get call itself is correct
    return axios.get(`https://fakestoreapi.com/products${id}`);
  },
  refetchOnWindowFocus: false,
  retry: 2,
  retryDelay: 1000,
  staleTime: 1000 * 60 * 5,
});





  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-400 transition-colors duration-300 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          Products
        </h2>

        {isLoadingProducts ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-600"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : productsError ? (
          <img src={errorImage} alt="error" className="w-full" />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productsData.map((item) => (
                <Card key={item._id} item={item} />
              ))}
            </div>

            {/* Pagination Buttons */}
          </>
        )}
      </div>
    </div>
  );
}
