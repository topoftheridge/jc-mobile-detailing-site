import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// [[CONTACT_PAGE]]

export const metadata: Metadata = {
  title: "Contact Us | [[BUSINESS_NAME]]",
  description: "Get in touch with [[BUSINESS_NAME]] in [[CITY]], [[STATE]]. Call [[PHONE_DISPLAY]]. Open [[HOURS]].",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            [[CONTACT_INTRO]]
            {/* e.g. "Ready to give your vehicle the Car Candy treatment? Reach out today!" */}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <Phone className="w-6 h-6" />, label: "Phone", content: (
                <a href="tel:[[PHONE_LINK]]" className="text-white hover:text-primary transition font-semibold">[[PHONE_DISPLAY]]</a>
              )},
              { icon: <Mail className="w-6 h-6" />, label: "Email", content: (
                <a href="mailto:[[EMAIL]]" className="text-white hover:text-primary transition">[[EMAIL]]</a>
              )},
              { icon: <MapPin className="w-6 h-6" />, label: "Location", content: <span className="text-white">[[CITY]], [[STATE]]</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">[[HOURS_FULL]]</span> },
              {/* [[HOURS_FULL]] e.g. "Monday – Sunday: 8:00 AM – 6:00 PM" */}
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Get a Free Quote
            </Link>
          </div>

          {/* [[MAP_EMBED]] — Replace the src with a Google Maps embed for the client's location.
              Go to Google Maps → share → embed a map → copy the iframe src URL */}
          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="[[GOOGLE_MAPS_EMBED_URL]]"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="[[BUSINESS_NAME]] Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
