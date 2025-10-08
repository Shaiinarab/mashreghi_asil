import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <CallToAction />
    </main>
  );
}
