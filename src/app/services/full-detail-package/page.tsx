import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Detail Package | JC Mobile Detailing Cincinnati",
  description: "Full interior + exterior mobile detailing in Cincinnati, OH. The complete JC Mobile Detailing treatment in one visit. Book online today.",
};

export default function FullDetailPackagePage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Complete Detail Package</h1>
          <p className="text-primary font-bold text-xl">Full Interior + Full Exterior</p>
          <p className="text-gray-400 mt-2">Best value — pricing based on vehicle size and condition.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          The complete JC Mobile Detailing experience — inside and out, in one visit. Full exterior hand car wash with foam coverage, clay bar decontamination, polish, and wax. Complete interior deep clean including steam cleaning, shampooing, leather conditioning, odor removal, and window cleaning. Juan uses only top-of-the-line products throughout. This is the package that consistently earns five-star reviews — clients say their car looks better than the day they bought it.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">Exterior — What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {["Full exterior hand car wash","Power wash & full foam coverage","Clay bar paint decontamination","Wheel, tire & wheel well cleaning","Bug & tar removal","Full exterior polish","Full wax application — removed by hand","Chrome & emblem polishing","Tire dressing for high luster","Exterior windows spotless"].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white mb-6">Interior — What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {["Complete interior vacuum","Floor mat removal & shampooing","Full carpet & upholstery steam cleaning","Stain & odor elimination","Door panel & compartment cleaning","Headliner cleaning","Dashboard & all trim detailing","Leather cleaning & conditioning (if applicable)","Air vent Q-Tip detailing","All windows & mirrors crystal clear"].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Book This Package</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition">Interior Detailing →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition">Exterior Detailing →</Link>
            <Link href="/services/ceramic-coating" className="text-gray-400 hover:text-primary transition">Ceramic Coating →</Link>
            <Link href="/services/maintenance-detail" className="text-gray-400 hover:text-primary transition">Maintenance Detail →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
