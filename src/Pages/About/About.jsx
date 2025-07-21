import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            About Our Clothing Brand
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to our clothing brand, where we believe in crafting more
            than just apparel – we create experiences. Our passion lies in
            designing high-quality, stylish, and comfortable clothing that
            empowers you to express your unique identity in fashion.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We envision a world where fashion is accessible, sustainable, and
              truly personal. Our goal is to inspire confidence and creativity
              through our collections, ensuring that every piece tells a story
              and resonates with your individual style.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Trendy and timeless designs for every occasion.</li>
              <li>High-quality fabrics and meticulous craftsmanship.</li>
              <li>Sustainable and ethical production practices.</li>
              <li>
                Exceptional customer service and a seamless shopping experience.
              </li>
              <li>
                A commitment to helping you define and refine your personal
                style.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
