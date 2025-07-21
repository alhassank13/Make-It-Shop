import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Star, ShoppingCart, Heart } from "lucide-react"; // Importing necessary icons
import errorImage from "../../assets/images/error.svg"; // Assuming you have an error image

export default function ProductDetails() {
  const { id } = useParams();

  const {
    data: productDetails,
    isLoading: isLoadingProduct, // Renamed to isLoadingProduct for clarity
    isError: isErrorProduct, // Renamed to isErrorProduct for clarity
    error: productError, // Renamed to productError for clarity
  } = useQuery({
    queryKey: ["product", id], // Changed queryKey to include 'id' for unique caching
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`),
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
    enabled: !!id, // Only run query if 'id' is available
  });

  // FIX: Correctly access the product object directly from productDetails.data
  const product = productDetails?.data;

  // Scroll to top with smooth animation on component mount or 'id' change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  }, [id]); // Dependency array includes 'id' so it scrolls to top when product changes

  // console.log("Product Details", productDetails);
  // console.log("Product Details", productDetails?.data);

  // Loading State
  if (isLoadingProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-10 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto p-4 md:flex animate-pulse">
          {/* Image Skeleton */}
          <div className="md:w-1/3 h-96 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6 md:mb-0 md:mr-6"></div>
          {/* Content Skeleton */}
          <div className="md:w-2/3">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            {/* Brand */}
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            {/* Title */}
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            {/* Description line 1 */}
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-6"></div>
            {/* Description line 2 */}
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            {/* Rating */}
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
            {/* Price */}
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            {/* Buttons */}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (isErrorProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 transition-colors duration-300 py-10 flex flex-col items-center justify-center">
        <img src={errorImage} alt="Error" className="w-64 h-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-red-700 dark:text-red-300 mb-4 text-center">
          Oops! Something went wrong.
        </h2>
        <p className="text-xl text-red-600 dark:text-red-400 text-center max-w-lg">
          We couldn't load the product details right now. Please check your
          internet connection or try again later.
        </p>
        {productError?.message && (
          <p className="mt-2 text-sm text-red-500 dark:text-red-500">
            Error: {productError.message}
          </p>
        )}
      </div>
    );
  }

  // Render product details only if product data is available
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-400 dark:to-slate-800 transition-colors duration-300 py-10">
        <div className="m-4 max-w-4xl mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/3 p-4 relative flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain rounded-lg max-h-[400px]" // Use object-contain and max-h for better image display
              />
              {/* Heart Icon (placeholder, as context is commented out) */}
              {/* <div className="absolute top-6 right-6 text-red-500 hover:text-red-600 focus:outline-none cursor-pointer p-2 bg-white/95 dark:bg-gray-800/70 rounded-full shadow-md">
                <Heart className="size-5 text-gray-500" />
              </div> */}

              {/* Swiper for product images removed as fakestoreapi only provides one image */}
              {/* <Swiper
                className="cursor-pointer mt-4"
                spaceBetween={10}
                slidesPerView={3}
              >
                {product.images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`product-${index}`}
                      className="w-full h-16 object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>

            {/* Product Details */}
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                {/* Brand information is not available in Fake Store API */}
                {/* <p className="font-bold text-gray-600 dark:text-gray-400 mb-2">
                  {product.brand.name}
                </p> */}
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
                    {/* Corrected rating access */}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    {product.rating?.count} reviews
                    {/* Corrected rating access */}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      ${product.price}
                    </span>
                    {/* Discount information removed as it's not in the API */}
                    {/* <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                      ${(product.price * 1.1).toFixed(2)}
                    </span> */}
                  </div>
                  {/* Discount badge removed */}
                  {/* <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Save 10%
                  </span> */}
                </div>

                <p className="text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
                  Free Delivery {/* Static, as no delivery info in API */}
                </p>
              </div>

              {/* <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
                  // onClick={() => handleBuyNow(product.id)} // Changed to product.id
                >
                  Buy Now
                </button>

                <button
                  className="flex-1 bg-gray-200 dark:bg-gray-600 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
                  // onClick={() => addProductToCart(product.id)} // Changed to product.id
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
