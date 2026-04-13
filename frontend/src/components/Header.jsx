import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Heart } from 'lucide-react'

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
    label: 'Programs / Services',
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
      {/* Top Bar */}
      <div className="bg-primary-dark text-white text-xs py-2 hidden md:block border-b border-primary-light/30">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin size={11} className="text-accent" />
              Bangalore, Karnataka, India
            </span>
            <span className="w-px h-3 bg-white/20" />
            <a href="mailto:samarpana2000@gmail.com" className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors duration-200">
              <Mail size={11} className="text-accent" />
              samarpana2000@gmail.com
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="tel:9483700272" className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors duration-200">
              <Phone size={11} className="text-accent" />
              +91 94837 00272
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-gray-400 text-[11px] mr-1 tracking-wide">Follow Us</span>
            {['fb', 'tw', 'ig', 'yt'].map(s => (
              <a
                key={s}
                href="#"
                className="w-6 h-6 bg-primary-light/60 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 text-white"
              >
                <SocialIcon platform={s} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm'
        }`}
      >
        {/* Accent line at top */}
        <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary-light" />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-shadow duration-300">
              <span className="text-white font-heading font-bold text-xl">S</span>
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 group-hover:border-accent transition-colors duration-300" />
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-primary text-[17px] group-hover:text-primary-light transition-colors duration-200">
                Samarpana
              </div>
              <div className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                NGO · Serving Humanity
              </div>
            </div>
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
                  className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group
                    ${isActive(item)
                      ? 'text-accent bg-accent/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180 text-accent' : ''}`}
                    />
                  )}
                  {/* Active underline */}
                  {isActive(item) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-[calc(100%+6px)] left-0 bg-white shadow-xl rounded-2xl border border-gray-100 min-w-[230px] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Triangle pointer */}
                    <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                    {item.children.map((child, idx) => (
                      <div key={child.label}>
                        {idx > 0 && child.sub && (
                          <div className="mx-3 my-1 border-t border-gray-50" />
                        )}
                        <Link
                          to={child.path}
                          className="flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-700 hover:bg-primary hover:text-white transition-all duration-150 mx-1 rounded-xl group/item"
                        >
                          <span>{child.label}</span>
                          {child.sub && (
                            <ChevronDown size={11} className="-rotate-90 opacity-50 group-hover/item:opacity-100" />
                          )}
                        </Link>
                        {child.sub && (
                          <div className="mx-3 mb-1 pl-3 border-l-2 border-accent/30">
                            {child.sub.map(s => (
                              <Link
                                key={s.label}
                                to={s.path}
                                className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-500 hover:text-accent transition-colors duration-150"
                              >
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
              to="/contact"
              className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-accent/30 hover:shadow-lg transition-all duration-200 group"
            >
              <Heart size={14} className="group-hover:scale-110 transition-transform duration-200" />
              Donate Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-primary hover:bg-gray-100 transition-colors"
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
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        isActive(item) ? 'text-accent' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => toggleMobile(item.label)}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileExpanded[item.label] ? 'rotate-180 text-accent' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded[item.label] && (
                    <div className="bg-gray-50 rounded-xl mb-2 py-1">
                      {item.children.map(child => (
                        <div key={child.label}>
                          <Link
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary font-medium transition-colors"
                          >
                            {child.label}
                          </Link>
                          {child.sub && child.sub.map(s => (
                            <Link
                              key={s.label}
                              to={s.path}
                              className="flex items-center gap-1.5 pl-7 pr-4 py-1.5 text-xs text-gray-500 hover:text-accent transition-colors"
                            >
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
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 btn-primary w-full text-sm"
              >
                <Heart size={14} />
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
