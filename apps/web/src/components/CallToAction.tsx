import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Signature Scent?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of satisfied customers who have discovered their perfect fragrance with us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Shopping
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
            Get Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
}
