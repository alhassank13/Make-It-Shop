import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // Sticky header with shadow
    <header className="bg-slate-400 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 h-16 overflow-hidden rounded-2xl">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className="flex justify-center items-center gap-2 overflow-hidden rounded-full">
            {/* Site logo */}
            <img
              src="/favicon.png"
              alt="Make It Logo"
              className="h-12 scale-245 rounded-full"
            />
          </div>
          {/* Brand text */}
          <span className="text-xl font-extrabold tracking-tight text-gray-800">
            Make It
          </span>
        </Link>

        {/* Main navigation links */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            {/* Home link - highlights purple when active */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600"
                    : "hover:text-purple-600 transition"
                }
              >
                Home
              </NavLink>
            </li>

            {/* Shop link */}
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600"
                    : "hover:text-purple-600 transition"
                }
              >
                Shop
              </NavLink>
            </li>

            {/* About link */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600"
                    : "hover:text-purple-600 transition"
                }
              >
                About
              </NavLink>
            </li>

            {/* Contact link */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600"
                    : "hover:text-purple-600 transition"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
