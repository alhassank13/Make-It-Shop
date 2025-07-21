import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons from lucide-react

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it to the console.
    console.log("Form submitted:", formData);
    // You might want to add a success message or clear the form here
    alert("Thank you for your message! We will get back to you soon."); // Using alert for demo, consider custom modal
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Contact Information Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We'd love to hear from you! Whether you have a question about our
            products, feedback, or just want to say hello, feel free to reach
            out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Mail className="size-6 text-purple-600 dark:text-purple-400 mr-3" />
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Phone className="size-6 text-purple-600 dark:text-purple-400 mr-3" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-start text-gray-700 dark:text-gray-300">
              <MapPin className="size-6 text-purple-600 dark:text-purple-400 mr-3 mt-1" />
              <span>
                123 Main Street, Suite 456
                <br />
                Cityville, State 12345
                <br />
                Country
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center md:text-left">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
