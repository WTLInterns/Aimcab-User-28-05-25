"use client";
import Link from "next/link";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, Globe, Youtube } from "lucide-react";
import { useRouter } from 'next/navigation'; // Updated import

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-slate-800 text-gray-300 py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About AIMCAB</h3>
            <p className="text-gray-400 mb-6">
              We provide premium transportation services with comfort and reliability. Enjoy seamless travel experiences
              with our professional drivers and modern fleet.
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/Aimcab" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/aim_cab" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/aim-cab-77356b208/" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/aimcabs/" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@AimCab" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-md transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Explore Links</h3>
            <ul className="space-y-2">
              {["Pune", "Mumbai"].map((item) => (
                <li key={item}>
                  <div 
                    onClick={() => router.push(`/${item.toWellFormed()}`)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" /> {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2">
    {[
      { name: "About", path: "/aboutus" },
      { name: "Services", path: "#services" },
      { name: "Contact Us", path: "/Contact" }
    ].map((item) => (
      <li key={item.name}>
        <Link href={item.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
          <ArrowRight className="mr-2 h-4 w-4" /> {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>City Vista, Kharadi, Pune</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="mailto:aimcabhelp@gmail.com" className="hover:text-white transition-colors">
                  info@webutsav.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="tel:+91 9130030054" className="hover:text-white transition-colors">
                  +91 9130030054
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-3 h-5 w-5 text-red-500 flex-shrink-0" />
                <a
                  href="https://webutsav.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                webutsav.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center">
          <li> Designed by <a
                  href="https://webutsav.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#f5e537] transition-colors"
                >
                Webutsav.com
                </a></li>
        </div>
        <div className="border-slate-700 pt-6 text-center">
          <p>© {new Date().getFullYear()} Webutsav.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}