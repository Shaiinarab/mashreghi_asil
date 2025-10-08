"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-purple-100">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">info@luxuryperfumes.com</p>
                    <p className="text-gray-600">support@luxuryperfumes.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Luxury Avenue<br />
                      Fragrance District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h4>
                    <p className="text-gray-600">
                      Standard shipping takes 3-5 business days. Express shipping is available for next-day delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you offer samples?</h4>
                    <p className="text-gray-600">
                      Yes! We offer sample sets and individual fragrance samples so you can try before you buy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's your return policy?</h4>
                    <p className="text-gray-600">
                      We offer a 30-day return policy for unopened items in their original packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

