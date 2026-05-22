import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

// [[ABOUT_PAGE]]

export const metadata: Metadata = {
  title: "About Us | [[BUSINESS_NAME]]",
  description: "[[BUSINESS_NAME]] provides professional auto detailing in [[CITY]], [[STATE]]. Learn about our team, services, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* [[ABOUT_HEADER_IMAGE]] — Replace /aboutcard1.jpg with client's about header photo */}
        <Image src="/aboutcard1.jpg" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <Hero
            title="[[BUSINESS_NAME]]"
            subtitle="[[ABOUT_HERO_SUBTITLE]]"
            {/* e.g. "Professional Auto Detailing in [City], [State]" */}
            showCTA={false}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center pb-12 -mt-20">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              GET A FREE QUOTE
            </Link>
            <a href="tel:[[PHONE_LINK]]" className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Call [[PHONE_DISPLAY]]
            </a>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                [[ABOUT_H2]] | <span className="text-primary">[[BUSINESS_NAME]]</span>
                {/* e.g. "Auto Detailing in Delaware County, PA" */}
              </h2>
              <p className="text-primary font-medium mb-8 text-lg">
                [[ABOUT_INTRO_BOLD]]
                {/* 1–2 sentence bold intro about what the business does */}
              </p>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>[[ABOUT_PARA_1]]</p>
                <p>[[ABOUT_PARA_2]]</p>
              </div>
            </div>

            {/* [[ABOUT_IMAGE_1]] — Replace src with first about image */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              {/* <Image src="/about-1.jpg" alt="[[BUSINESS_NAME]] detailing work" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-1.jpg]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* [[ABOUT_IMAGE_2]] */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              {/* <Image src="/about-2.jpg" alt="[[BUSINESS_NAME]] team at work" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-2.jpg]</span>
            </div>
            <div className="order-1 lg:order-2">
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>[[ABOUT_PARA_3]]</p>
                <p>[[ABOUT_PARA_4]]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A look at some of the vehicles we&apos;ve brought back to life.
          </p>
          {/* [[GALLERY]] — Replace placeholders with real gallery images (gallery-1.jpg through gallery-8.jpg in /public) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-dark-lighter aspect-square flex items-center justify-center">
                {/* <Image src={`/gallery-${i}.jpg`} alt={`Detailing work ${i}`} width={400} height={400} className="object-cover w-full h-full" /> */}
                <span className="text-gray-600 text-xs">[gallery-{i}.jpg]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the <span className="text-primary">Difference</span>?
          </h2>
          <p className="text-gray-400 mb-6">Get in touch today for a free quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:[[PHONE_LINK]]" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Call [[PHONE_DISPLAY]]
            </a>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
