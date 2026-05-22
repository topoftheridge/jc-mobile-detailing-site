import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Truck & Fleet Detailing | JC Mobile Detailing Cincinnati",
  description: "Professional mobile truck and fleet detailing in Cincinnati, OH. JC Mobile Detailing handles commercial vehicles, trucks, and fleets on-location.",
};

export default function FleetDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Truck / Fleet Detail</h1>
          <p className="text-primary font-bold text-xl">Commercial Vehicle Detailing</p>
          <p className="text-gray-400 mt-2">Contact for pricing — varies by vehicle count and size.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          JC Mobile Detailing serves businesses and commercial customers with professional truck and fleet detailing in Cincinnati, OH. Whether you have a single work truck that needs a deep clean or a fleet of vehicles that require regular maintenance detailing, Juan comes to your location fully equipped. A clean fleet is a professional fleet — let us keep your vehicles looking their best.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">Fleet Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Exterior hand wash & foam treatment",
            "Wheel, tire & undercarriage cleaning",
            "Bug, tar & road grime removal",
            "Interior vacuum & wipe-down",
            "Dashboard & console cleaning",
            "Window cleaning inside & out",
            "Odor treatment",
            "Wax or sealant protection",
            "Flexible scheduling for multiple vehicles",
            "On-location service — we come to your lot",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Get a Fleet Quote</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Other Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition">Complete Detail Package →</Link>
            <Link href="/services/maintenance-detail" className="text-gray-400 hover:text-primary transition">Maintenance Detail →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition">Exterior Detailing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
