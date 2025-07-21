import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-200 shadow-lg rounded-2xl flex flex-col hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer group/card">
      {/* Product card content */}
      <Link
        to={`/productDetails/${item.id}`}
        className="p-4 sm:p-5 flex flex-col flex-grow"
      >
        {/* Product image */}
        <div className="relative overflow-hidden rounded-xl mb-4 group/image">
          <img
            className="w-full h-48 scale-110 object-cover rounded-xl transition-transform duration-300 group-hover/image:scale-125"
            src={item.image}
            alt={item.title || "product image"}
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-90">
            New
          </div>
        </div>

        {/* Product brand */}
        <p className="text-sm text-gray-600 dark:text-gray-500 font-semibold mb-1">
          {item.brand?.name}
        </p>

        {/* Product title + rating */}
        <div className="flex justify-between items-start mb-1">
          <h3
            className="text-base font-semibold text-gray-900 line-clamp-2"
            title={item.title}
          >
            {/* Truncate long titles */}
            {item.title?.split(" ").slice(0, 12).join(" ")}
            {item.title?.split(" ").length > 12 ? "..." : ""}
          </h3>

          {/* Rating stars */}
          <div className="flex items-center space-x-1">
            <Star className="size-5 text-yellow-400" />
            <span className="dark:text-gray-700">{item.rating.rate}</span>
            <span className="text-sm text-gray-600 dark:text-gray-500">
              ({item.rating.count})
            </span>
          </div>
        </div>

        {/* Category */}
        <span className="text-sm text-gray-600 dark:text-gray-500">
          {item.category}
        </span>

        {/* Stock availability */}
        <div className="mt-1">
          <span className="text-sm text-primary">In Stock</span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="font-extrabold text-primary dark:text-blue-400">
            ${item.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
