import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Ceramic Coating | JC Mobile Detailing Cincinnati",
  description: "Professional mobile ceramic coating in Cincinnati, OH. Long-lasting paint protection against UV, contaminants, and water. JC Mobile Detailing — we come to you.",
};

export default function CeramicCoatingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ceramic Coating</h1>
          <p className="text-primary font-bold text-xl">Long-Lasting Paint Protection</p>
          <p className="text-gray-400 mt-2">Contact for pricing — varies by vehicle size and panel count.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          JC Mobile Detailing offers professional ceramic coating installation to give your vehicle the ultimate long-term protection. Ceramic coatings form a hard, hydrophobic layer over your paint that repels water, dirt, UV rays, bird droppings, and environmental contaminants — keeping your car cleaner for longer and maintaining that showroom shine for years, not weeks. Juan applies ceramic coatings using advanced techniques on properly prepped paint for maximum adhesion and durability.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">Why Ceramic Coating?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Hydrophobic — water beads and sheets off",
            "UV protection — prevents paint fading and oxidation",
            "Repels bird droppings, tree sap & road grime",
            "Easier to clean — dirt doesn't bond to surface",
            "Enhanced gloss and depth",
            "Protection lasts years, not weeks",
            "Applied on fully prepped, clean paint",
            "Professional-grade coating products only",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-12">
          <p className="text-white font-semibold mb-2">Best paired with Paint Correction</p>
          <p className="text-gray-300 text-sm">For best results, ceramic coating is applied after a full paint correction or clay & seal prep. Ask Juan about a combined package.</p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Get a Ceramic Coating Quote</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Related Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition">Paint Enhancement &amp; Correction →</Link>
            <Link href="/services/clay-seal" className="text-gray-400 hover:text-primary transition">Clay &amp; Seal →</Link>
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition">Complete Detail Package →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
