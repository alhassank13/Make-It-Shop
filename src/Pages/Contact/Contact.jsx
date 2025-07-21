import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons from lucide-react

export default function App() {
  // Renamed to App for default export
  // State to manage form data (name, email, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to control the visibility of the success modal
  const [showModal, setShowModal] = useState(false);

  /**
   * Handles changes in form input fields.
   * Updates the formData state based on the input's name and value.
   * @param {Object} e - The event object from the input change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles form submission.
   * Prevents default form submission, logs data, shows success modal, and clears the form.
   * In a real application, this would typically send data to a backend.
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Log form data to console (for demonstration purposes)
    console.log("Form submitted:", formData);
    setShowModal(true); // Show the success modal
    // Clear the form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  /**
   * Closes the success modal.
   */
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
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
            {/* Email Contact */}
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Mail className="size-6 text-purple-600 dark:text-purple-400 mr-3" />
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </div>
            {/* Phone Contact */}
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Phone className="size-6 text-purple-600 dark:text-purple-400 mr-3" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            {/* Address Information */}
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
          {/* Form element with onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input Field */}
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
                required // Makes the field mandatory
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your Name"
              />
            </div>
            {/* Email Input Field */}
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
                required // Makes the field mandatory
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="you@example.com"
              />
            </div>
            {/* Message Textarea Field */}
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
                required // Makes the field mandatory
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your message..."
              ></textarea>
            </div>
            {/* Submit Button */}
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

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Thank you for your message! We will get back to you soon.
            </p>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
