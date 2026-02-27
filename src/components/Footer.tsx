import { Link } from 'react-router-dom';
import { Hexagon, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-alu-blue-light border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Hexagon className="w-8 h-8 text-alu-accent" />
              <span className="heading-display text-2xl font-bold text-white tracking-tight">
                LKD
              </span>
            </Link>
            <p className="text-alu-silver-dark text-sm leading-relaxed">
              Strength in Every Frame. We deliver premium aluminum solutions for commercial and residential projects with unmatched precision and quality.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-alu-silver-dark hover:text-alu-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-alu-silver-dark hover:text-alu-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-alu-silver-dark hover:text-alu-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-alu-silver-dark hover:text-alu-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-display text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-alu-silver-dark hover:text-alu-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-display text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Design & Engineering', 'Custom Fabrication', 'Professional Installation', 'Maintenance & Repair'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-alu-silver-dark hover:text-alu-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-display text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.app.goo.gl/rxyvXoHBVC81qzot6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-alu-silver-dark hover:text-alu-accent transition-colors"
                >
                  <MapPin className="w-5 h-5 text-alu-accent shrink-0" />
                  <span>B1/2 Silver BusinessHub, Mota varacha, Surat</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-sm text-alu-silver-dark hover:text-alu-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-alu-accent shrink-0" />
                  <span>+91 7621800755</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@lkd.com"
                  className="flex items-center gap-3 text-sm text-alu-silver-dark hover:text-alu-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-alu-accent shrink-0" />
                  <span>info@lkd.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-alu-silver-dark text-sm">
            &copy; {new Date().getFullYear()} LKD Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-alu-silver-dark">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
