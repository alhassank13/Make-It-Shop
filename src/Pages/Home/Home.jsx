import React from "react";
// Corrected axios import:
import axios from "axios"; // This is the standard way to import installed packages
import { useQuery } from "@tanstack/react-query";
import errorImage from "../../assets/images/error.svg";
import Make_it_1 from "../../assets/images/Make_it_1.png";
import Make_it_2 from "../../assets/images/Make_it_2.png";
import Make_it_3 from "../../assets/images/Make_it_3.png";
import Card from "../../Componentes/Card/Card";

export default function Home() {
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      // The axios.get call itself is correct
      return axios.get("https://fakestoreapi.com/products");
    },
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
  });

  // This line was previously fixed to correctly access the data from axios response
  const products = productsData?.data;

  const ProductCardSkeleton = () => (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden animate-pulse transform transition-all duration-300">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mt-4"></div>
      </div>
    </div>
  );

  // General Loading State for the entire page
  if (isLoadingProducts) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-10">
        <div className="container mx-auto px-4">
          {/* Hero Skeleton */}
          <div className="w-full h-80 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md mb-8 animate-pulse"></div>

          {/* Categories Skeleton */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 animate-pulse bg-gray-300 h-8 w-1/4 rounded"></h2>
          <div className="flex space-x-4 overflow-hidden mb-12">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-40 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Brands Skeleton */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 animate-pulse bg-gray-300 h-8 w-1/4 rounded"></h2>
          <div className="flex space-x-4 overflow-hidden mb-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-20 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>

          {/* Featured Products Skeleton */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 animate-pulse bg-gray-300 h-8 w-1/3 rounded"></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State for the entire page
  if (isErrorProducts) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 transition-colors duration-300 py-10 flex flex-col items-center justify-center">
        <img src={errorImage} alt="Error" className="w-64 h-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-red-700 dark:text-red-300 mb-4 text-center">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl text-red-600 dark:text-red-400 text-center max-w-lg">
          We couldn't load the products right now. Please check your internet
          connection or try again later.
        </p>
        {productsError?.message && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-500">
            Error: {productsError.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-400 dark:to-slate-800 transition-colors duration-300 py-10">
      <div className="container mx-auto px-4">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero"
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md mb-8"
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <img
              alt="Make_it_1 Image"
              src={Make_it_1}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md mb-8"
            />

            <img
              alt="Make_it_1 Image"
              src={Make_it_2}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md mb-8"
            />

            <img
              alt="Make_it_1 Image"
              src={Make_it_3}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md mb-8"
            />
          </div>
        </div>

        {/* Featured Products Section */}
        <section>
          <h2 className="text-3xl font-bold text-purple-600 dark:text-gray-100 mb-6 text-center">
            Featured Products
          </h2>
          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400 py-10">
              <p className="text-2xl font-semibold mb-4">
                No Products Found! 😞
              </p>
              <p className="text-lg">
                It seems there are no products to display at the moment. Please
                check back later or try refreshing.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
