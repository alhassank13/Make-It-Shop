import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Star, ShoppingCart, Heart } from "lucide-react";
import errorImage from "../../assets/images/error.svg";

export default function ProductDetails() {
  // Extract product ID from route parameters
  const { id } = useParams();

  // Fetch product details from FakeStoreAPI using React Query
  const {
    data: productDetails,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
    error: productError,
  } = useQuery({
    queryKey: ["product", id], // Unique query key for caching
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`),
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
    enabled: !!id, // Only run query if 'id' exists
  });

  const product = productDetails?.data;

  // Scroll to top when component mounts or ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // ===============================
  // Loading State
  // ===============================
  if (isLoadingProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-10">
        <div className="w-full max-w-4xl mx-auto p-4 md:flex animate-pulse">
          <div className="md:w-1/3 h-96 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6 md:mb-0 md:mr-6" />
          <div className="md:w-2/3 space-y-4">
            <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-10 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-12 w-full bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // ===============================
  // Error State
  // ===============================
  if (isErrorProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 flex flex-col items-center justify-center py-10">
        <img src={errorImage} alt="Error" className="w-64 h-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-red-700 dark:text-red-300 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl text-red-600 dark:text-red-400 text-center max-w-lg">
          We couldn't load the product details. Please check your connection or
          try again later.
        </p>
        {productError?.message && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-500">
            Error: {productError.message}
          </p>
        )}
      </div>
    );
  }

  // ===============================
  // Not Found State
  // ===============================
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  // ===============================
  // Success: Product Details View
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-400 dark:to-slate-800 py-10 transition-colors duration-300">
      <div className="m-4 max-w-4xl mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/3 p-4 flex items-center justify-center relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[400px] object-contain rounded-lg"
            />
            {/* Wishlist Heart Icon (inactive placeholder) */}
            {/* 
            <div className="absolute top-6 right-6 p-2 bg-white/95 dark:bg-gray-800/70 rounded-full shadow-md cursor-pointer">
              <Heart className="size-5 text-gray-500" />
            </div>
            */}
          </div>

          {/* Product Info */}
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {product.title}
              </h1>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {product.category}
              </div>

              <div className="flex items-center mb-4">
                <span className="bg-purple-600 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                  {product.rating?.rate?.toFixed(1)} ★
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {product.rating?.count} reviews
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  ${product.price}
                </span>
              </div>

              <p className="text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
                Free Delivery
              </p>
            </div>

            {/* Action Buttons (commented out, context/API needed) */}
            {/* 
            <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition">
                Buy Now
              </button>
              <button className="flex-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition">
                Add to Cart
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
