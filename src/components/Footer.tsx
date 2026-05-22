import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { locations } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="mb-4">
              <Image src="/logoheader.png" alt="JC Mobile Detailing" width={160} height={55} className="h-12 w-auto" />
            </div>
            <p className="text-sm mb-4">Top-rated mobile auto detailing in Cincinnati, OH. We bring showroom-quality results to your driveway — 87 five-star reviews and 1,300+ cars detailed.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0" /> Cincinnati, OH &amp; Surrounding Areas</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Mon–Sun: By Appointment</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+15138675309" className="hover:text-primary transition">Call to Book</a>
              </div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:jcmobiledetailing@gmail.com" className="hover:text-primary transition">jcmobiledetailing@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/get-quote" className="hover:text-primary transition">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/full-detail-package" className="hover:text-primary transition">Complete Detail Package</Link></li>
              <li><Link href="/services/interior-detailing" className="hover:text-primary transition">Interior Detailing</Link></li>
              <li><Link href="/services/exterior-detailing" className="hover:text-primary transition">Exterior Detailing</Link></li>
              <li><Link href="/services/paint-protection" className="hover:text-primary transition">Paint Enhancement &amp; Correction</Link></li>
              <li><Link href="/services/ceramic-coating" className="hover:text-primary transition">Ceramic Coating</Link></li>
              <li><Link href="/services/clay-seal" className="hover:text-primary transition">Clay &amp; Seal</Link></li>
              <li><Link href="/services/maintenance-detail" className="hover:text-primary transition">Maintenance Detail</Link></li>
              <li><Link href="/services/fleet-detailing" className="hover:text-primary transition">Truck / Fleet Detail</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/${loc.slug}`} className="hover:text-primary transition">{loc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JC Mobile Detailing. All rights reserved. · Cincinnati, OH</p>
        </div>
      </div>
    </footer>
  );
}
