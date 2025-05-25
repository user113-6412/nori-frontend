"use client"
import Link from "next/link";
import { useState } from "react";

export default function HomeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Banner Section */}
      <div className="w-full bg-white py-2 text-center">
        <p className="text-sm text-gray-600">Saving the planet one sheet at a time</p>
      </div>

      {/* Separator Line */}
      <div className="w-full h-[1px] bg-gray-300"></div>

      {/* Main Navbar Container */}
      <div className="w-full px-4 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">PureTide</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/nori-tracker" className="text-gray-600 hover:text-gray-900">Tracker</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/how-its-made" className="text-gray-600 hover:text-gray-900">Process</Link>
            <Link href="/nori-sources" className="text-gray-600 hover:text-gray-900">Source</Link>
            <Link href="/shop-nori" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/why-us" className="text-gray-600 hover:text-gray-900">Why Us</Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-600"></span>
              <span className="w-full h-0.5 bg-gray-600"></span>
              <span className="w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[120px] left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/nori-tracker" className="text-gray-600 hover:text-gray-900">Tracker</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link href="/how-its-made" className="text-gray-600 hover:text-gray-900">Process</Link>
              <Link href="/nori-sources" className="text-gray-600 hover:text-gray-900">Source</Link>
              <Link href="/shop-nori" className="text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="/about-us" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/why-us" className="text-gray-600 hover:text-gray-900">Why Us</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
              <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
