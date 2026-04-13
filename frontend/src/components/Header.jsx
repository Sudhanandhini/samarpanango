import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

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
  {
    label: 'Project Partners',
    path: '/partners',
  },
  {
    label: 'Reports & Documents',
    path: '/reports',
  },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
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

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1"><MapPin size={12} /> Bangalore, Karnataka, India</span>
            <a href="mailto:samarpana2000@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail size={12} /> samarpana2000@gmail.com
            </a>
            <a href="tel:9483700272" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={12} /> +91 94837 00272
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400">Follow Us:</span>
            {['fb', 'tw', 'ig', 'yt'].map(s => (
              <a key={s} href="#" className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors text-[10px] font-bold">
                {s === 'fb' ? 'f' : s === 'tw' ? 't' : s === 'ig' ? 'ig' : 'yt'}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">S</span>
            </div>
            <div>
              <div className="font-heading font-bold text-primary text-lg leading-tight">Samarpana</div>
              <div className="text-xs text-gray-500 leading-tight">NGO | Serving Humanity</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') 
                      ? 'text-accent' : 'text-gray-700 hover:text-primary'}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl rounded-xl border border-gray-100 min-w-[220px] py-2 z-50">
                    {item.children.map(child => (
                      <div key={child.label}>
                        <Link
                          to={child.path}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          <span>{child.label}</span>
                          {child.sub && <ChevronDown size={12} className="-rotate-90" />}
                        </Link>
                        {child.sub && (
                          <div className="pl-4 border-l-2 border-accent ml-4 mb-1">
                            {child.sub.map(s => (
                              <Link
                                key={s.label}
                                to={s.path}
                                className="block px-3 py-1.5 text-xs text-gray-600 hover:text-accent transition-colors"
                              >
                                → {s.label}
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
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm py-2.5">
              Donate Now ↗
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50">
                <div className="flex items-center justify-between px-4 py-3">
                  <Link to={item.path} className="text-sm font-medium text-gray-800">{item.label}</Link>
                  {item.children && (
                    <button onClick={() => toggleMobile(item.label)} className="p-1 text-gray-500">
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded[item.label] ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded[item.label] && (
                  <div className="bg-gray-50 pb-2">
                    {item.children.map(child => (
                      <div key={child.label}>
                        <Link to={child.path} className="block px-8 py-2 text-sm text-gray-600 hover:text-primary">
                          {child.label}
                        </Link>
                        {child.sub && child.sub.map(s => (
                          <Link key={s.label} to={s.path} className="block px-12 py-1.5 text-xs text-gray-500 hover:text-accent">
                            → {s.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">Donate Now ↗</Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
