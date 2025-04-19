"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show navbar on desktop
      if (window.innerWidth >= 640) {
        setVisible(true);
        setScrolled(currentScrollPos > 20);
        return;
      }

      // Mobile behavior
      setVisible(currentScrollPos > 100 || currentScrollPos < prevScrollPos);
      setScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}>
                CookUp
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link
                href="/recipes"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive("/recipes")
                    ? "bg-primary/10 text-primary"
                    : scrolled 
                      ? "text-gray-600 hover:text-primary" 
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Find Recipes
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive("/pricing")
                    ? "bg-primary/10 text-primary"
                    : scrolled 
                      ? "text-gray-600 hover:text-primary" 
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link 
              href="/auth/login"
              className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              <span className={scrolled ? "text-gray-600" : "text-white/90"}>
                Log in
              </span>
            </Link>
            <Link 
              href="/auth/signup" 
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white text-gray-900 hover:bg-white/90"
              }`}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
