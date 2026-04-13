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
            {[
              {
                href: 'https://www.facebook.com/samarpanango',
                label: 'Facebook',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                href: 'https://twitter.com/samarpanango',
                label: 'Twitter / X',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: 'https://www.instagram.com/samarpanango',
                label: 'Instagram',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                href: 'https://www.youtube.com/@vilask7880',
                label: 'YouTube',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors text-white"
              >
                {s.icon}
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
