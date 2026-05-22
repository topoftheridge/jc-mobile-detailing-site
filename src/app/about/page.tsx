import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About JC Mobile Detailing | Cincinnati, OH",
  description: "JC Mobile Detailing is owned and operated by Juan Cruz in Cincinnati, OH. 4+ years experience, 87 five-star reviews, 1,300+ cars detailed. We come to you.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image src="/aboutcard1.jpg" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative">
          <Hero title="JC Mobile Detailing" subtitle="Cincinnati's Trusted Mobile Detailing Service" showCTA={false} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center pb-12 -mt-20">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              BOOK YOUR DETAIL
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Cincinnati&apos;s Mobile Detailing Expert | <span className="text-primary">JC Mobile Detailing</span>
              </h2>
              <p className="text-primary font-medium mb-8 text-lg">
                JC Mobile Detailing is owned and operated by Juan Cruz — a Cincinnati-based detailing professional with 4+ years of experience restoring vehicles to showroom quality.
              </p>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  Cincinnati, Ohio is home to JC Mobile Detailing, a trusted name in premium auto detailing that&apos;s redefining convenience and quality. Specializing in both interior and exterior detailing, Juan brings showroom-level results right to your home or workplace.
                </p>
                <p>
                  Our team uses advanced techniques, high-quality products, and optional ceramic coatings to deliver unmatched cleanliness, protection, and shine. Juan uses top-of-the-line products — from waxes and cleaners to polishing compounds and ceramic coatings — ensuring every vehicle gets the treatment it deserves.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              <span className="text-gray-600 text-sm">[Image — about-1.jpg]</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 text-center">
            {[
              { stat: "4+", label: "Years of Experience" },
              { stat: "87", label: "Five-Star Reviews" },
              { stat: "1,300+", label: "Cars Detailed" },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-xl bg-dark-lighter border border-white/5">
                <p className="text-4xl font-black text-primary mb-2">{item.stat}</p>
                <p className="text-gray-300 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <span className="text-gray-600 text-sm">[Image — about-2.jpg]</span>
            </div>
            <div className="order-1 lg:order-2">
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  One of the distinguishing qualities of JC Mobile Detailing is our commitment to delivering lasting protection and unmatched cleanliness for every vehicle we service. By using premium products and advanced techniques, we safeguard your car&apos;s exterior against environmental factors like UV rays, bird droppings, and harsh weather.
                </p>
                <p>
                  Whether you need a routine maintenance detail, a deep interior cleaning, a full paint correction, or a ceramic coating — Juan goes the extra mile to meet and exceed your expectations. Every detail, every time.
                </p>
                <p>
                  Clients consistently report that their vehicles look showroom-ready and feel refreshed — inside and out. That&apos;s not a coincidence. It&apos;s Juan&apos;s standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">Our <span className="text-primary">Work</span></h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">A look at some of the Cincinnati-area vehicles Juan has transformed.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-dark-lighter aspect-square flex items-center justify-center">
                <span className="text-gray-600 text-xs">[gallery-{i}.jpg]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See the <span className="text-primary">Difference</span>?</h2>
          <p className="text-gray-400 mb-6">Join over 1,300 satisfied Cincinnati drivers. Book your detail today.</p>
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
            BOOK YOUR DETAIL
          </Link>
        </div>
      </section>
    </>
  );
}
