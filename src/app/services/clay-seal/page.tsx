import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Clay & Seal | JC Mobile Detailing Cincinnati",
  description: "Clay bar treatment + paint sealant or premium hand wax in Cincinnati, OH. Mobile service — JC Mobile Detailing comes to you.",
};

export default function ClaySealPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" /></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Clay &amp; Seal</h1>
          <p className="text-primary font-bold text-xl">Decontaminate &amp; Protect</p>
          <p className="text-gray-400 mt-2">Contact for pricing.</p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          The Clay &amp; Seal service is the perfect treatment for a vehicle that looks clean but feels rough to the touch. A clay bar removes embedded contaminants — brake dust, industrial fallout, tree sap, road tar — that a regular wash can&apos;t reach. After claying, Juan applies a premium paint sealant or hand wax to lock in protection and enhance gloss, leaving your paint smooth, clean, and shielded.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Full exterior wash & dry",
            "Clay bar treatment — full paint surface",
            "Removes brake dust, industrial fallout & tar",
            "Paint feels smooth as glass after claying",
            "Premium paint sealant or hand wax applied",
            "Protects paint for months",
            "Enhanced gloss and clarity",
            "Exterior glass cleaned",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">Book Clay &amp; Seal</Link>
        </div>
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Related Services</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/services/ceramic-coating" className="text-gray-400 hover:text-primary transition">Ceramic Coating →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition">Paint Enhancement →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition">Exterior Detailing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
