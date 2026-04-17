import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import logo from "../assets/logo.png"

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    children: [
      { label: 'About Organization', path: '/about/organization' },
      { label: 'Vision & Mission', path: '/about/vision-mission' },
      { label: 'Objectives', path: '/about/objectives' },
      { label: 'Management', path: '/about/management' },
      { label: 'Organization Chart', path: '/about/org-chart' },
      { label: 'Team / HR', path: '/about/team' },
    ],
  },
  {
    label: 'Programs',
    path: '/programs',
    children: [
      {
        label: 'Ongoing Projects',
        path: '/programs/ongoing',
        sub: [
          { label: 'Education Programs', path: '/programs/ongoing/education' },
          { label: 'Women Empowerment', path: '/programs/ongoing/women' },
          { label: 'Health Programs', path: '/programs/ongoing/health' },
          { label: 'Skill Development', path: '/programs/ongoing/skill' },
          { label: 'Community Development', path: '/programs/ongoing/community' },
        ],
      },
      { label: 'Completed Projects', path: '/programs/completed' },
      { label: 'Government Supported Projects', path: '/programs/government' },
    ],
  },
  { label: 'Project Partners', path: '/partners' },
  { label: 'Reports & Documents', path: '/reports' },
  {
    label: 'Get Involved',
    path: '/get-involved',
    children: [
      { label: 'Volunteer', path: '/get-involved/volunteer' },
      { label: 'Career', path: '/get-involved/career' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

const SocialIcon = ({ platform }) => {
  const icons = {
    fb: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    tw: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    yt: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
    wa: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  }
  return icons[platform] || null
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef(null)

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const toggleMobile = (label) => {
    setMobileExpanded(prev => ({ ...prev, [label]: !prev[label] }))
  }

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (item) =>
    location.pathname === item.path ||
    (item.path !== '/' && location.pathname.startsWith(item.path + '/'))

  return (
    <>
      {/* ── Top Info Bar ── cream background with labeled contact sections */}
      <div className="bg-cream hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-stretch justify-between">

          {/* Address */}
          <div className="flex items-center gap-3 py-3 pr-6 border-r border-gray-200">
            <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
              <MapPin size={15} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-0.5">Our Address</p>
              <p className="text-sm font-semibold text-primary leading-none">Raichur Dist, Karnataka — Pin 584128, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 py-3 px-6 border-r border-gray-200">
            <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
              <Phone size={15} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-0.5">Call Us</p>
              <a href="tel:9483700272" className="text-sm font-semibold text-primary hover:text-accent transition-colors leading-none">
                +91 94837 00272
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 py-3 px-6 border-r border-gray-200">
            <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
              <Mail size={15} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-none mb-0.5">Email</p>
              <a href="mailto:samarpana2000@gmail.com" className="text-sm font-semibold text-primary hover:text-accent transition-colors leading-none">
                samarpana2000@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 py-3 pl-6">
            {[
              { platform: 'tw', href: 'https://twitter.com/samarpanango',        label: 'Twitter'   },
              { platform: 'wa', href: 'https://wa.me/919483700272',               label: 'WhatsApp'  },
              { platform: 'ig', href: 'https://www.instagram.com/samarpanango', label: 'Instagram' },
              { platform: 'yt', href: 'https://www.youtube.com/@vilask7880',     label: 'YouTube'   },
            ].map(s => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Nav ── gold/accent background */}
      <header className={`bg-accent sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-28 md:h-[100px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Samarpana Logo" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`relative flex items-center gap-1 px-3 py-2 text-[17px] font-semibold rounded-lg transition-all duration-200
                    ${isActive(item)
                      ? 'text-primary bg-black/10'
                      : 'text-primary hover:bg-black/10'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                  {isActive(item) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-[calc(100%+6px)] left-0 bg-white shadow-xl rounded-2xl border border-gray-100 min-w-[230px] py-2 z-50">
                    <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                    {item.children.map((child, idx) => (
                      <div key={child.label}>
                        {idx > 0 && child.sub && <div className="mx-3 my-1 border-t border-gray-50" />}
                        <Link
                          to={child.path}
                          className="flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-700 hover:bg-primary hover:text-white transition-all duration-150 mx-1 rounded-xl group/item"
                        >
                          <span>{child.label}</span>
                          {child.sub && <ChevronDown size={11} className="-rotate-90 opacity-50 group-hover/item:opacity-100" />}
                        </Link>
                        {child.sub && (
                          <div className="mx-3 mb-1 pl-3 border-l-2 border-accent/30">
                            {child.sub.map(s => (
                              <Link key={s.label} to={s.path} className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-500 hover:text-accent transition-colors">
                                <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Donate button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/donate"
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200"
            >
              Donate Now
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-primary hover:bg-black/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${isActive(item) ? 'text-accent' : 'text-gray-800'}`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button onClick={() => toggleMobile(item.label)} className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded[item.label] ? 'rotate-180 text-accent' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded[item.label] && (
                    <div className="bg-gray-50 rounded-xl mb-2 py-1">
                      {item.children.map(child => (
                        <div key={child.label}>
                          <Link to={child.path} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary font-medium transition-colors">
                            {child.label}
                          </Link>
                          {child.sub && child.sub.map(s => (
                            <Link key={s.label} to={s.path} className="flex items-center gap-1.5 pl-7 pr-4 py-1.5 text-xs text-gray-500 hover:text-accent transition-colors">
                              <span className="w-1 h-1 rounded-full bg-accent/50" />
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <Link to="/contact" className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold w-full text-sm">
                Donate Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
