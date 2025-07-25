"use client"
import Link from "next/link";
import { useLogout } from "../authHooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";

export default function DashboardNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { fnLogout } = useLogout();
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('DashboardNavBar must be used within an AuthContextProvider');
  }
  
  const { user } = context;

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
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-600">{user.email}</span>
                <button 
                  onClick={fnLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link href="/signup" className="text-gray-600 hover:text-gray-900">Signup</Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                <Link href="/nori-tracker" className="text-gray-600 hover:text-gray-900">Tracker</Link>
              </>
            )}
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
              {user ? (
                <>
                  <span className="text-gray-600">{user.email}</span>
                  <button 
                    onClick={fnLogout}
                    className="text-left text-gray-600 hover:text-gray-900"
                  >
                    Logout
                  </button>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                  <Link href="/signup" className="text-gray-600 hover:text-gray-900">Signup</Link>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                  <Link href="/nori-tracker" className="text-gray-600 hover:text-gray-900">Tracker</Link>
                </>

              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
