export default function Intro() {
  return (
    <main className="min-h-screen mx-auto">
      {/* Hero section */}
      <section className="h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-9xl font-bold">Gustavo Coutiño</h1>
        <h3 className="text-5xl">
          Software engineer specializing in web technologies
        </h3>
        <div className="flex gap-4 mt-8 ">
          <button className="bg-blue-500 rounded-lg text-4xl p-4 hover:scale-110 transition-all text-white hover:shadow-lg">
            About me
          </button>
          <button className="bg-blue-500 rounded-lg text-4xl p-4 hover:scale-110 transition-all text-white hover:shadow-lg">
            Contact me
          </button>
        </div>
      </section>
    </main>
  );
}
