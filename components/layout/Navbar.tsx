"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/lib/types/navigation";
import { mainNavigation } from "@/lib/data/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-full top-0 z-50 border-b border-white border-opacity-100">
      <div className="max-w-7xl sm:px-6 lg:px-8 px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className={`transition-all duration-200 hover:scale-110 hover:drop-shadow-md`}
            >
              <Image src="/home.png" alt="Home image" width={50} height={50} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((item: NavItem) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-2xl text-gray-500 transition-all duration-200 hover:scale-105 hover:text-white hover:drop-shadow-md ${
                  isActive(item.path)
                    ? "font-bold scale-105 drop-shadow-sm text-white"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-2 pt-2 pb-2 bg-black bg-opacity-90 rounded-lg">
            {mainNavigation.map((item: NavItem) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-xl text-gray-400 transition-all duration-200 hover:text-white rounded-md ${
                  isActive(item.path) ? "bg-gray-800 text-white" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
