import Image from "next/image";
import Link from "next/link";

export function SocialsSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6 md:text-3xl">
        You can also find me on the following sites
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <Link
          href="https://github.com/GustavoCoutino"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-400 hover:scale-110"
        >
          <Image
            src="/images/github.png"
            alt="GitHub profile"
            width={100}
            height={100}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/gustavo-coutino-ocampo/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-400 hover:scale-110"
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn profile"
            width={100}
            height={100}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        <Link
          href="mailto:your.gcoutino04@gmail.com"
          className="transition-all duration-400 hover:scale-110"
        >
          <Image
            src="/images/gmail.png"
            alt="Email me"
            width={100}
            height={100}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-400 hover:scale-110 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-4 rounded shadow-md justify-center text-3xl"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
