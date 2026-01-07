import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Banner />
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Electronics</h3>
              <p className="text-foreground/60 mb-4">
                Discover the latest gadgets and technology.
              </p>
              <a href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </a>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Fashion</h3>
              <p className="text-foreground/60 mb-4">
                Trendy clothing and accessories for everyone.
              </p>
              <a href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </a>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Home & Living</h3>
              <p className="text-foreground/60 mb-4">
                Quality items to make your house a home.
              </p>
              <a href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
