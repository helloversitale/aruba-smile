import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,25%,15%)] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path
                  d="M12 8C10 8 8 10 8 14C8 18 10 28 14 32C16 34 17 30 18 26C18.5 24 19.5 24 20 24C20.5 24 21.5 24 22 26C23 30 24 34 26 32C30 28 32 18 32 14C32 10 30 8 28 8C26 8 24 10 20 10C16 10 14 8 12 8Z"
                  fill="hsl(190, 100%, 42%)"
                />
              </svg>
              <span className="text-lg font-bold text-white">Dental Clinic</span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional dental care with a gentle touch. Your smile is our passion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <a href="tel:+2975821234" className="hover:text-primary transition-colors">
                  +297 582 1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:info@dentalclinic.com" className="hover:text-primary transition-colors">
                  info@dentalclinic.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Main Street 123<br />Oranjestad, Aruba</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Youtube, href: "https://youtube.com" },
                { icon: Facebook, href: "https://facebook.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-white mb-2">Opening Hours:</p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
