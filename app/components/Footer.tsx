"use client"
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-300">
      {/* Separator Line */}
      <div className="w-full h-[1px] bg-gray-300"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">PureTide</h3>
            <p className="text-sm text-gray-600">
              Sustainable, high-quality nori sourced from the cleanest waters of South Korea.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/puretide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://tiktok.com/@puretide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-its-made" className="text-sm text-gray-600 hover:text-gray-900">
                  How It&apos;s Made
                </Link>
              </li>
              <li>
                <Link href="/shop-nori" className="text-sm text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                London, United Kingdom
              </p>
              <a 
                href="mailto:hello@puretide.co.uk" 
                className="text-sm text-gray-600 hover:text-gray-900 block"
              >
                hello@puretide.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} PureTide. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 