import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Detailing | JC Mobile Detailing Cincinnati",
  description: "Professional mobile exterior detailing in Cincinnati, OH. Hand wash, clay bar, wax, wheel cleaning, paint decontamination. JC Mobile Detailing.",
};

export default function ExteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Exterior Detailing</h1>
          <p className="text-primary font-bold text-xl">Shine &amp; Protect</p>
          <p className="text-gray-400 mt-2">Pricing based on vehicle size and condition — contact for a quote.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          JC Mobile Detailing&apos;s exterior service is a full hand car wash with power wash and complete foam coverage — including thorough cleaning of wheels, tires, and wheel wells. We remove all bugs, tar, and road grime, then apply a clay bar to fully decontaminate the paint surface. After polishing we apply a full wax treatment, removed by hand. Chrome is polished, rubber trim is cleaned and restored, and tires are dressed to a high-luster finish. All exterior glass is left spotless.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior hand car wash",
            "Power wash & complete foam coverage",
            "Clay bar paint decontamination",
            "Wheel, tire & wheel well deep cleaning",
            "Bug & tar removal",
            "Paint polish treatment",
            "Full wax application — removed by hand",
            "Chrome polishing",
            "Rubber trim cleaning & restoration",
            "Tire dressing for high luster",
            "Exterior window & glass cleaning",
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
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition">Interior Detailing →</Link>
            <Link href="/services/clay-seal" className="text-gray-400 hover:text-primary transition">Clay &amp; Seal →</Link>
            <Link href="/services/ceramic-coating" className="text-gray-400 hover:text-primary transition">Ceramic Coating →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
