import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, BookOpen, Stethoscope, Wrench, Home as HomeIcon, Star, TrendingUp } from 'lucide-react'

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/picture8.jpg';
import img7 from '../assets/picture7.jpg';

import img8 from '../assets/Picture36.jpg';


const programs = [
  { icon: BookOpen, title: 'Education Programs', desc: 'Empowering children and youth through quality education and scholarships.', color: 'bg-blue-50', iconColor: 'text-blue-600', link: '/programs/ongoing/education' },
  { icon: Heart, title: 'Women Empowerment', desc: 'Building skills and confidence in women for a self-reliant future.', color: 'bg-pink-50', iconColor: 'text-pink-600', link: '/programs/ongoing/women' },
  { icon: Stethoscope, title: 'Health Programs', desc: 'Providing essential healthcare access to underserved communities.', color: 'bg-green-50', iconColor: 'text-green-600', link: '/programs/ongoing/health' },
  { icon: Wrench, title: 'Skill Development', desc: 'Vocational training to create sustainable livelihoods and employment.', color: 'bg-orange-50', iconColor: 'text-orange-600', link: '/programs/ongoing/skill' },
  { icon: HomeIcon, title: 'Community Development', desc: 'Strengthening communities through inclusive infrastructure development.', color: 'bg-purple-50', iconColor: 'text-purple-600', link: '/programs/ongoing/community' },
]

const stats = [
  { value: '5000+', label: 'Education' },
  { value: '3500+', label: 'Women Empowered' },
  { value: '120+', label: 'Health Camps' },
  { value: '100+', label: 'Volunteers' },
]

const testimonials = [
  { name: 'Meena Devi', role: 'Beneficiary – Education Program', text: 'Samarpana helped my daughter attend school when we had no means. Today she is in college and we are so proud.', rating: 5 },
  { name: 'Ravi Kumar', role: 'Volunteer', text: 'Working with Samarpana has been a life-changing experience. The dedication of the team is truly inspiring.', rating: 5 },
  { name: 'Lakshmi Bai', role: 'Women Empowerment Participant', text: 'I learned tailoring skills and now run my own small business. Samarpana gave me confidence and hope.', rating: 5 },
]

const heroSlides = [
  {
    bg: img3,
    tag: 'Serving Humanity',
    title: 'We Are a Non-Profit Organization',
    desc: 'Samarpana NGO works tirelessly to uplift marginalized communities through education, health, and sustainable livelihood programs across Karnataka.',
  },
  {
    bg: img6,
    tag: 'Education & Empowerment',
    title: 'Every Child Deserves a Bright Future',
    desc: 'We provide quality education, scholarships, and learning support to ensure no child is left behind due to poverty.',
  },
  {
    bg: img7,
    tag: 'Community Health',
    title: 'Healthier Communities, Better Lives',
    desc: 'Our health programs bring medical access, awareness, and care to remote villages and underserved populations.',
  },
]

function Counter({ target, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const num = parseInt(target.replace(/\D/g, ''))
        const suffix = target.replace(/[\d]/g, '')
        let current = 0
        const step = Math.ceil(num / 60)
        const timer = setInterval(() => {
          current = Math.min(current + step, num)
          setCount(current + suffix)
          if (current >= num) clearInterval(timer)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{count || '0'}</div>
      <div className="text-gray-300 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const current = heroSlides[slide]

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center wavy-bottom overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(to right, rgb(13 36 24 / 38%) 50%, rgb(13 36 24 / 73%)), url(${s.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block bg-accent/20 border border-accent text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              {current.tag}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {current.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">{current.desc}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="btn-primary">
                Our Programs <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Donate Now
              </Link>
            </div>
          </div>

          {/* Quick stats card */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { icon: BookOpen, label: 'Education', count: '5,000+', color: 'bg-blue-500' },
              { icon: Heart, label: 'Women Empowered', count: '3,500+', color: 'bg-pink-500' },
              { icon: Stethoscope, label: 'Health Camps', count: '120+', color: 'bg-green-500' },
              { icon: Users, label: 'Volunteers', count: '100+', color: 'bg-orange-500' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="font-heading text-2xl font-bold text-white mb-1">{item.count}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === slide ? 'bg-accent w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">About Us</span>
            <h2 className="section-title mb-6">Our goal is to save more lives with your help</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Samarpana has been at the forefront of social development in Karnataka for over two decades. We believe in the power of community-driven change and work hand-in-hand with local populations to identify and address their most pressing needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our approach combines grassroots engagement with professional program management, ensuring that every rupee donated translates into meaningful impact for the communities we serve.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Fundraising', desc: 'Transparent, accountable fund management' },
                { label: 'Volunteers', desc: 'A growing network of dedicated volunteers' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary">
              Read More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <img
              src={img3}
              alt="Children"
              className="rounded-3xl w-full h-96 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-5 text-white shadow-xl">
              <div className="font-heading text-3xl font-bold text-accent">25+</div>
              <div className="text-xs text-gray-300">Years of Dedicated Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Providing humanitarian services<br />to all people is what we do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {programs.map((prog) => (
              <Link
                key={prog.title}
                to={prog.link}
                className={`${prog.color} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-14 h-14 ${prog.color} border-2 border-current/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <prog.icon size={24} className={prog.iconColor} />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{prog.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{prog.desc}</p>
                <div className={`mt-4 text-xs font-semibold ${prog.iconColor} flex items-center justify-center gap-1`}>
                  Learn More <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact - Stats */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">See our impact across Karnataka</h2>
            <p className="text-gray-300">Transparent, measurable outcomes that reflect our commitment to communities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <Counter key={s.label} target={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="section-tag">Gallery</span>
            <h2 className="section-title">Our recent completed projects</h2>
          </div>
          <Link to="/gallery" className="text-primary font-semibold text-sm hover:text-accent transition-colors flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            img1, img2, img3, img4, img5, img6, img7, 
            img8,
            // 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&q=80',
            // 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
          ].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl ${i === 3 ? 'md:col-span-2' : ''}`}>
              <img src={src} alt="" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title mb-12">What people say about our work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#e8a020" className="text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            We always help the needy people who want to support each other
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join us in making a difference. Every contribution, big or small, brings hope and opportunity to thousands of lives across Karnataka.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Donate Now <ArrowRight size={16} /></Link>
            <Link to="/get-involved/volunteer" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors">
              Volunteer <Heart size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="bg-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-widest">Our Esteemed Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Ministry of Tribal Affairs, New Delhi',
              'Karnataka AIDS Prevention Society',
              'NABARD Financial Services',
              'Tektornix / Ralliant Pvt Ltd',
            ].map((p, i) => (
              <div key={i} className="bg-primary-light/30 rounded-xl px-4 py-4 text-center">
                <p className="text-gray-300 text-xs font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
