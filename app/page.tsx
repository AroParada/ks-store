import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Banner />
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Clothing</h3>
              <p className="text-foreground/60 mb-4">
                Stylish and comfortable apparel for all seasons.
              </p>
              <Link href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </Link>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Accessories</h3>
              <p className="text-foreground/60 mb-4">
                accessories for everyone.
              </p>
              <Link href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </Link>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Home & Living</h3>
              <p className="text-foreground/60 mb-4">
                Quality items to make your house a home.
              </p>
              <Link href="/items" className="text-blue-600 hover:underline">
                Shop Now →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Suspense
        fallback={
          <div className="w-full border-t border-t-foreground/10 mt-auto" />
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
