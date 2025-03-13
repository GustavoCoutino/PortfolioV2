import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-gray-800 w-full py-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-medium">@ 2025 Gustavo Coutiño</p>
            <p className="text-gray-400 text-sm">
              Computer Science Student & Software Developer
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/GustavoCoutino"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/gustavo-coutino-ocampo/"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:gcoutino04@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
