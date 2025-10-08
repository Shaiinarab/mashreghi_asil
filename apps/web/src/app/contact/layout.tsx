import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luxury Perfume Shop",
  description: "Get in touch with our team for any questions about our luxury fragrances or customer service.",
  openGraph: {
    title: "Contact Us | Luxury Perfume Shop",
    description: "Get in touch with our team for any questions about our luxury fragrances or customer service.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
