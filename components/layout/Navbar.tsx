"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/lib/types/navigation";
import { mainNavigation } from "@/lib/data/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-full top-0 z-50 border-b border-white border-opacity-100">
      <div className="max-w-7xl  sm:px-6 lg:px-8 px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className={`transition-all duration-200 hover:scale-110 hover:drop-shadow-md`}
            >
              <Image src="/home.png" alt="Home image" width={50} height={50} />
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {mainNavigation.map((item: NavItem) => {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-2xl text-gray-500 transition-all duration-200 hover:scale-105 hover:text-white hover:drop-shadow-md${
                    isActive(item.path)
                      ? "font-bold scale-105 drop-shadow-sm text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
