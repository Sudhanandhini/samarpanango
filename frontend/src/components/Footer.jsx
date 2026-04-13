import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">S</span>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-lg leading-tight">Samarpana</div>
              <div className="text-xs text-gray-400">NGO | Serving Humanity</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Samarpana is dedicated to empowering communities through education, health, and sustainable development programs across Karnataka.
          </p>
          <div className="flex gap-3 mt-5">
            {['f', 'tw', 'ig', 'yt'].map((s, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors text-xs font-bold">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Contact Us', path: '/contact' },
              { label: 'Gallery', path: '/gallery' },
              { label: 'Reports & Documents', path: '/reports' },
              { label: 'Get Involved', path: '/get-involved' },
            ].map(link => (
              <li key={link.label}>
                <Link to={link.path} className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors">
                  <ArrowRight size={14} className="text-accent" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-5">Our Programs</h4>
          <ul className="space-y-2.5">
            {[
              { label: 'Education Programs', path: '/programs/ongoing/education' },
              { label: 'Women Empowerment', path: '/programs/ongoing/women' },
              { label: 'Health Programs', path: '/programs/ongoing/health' },
              { label: 'Skill Development', path: '/programs/ongoing/skill' },
              { label: 'Community Development', path: '/programs/ongoing/community' },
            ].map(link => (
              <li key={link.label}>
                <Link to={link.path} className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors">
                  <ArrowRight size={14} className="text-accent" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <span className="text-gray-400 text-sm">Bangalore, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:9483700272" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Mr. Ramdas M: +91 94837 00272
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:samarpana2000@gmail.com" className="text-gray-400 hover:text-accent text-sm transition-colors break-all">
                samarpana2000@gmail.com
              </a>
            </li>
          </ul>

          {/* Newsletter */}
          {/* <div className="mt-6">
            <p className="text-gray-400 text-xs mb-3">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-light text-white text-sm px-3 py-2 rounded-l-lg outline-none placeholder-gray-500"
              />
              <button className="bg-accent px-4 py-2 rounded-r-lg text-white text-sm font-semibold hover:bg-accent-light transition-colors">
                Go
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Samarpana NGO. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">

            <a href="https://www.sunsys.in" className="hover:text-accent transition-colors">Developed by Sunsys Technologies</a>
       
          </div>
        </div>
      </div>
    </footer>
  )
}
