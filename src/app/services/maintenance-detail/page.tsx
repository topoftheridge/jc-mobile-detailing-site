import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance Detail | JC Mobile Detailing Cincinnati",
  description: "Regular maintenance detailing in Cincinnati, OH. Keep your car looking great between full details. JC Mobile Detailing — mobile service, we come to you.",
};

export default function MaintenanceDetailPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Maintenance Detail</h1>
          <p className="text-primary font-bold text-xl">Keep It Looking Great</p>
          <p className="text-gray-400 mt-2">Contact for pricing.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          The Maintenance Detail is perfect for vehicles that are already in good shape and just need regular upkeep between full details. It&apos;s a thorough wash, interior touch-up, and protective treatment that keeps your car looking consistently clean and well-cared-for. Ideal for clients who want to protect their investment and maintain that fresh, clean feeling every few weeks.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior hand wash & dry",
            "Wheel & tire cleaning",
            "Tire dressing",
            "Exterior glass cleaning",
            "Interior vacuum",
            "Interior wipe-down & dusting",
            "Dashboard & console cleaning",
            "Interior windows cleaned",
            "Quick odor treatment",
            "Protective spray wax applied",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Book Maintenance Detail</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Ready for a Full Detail?</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition">Complete Detail Package →</Link>
            <Link href="/services/interior-detailing" className="text-gray-400 hover:text-primary transition">Interior Detailing →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition">Exterior Detailing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
