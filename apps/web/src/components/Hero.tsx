import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Luxury Fragrances
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover the world's most exquisite perfumes and create unforgettable memories
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
            Shop Now
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
