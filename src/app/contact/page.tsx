import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | JC Mobile Detailing — Cincinnati, OH",
  description: "Book a detail with JC Mobile Detailing in Cincinnati, OH. Contact Juan Cruz for mobile interior & exterior detailing, ceramic coating, and more.",
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to get your vehicle detailed? Book online or reach out directly — Juan will come to you anywhere in the Cincinnati area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {[
              { icon: <MapPin className="w-6 h-6" />, label: "Service Area", content: <span className="text-white">Cincinnati, OH &amp; Greater Cincinnati Area (incl. Northern Kentucky)</span> },
              { icon: <Clock className="w-6 h-6" />, label: "Hours", content: <span className="text-white">Monday – Sunday: By Appointment</span> },
              { icon: <Mail className="w-6 h-6" />, label: "Email", content: <a href="mailto:jcmobiledetailing@gmail.com" className="text-white hover:text-primary transition">jcmobiledetailing@gmail.com</a> },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-dark-lighter border border-white/5">
                <div className="text-primary mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
              <p className="text-white font-semibold mb-2">Owned &amp; Operated by Juan Cruz</p>
              <p className="text-gray-300 text-sm">4+ years experience · 87 five-star reviews · 1,300+ cars detailed in Cincinnati, OH</p>
            </div>

            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg w-full sm:w-auto">
              Book Your Detail Online
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197539.4!2d-84.67!3d39.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JC Mobile Detailing — Cincinnati, OH"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
