import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone } from "lucide-react";

// [[INTERIOR_DETAILING_PAGE]]

export const metadata: Metadata = {
  title: "Interior Detailing | [[BUSINESS_NAME]]",
  description: "Professional interior auto detailing in [[CITY]], [[STATE]]. Deep cleaning, stain removal, odor elimination, leather conditioning. Starting at [[INTERIOR_PRICE]].",
};

export default function InteriorDetailingPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Interior Detailing</h1>
          <p className="text-primary font-bold text-xl">Starting at [[INTERIOR_PRICE]]</p>
          <p className="text-gray-400 mt-2">Final pricing depends on vehicle size and condition.</p>
          <p className="text-gray-300 mt-1">[[INTERIOR_PRICE_RANGE]]</p>
          {/* e.g. "Most vehicles typically fall between $120–$180." */}
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          [[INTERIOR_DESCRIPTION]]
          {/*
            Full description of the interior detailing service.
            e.g. "Full Interior Clean and Restore. The interior is thoroughly vacuumed,
            mats removed, carpets and upholstery shampooed, dashboard cleaned, leather
            conditioned, and odors eliminated."
          */}
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "[[INTERIOR_ITEM_1]]",
            "[[INTERIOR_ITEM_2]]",
            "[[INTERIOR_ITEM_3]]",
            "[[INTERIOR_ITEM_4]]",
            "[[INTERIOR_ITEM_5]]",
            "[[INTERIOR_ITEM_6]]",
            "[[INTERIOR_ITEM_7]]",
            "[[INTERIOR_ITEM_8]]",
            "[[INTERIOR_ITEM_9]]",
            "[[INTERIOR_ITEM_10]]",
            // Add or remove items as needed
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-gray-300">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            Get Your Free Quote
          </Link>
          <a href="tel:[[PHONE_LINK]]" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
            <Phone className="w-5 h-5" /> Call [[PHONE_DISPLAY]]
          </a>
        </div>

        {/* Other Services */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Explore Our Other Services</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <Link href="/services/full-detail-package" className="text-gray-400 hover:text-primary transition text-lg">Complete Detail Package →</Link>
            <Link href="/services/exterior-detailing" className="text-gray-400 hover:text-primary transition text-lg">Exterior Detailing →</Link>
            <Link href="/services/paint-protection" className="text-gray-400 hover:text-primary transition text-lg">Paint Enhancement &amp; Protection →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
