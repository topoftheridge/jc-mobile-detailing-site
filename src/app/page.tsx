import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Sparkles, Shield, Clock, Star } from "lucide-react";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JC Mobile Detailing",
    description: "Top-rated mobile auto detailing in Cincinnati, OH. Interior & exterior detailing, ceramic coating, paint correction — we come to you.",
    url: "https://www.jcmobiledetailings.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Cincinnati, OH" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "87",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="JC Mobile Detailing"
          subtitle="Top auto detailing service in Cincinnati, OH. We use high-quality products and proven techniques to restore your vehicle's shine — convenient, reliable, and always detail-focused."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-black text-black">4+</p>
              <p className="text-black/80 font-semibold text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-black text-black">87</p>
              <p className="text-black/80 font-semibold text-sm mt-1">Five-Star Reviews</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-black text-black">1,300+</p>
              <p className="text-black/80 font-semibold text-sm mt-1">Cars Detailed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why JC Mobile Detailing</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            Not your average<br />car wash.
          </h2>
          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">We Come To You</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">No drop-offs. No waiting rooms. Juan comes fully equipped to your home or workplace anywhere in the Cincinnati area — including Northern Kentucky.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Star className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">87 Five-Star Reviews</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">Over 1,300 cars detailed and 87 five-star reviews. Cincinnati drivers consistently say their vehicles look better than the day they bought them — that&apos;s our standard.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Premium Products Only</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">Juan uses top-of-the-line products — from waxes and cleaners to polishing compounds and ceramic coatings. No shortcuts. Every vehicle gets professional-grade treatment.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Clock className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">On Time, Every Time</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">Juan is known for punctuality and professionalism. He arrives on schedule, communicates clearly, and doesn&apos;t leave until the job is done right.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Tailored detailing packages for every need — from quick maintenance washes to full paint corrections and ceramic coatings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/interior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/jcmobiledetailinginteriorcard.png')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Interior Detailing</h3>
                <p className="text-primary font-bold text-lg">Deep Clean &amp; Restore</p>
                <p className="text-gray-200 text-base leading-relaxed">Steam cleaning, stain removal, odor elimination, leather conditioning — full interior restoration.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            <Link href="/services/exterior-detailing" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/exteriorcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Exterior Detailing</h3>
                <p className="text-primary font-bold text-lg">Shine &amp; Protect</p>
                <p className="text-gray-200 text-base leading-relaxed">Hand wash, clay bar, wax, wheel cleaning, bug &amp; tar removal, tire dressing.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>

            <Link href="/services/paint-protection" className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition min-h-[320px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-cover bg-top scale-125 origin-top" style={{ backgroundImage: "url('/Paintcard1.jpg')" }} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 flex flex-col items-start gap-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Paint Enhancement &amp;&nbsp;Correction</h3>
                <p className="text-primary font-bold text-lg">Gloss &amp; Protection</p>
                <p className="text-gray-200 text-base leading-relaxed">One-step polish, compound correction, paint sealant — restoring depth and gloss.</p>
                <span className="text-primary text-base font-medium group-hover:underline mt-1">Learn More →</span>
              </div>
            </Link>
          </div>

          {/* Full Package + extra services */}
          <Link href="/services/full-detail-package" className="group mt-8 block rounded-xl border border-white/10 hover:border-primary/50 transition bg-gradient-to-r from-dark-lighter to-dark-light p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Complete Detail Package</h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-3">Full interior deep clean + full exterior detail — the complete JC Mobile Detailing treatment in one visit.</p>
                <p className="text-primary font-bold text-xl">Best Value Package</p>
                <p className="text-gray-400 text-sm mt-1">Pricing depends on vehicle size and condition.</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-primary text-black font-semibold px-8 py-3 rounded-lg group-hover:bg-primary-dark transition text-lg">Get Exact Quote</span>
              </div>
            </div>
          </Link>

          {/* Additional service tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { href: "/services/ceramic-coating", title: "Ceramic Coating", desc: "Long-lasting paint protection against UV, dirt, and water." },
              { href: "/services/clay-seal", title: "Clay & Seal", desc: "Clay bar decontamination + paint sealant or premium hand wax." },
              { href: "/services/maintenance-detail", title: "Maintenance Detail", desc: "Perfect for regular upkeep between full details." },
              { href: "/services/fleet-detailing", title: "Truck / Fleet Detail", desc: "Commercial vehicle detailing for trucks and fleets." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group p-6 rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark-lighter">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition">{s.title} →</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">87 five-star reviews and counting. Here&apos;s what Cincinnati drivers say about Juan&apos;s work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Fantastic work done by Juan. I am always happy with the results, the friendly treatment on his part and the care he gives to all the details and the use of high quality products that left my truck even better than the day I bought it. Super recommended.",
                name: "JC Customer",
              },
              {
                text: "I can't say enough good things about JC Mobile Detailing and Juan's incredible work! My car looked rough after winter — especially my red leather seats — and he completely transformed it. They went from dry and dirty to soft, hydrated, and looking brand new again. Juan is extremely detailed, patient, and takes pride in his work.",
                name: "Karina Aulis",
              },
              {
                text: "JC did an amazing job on my vehicles. The attention to detail was next level. From the interior to the exterior, everything looked spotless and refreshed. They arrived on time, were professional, and clearly take pride in their work. My car looks better than it has in a long time.",
                name: "Obet Osorio",
              },
              {
                text: "Juan drove to my house to detail my car, which made the whole experience incredibly convenient and hassle-free. My car looks brand new. He removed every single dog hair and every food crumb, leaving it completely spotless. It honestly looks even better than when I first bought it.",
                name: "Cristal Elias",
              },
              {
                text: "Juan did an amazing job. My car looks brand-new and you can tell he really cares about the details. He was on time, very professional and the result was even better than I expected. I'll definitely keep booking with him.",
                name: "Linda Marenco",
              },
            ].map((review) => (
              <div key={review.name} className="p-6 rounded-xl bg-dark border border-white/5 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <p className="text-primary font-semibold text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Areas We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Serving Cincinnati, OH and surrounding communities — including Northern Kentucky.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/${loc.slug}`} className="p-4 rounded-lg bg-dark-lighter border border-white/5 hover:border-primary/50 transition text-center group">
                <span className="text-white font-semibold group-hover:text-primary transition">{loc.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Book Your <span className="text-primary">Detail</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Join over 1,300 satisfied Cincinnati-area drivers. Book online or reach out directly — Juan will come to you.
          </p>
          <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-10 py-4 rounded-lg hover:bg-primary-dark transition text-xl">
            BOOK YOUR DETAIL NOW
          </Link>
          <div className="mt-8 text-sm text-gray-500">
            Cincinnati, OH &amp; Northern Kentucky &nbsp;|&nbsp; Mobile Service — We Come to You
          </div>
        </div>
      </section>
    </>
  );
}
