import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Detailing | JC Mobile Detailing Cincinnati",
  description: "Professional mobile interior detailing in Cincinnati, OH. Steam cleaning, stain removal, odor elimination, leather conditioning. JC Mobile Detailing — we come to you.",
};

export default function InteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Interior Detailing</h1>
          <p className="text-primary font-bold text-xl">Deep Clean &amp; Restore</p>
          <p className="text-gray-400 mt-2">Pricing based on vehicle size and condition — contact for a quote.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          JC Mobile Detailing&apos;s full interior service is a complete clean and restore from top to bottom. The entire interior is vacuumed thoroughly including the trunk. Floor mats are removed and shampooed. We steam clean and shampoo all carpeting and upholstery, clean every door panel, compartment, headliner, ashtray, instrument panel, knob, and trim piece. Leather is cleaned and conditioned. Air vents are Q-tip detailed, and the dashboard is fully cleaned. All fabrics are protected. Interior windows and mirrors are left crystal clear. Bad odors — from pets, smoke, food — are fully eliminated, leaving your vehicle smelling fresh and clean.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Complete interior vacuum including trunk",
            "Floor mat removal & shampooing",
            "Full carpet & upholstery steam cleaning",
            "Stain removal — pet hair, food, ink, dirt",
            "Door panel & compartment cleaning",
            "Headliner cleaning",
            "Dashboard, instruments, knobs & trim detailing",
            "Leather cleaning & conditioning (if applicable)",
            "Air vent Q-Tip detailing",
            "Fabric protection treatment",
            "Interior window & mirror cleaning — crystal clear",
            "Odor elimination — sanitized & deodorized",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Book This Service</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition">Complete Detail Package →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition">Exterior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition">Paint Enhancement →</Link>
            <Link href="/services/ceramic-coating" className="text-gray-400 hover:text-primary transition">Ceramic Coating →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
