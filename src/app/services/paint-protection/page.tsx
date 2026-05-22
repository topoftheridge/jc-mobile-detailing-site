import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paint Enhancement & Correction | JC Mobile Detailing Cincinnati",
  description: "Paint enhancement, one-step polish, compound correction and paint sealant in Cincinnati, OH. JC Mobile Detailing — mobile paint correction service.",
};

export default function PaintProtectionPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Paint Enhancement &amp; Correction</h1>
          <p className="text-primary font-bold text-xl">Gloss, Depth &amp; Protection</p>
          <p className="text-gray-400 mt-2">Pricing based on vehicle condition — contact for a quote.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          JC Mobile Detailing offers professional paint enhancement and correction services to restore your paint&apos;s original gloss, depth, and shine. Whether your paint needs a one-step polish to boost clarity, a compound correction to remove light scratches and swirl marks, or a full multi-stage correction for heavily neglected paint — Juan has the tools and expertise to deliver stunning results right at your door.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { name: "Paint Enhancement", desc: "One-step polish and paint sealant to boost gloss and depth. Great for well-maintained vehicles wanting extra shine." },
            { name: "Paint Correction", desc: "Compound correction to remove light scratches, swirl marks, and oxidation — restoring paint clarity and depth." },
            { name: "Paint Sealant", desc: "Synthetic paint sealant applied after polishing for months of protection against UV, water, and contaminants." },
            { name: "One-Step Polish", desc: "Single-stage machine polish to enhance gloss and remove light defects in one efficient pass." },
          ].map((item) => (
            <div key={item.name} className="p-5 rounded-lg bg-dark-lighter border border-white/5">
              <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Get a Quote</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/ceramic-coating" className="text-gray-400 hover:text-primary transition">Ceramic Coating →</Link>
            <Link href="/services/clay-seal" className="text-gray-400 hover:text-primary transition">Clay &amp; Seal →</Link>
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition">Complete Detail Package →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
