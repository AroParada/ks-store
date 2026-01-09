import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">About KS Store</h1>
            <p className="text-xl text-foreground/60">
              Your trusted partner for quality products and exceptional service
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 450"
                className="w-full h-full"
              >
                <rect width="800" height="450" fill="#e2e8f0" />
                <text
                  x="400"
                  y="225"
                  fontSize="48"
                  fontWeight="bold"
                  fill="#64748b"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  KS Store
                </text>
              </svg>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 mb-6">
              Welcome to KS Store, where quality meets convenience. We are dedicated to 
              providing our customers with an exceptional shopping experience and a 
              carefully curated selection of products.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-foreground/80 mb-6">
              Our mission is to deliver high-quality products at competitive prices while 
              maintaining the highest standards of customer service. We believe in building 
              lasting relationships with our customers through trust, transparency, and 
              excellent service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
              <li>Wide range of quality products</li>
              <li>Competitive pricing and great deals</li>
              <li>Fast and reliable shipping</li>
              <li>Excellent customer support</li>
              <li>Secure shopping experience</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-foreground/80 mb-6">
              At KS Store, we are committed to integrity, quality, and customer satisfaction. 
              These core values guide everything we do, from selecting our products to 
              serving our customers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
