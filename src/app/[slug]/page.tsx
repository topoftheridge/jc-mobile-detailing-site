import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Check } from "lucide-react";

// [[LOCATION_PAGE]] — Auto-generated from locations.ts. No edits needed here usually.

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "[[BUSINESS_NAME]]",
    description: `Professional auto detailing in ${location.name}, [[STATE]].`,
    telephone: "[[PHONE_LINK]]",
    email: "[[EMAIL]]",
    address: {
      "@type": "PostalAddress",
      addressLocality: "[[CITY]]",
      addressRegion: "[[STATE]]",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${location.name}, [[STATE]]`,
    },
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative py-16 lg:py-24 bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Auto Detailing in <span className="text-primary">{location.name}</span>, [[STATE]] | [[BUSINESS_NAME]]
          </h1>

          <p className="text-gray-300 leading-relaxed mb-8 text-lg">{location.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Services Available in {location.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Complete Detail Package (Starting at [[FULL_PACKAGE_PRICE]])",
                "Interior Detailing (Starting at [[INTERIOR_PRICE]])",
                "Exterior Detailing (Starting at [[EXTERIOR_PRICE]])",
                "[[LOCATION_SERVICE_4]]",
                "[[LOCATION_SERVICE_5]]",
                "[[LOCATION_SERVICE_6]]",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition">
              BOOK NOW
            </Link>
            <a href="tel:[[PHONE_LINK]]" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20">
              Call [[PHONE_DISPLAY]]
            </a>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-dark-lighter border border-white/5">
            <p className="text-gray-400 text-sm">
              Serving {location.name} and surrounding areas in [[STATE]]. Call{" "}
              <a href="tel:[[PHONE_LINK]]" className="text-primary font-semibold">[[PHONE_DISPLAY]]</a> to schedule your detail today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
