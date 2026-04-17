import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Heart, Briefcase, CheckCircle, ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'
import banner from "../assets/banner.jpg"


function VolunteerPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="section-tag">Volunteer</span>
          <h2 className="section-title mb-6">Join Our Family of Volunteers</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Volunteering with Samarpana is one of the most rewarding ways to give back to society. Whether you have a few hours a week or can commit to long-term engagement, there's a place for you in our team.
          </p>

          <h3 className="font-semibold text-primary mb-4">How You Can Help</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Teaching and tutoring children in rural schools',
              'Organizing health camps and awareness drives',
              'Supporting women skill development workshops',
              'Documentation, photography & communication',
              'Event coordination and program support',
              'Fundraising and donor engagement',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: '200+', label: 'Active Volunteers' },
              { value: '25+', label: 'Programs Supported' },
              { value: '50+', label: 'Villages Reached' },
            ].map((s, i) => (
              <div key={i} className="bg-primary rounded-2xl p-4 text-center">
                <div className="font-heading text-2xl font-bold text-accent">{s.value}</div>
                <div className="text-gray-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
          <h3 className="font-heading text-xl font-bold text-primary mb-6">Volunteer Registration</h3>
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={28} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-primary text-lg mb-2">Thank You!</h4>
              <p className="text-gray-500 text-sm">We'll get in touch with you shortly regarding volunteering opportunities.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.name]}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <select
                  value={form.area}
                  onChange={e => setForm({ ...form, area: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors text-gray-700"
                >
                  <option value="">Select area</option>
                  {['Education', 'Health', 'Women Empowerment', 'Skill Development', 'Community Development', 'Others'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about yourself..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Submit Application <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function CareerPage() {
  const openings = [
    { title: 'Program Officer – Education', location: 'Bangalore', type: 'Full Time', exp: '2–4 years' },
    { title: 'Field Coordinator – Health Programs', location: 'Ramanagara', type: 'Full Time', exp: '1–3 years' },
    { title: 'Social Worker – Women Empowerment', location: 'Tumkur', type: 'Full Time', exp: '2–5 years' },
    { title: 'Accounts Executive', location: 'Bangalore', type: 'Full Time', exp: '2–4 years' },
    { title: 'Digital Communications Officer', location: 'Bangalore / Remote', type: 'Part Time', exp: '1–2 years' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="section-tag">Career</span>
        <h2 className="section-title mb-4">Work With Purpose</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join Samarpana's team and build a meaningful career in the development sector. We offer a collaborative, mission-driven work environment.
        </p>
      </div>

      <div className="grid gap-5 mb-16">
        {openings.map((job, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-semibold text-primary text-lg">{job.title}</h3>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                <span>📍 {job.location}</span>
                <span>⏰ {job.type}</span>
                <span>💼 {job.exp} experience</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-sm py-2">
              Apply Now <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-cream rounded-3xl p-10 text-center">
        <h3 className="font-heading text-2xl font-bold text-primary mb-4">Don't see a suitable role?</h3>
        <p className="text-gray-600 mb-6">Send us your resume and we'll reach out when a suitable opportunity arises.</p>
        <a href="mailto:samarpana2000@gmail.com" className="btn-primary inline-flex">
          Send Resume <Send size={16} />
        </a>
      </div>
    </div>
  )
}

export default function GetInvolved() {
  const { type } = useParams()

  const isCareer = type === 'career'
  const title = isCareer ? 'Career' : 'Volunteer'
  const bgImage = banner

  return (
    <div>
      <PageHero
        title="Get Involved"
        breadcrumb={[{ label: 'Get Involved' }, { label: title }]}
        bgImage={bgImage}
      />

      {/* Tab nav */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 py-3">
          <Link
            to="/get-involved/volunteer"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              !isCareer ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart size={16} /> Volunteer
          </Link>
          <Link
            to="/get-involved/career"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isCareer ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase size={16} /> Career Opportunities
          </Link>
        </div>
      </div>

      {isCareer ? <CareerPage /> : <VolunteerPage />}
    </div>
  )
}
