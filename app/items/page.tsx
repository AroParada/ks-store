import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

interface Item {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  stock?: number;
  image?: string;
}

async function ItemsData() {
  const supabase = await createClient();
  const { data: items } = await supabase.from("Items").select();
  console.log("Fetched items:", items);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-foreground/60">
          No products available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item: Item) => (
        <Card
          key={item.id}
          className="flex flex-col hover:shadow-lg transition-shadow"
        >
          <Image
            src={item.image || "/images/products/placeholder.jpg"}
            alt={item.name || "Product Image"}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle className="line-clamp-2">
              {item.name || "Untitled Product"}
            </CardTitle>
            {item.category && (
              <Badge variant="secondary" className="w-fit">
                {item.category}
              </Badge>
            )}
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="line-clamp-3">
              {item.description || "No description available."}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex-col justify-between items-center">
            <div className="flex-row mb-2 justify-between items-center w-full flex">
              {item.price && (
                <span className="text-2xl font-bold">
                  $
                  {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : item.price}
                </span>
              )}
              {item.stock !== undefined && (
                <span
                  className={`text-sm ${
                    item.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.stock > 0 ? `${item.stock} in stock` : "Out of stock"}
                </span>
              )}
            </div>

            <button
              className={buttonVariants({ variant: "default", size: "sm" })}
              disabled={item.stock === 0}
            >
              Buy Now
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function Items() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">Our Products</h1>
            <p className="text-lg text-foreground/60">
              Browse our collection of quality items
            </p>
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-12">
                <div className="text-lg text-foreground/60">
                  Loading products...
                </div>
              </div>
            }
          >
            <ItemsData />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
