export function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to KS Store
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover amazing products and great deals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/items"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse Items
          </a>
          <a
            href="/about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
