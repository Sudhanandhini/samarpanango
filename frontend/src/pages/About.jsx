import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Target, Eye, CheckCircle, Users, GitBranch, UserCheck, ArrowRight } from 'lucide-react'

const sections = {
  organization: {
    title: 'About Organization',
    icon: Users,
    content: (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary mb-5">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Samarpana is a non-governmental organization based in Bangalore, Karnataka, committed to the holistic development of marginalized and underserved communities. Founded with the spirit of selfless service, we have been working for over two decades to bring about meaningful and sustainable change.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement programs in the areas of education, women empowerment, health, skill development, and community development. Our work is guided by the principles of equity, inclusion, and community participation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Samarpana operates through a network of dedicated staff, volunteers, and community partners across Karnataka, reaching thousands of beneficiaries every year.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80"
            alt="About Samarpana"
            className="rounded-3xl w-full h-80 object-cover shadow-xl"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: 'Founded', value: '2000' },
              { label: 'Districts Covered', value: '12+' },
              { label: 'Beneficiaries', value: '50,000+' },
              { label: 'Projects Completed', value: '80+' },
            ].map((s, i) => (
              <div key={i} className="bg-primary rounded-xl p-4 text-center">
                <div className="font-heading text-2xl font-bold text-accent">{s.value}</div>
                <div className="text-gray-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  'vision-mission': {
    title: 'Vision & Mission',
    icon: Eye,
    content: (
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-primary rounded-3xl p-8 text-white">
          <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-5">
            <Eye size={24} className="text-accent" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            A just, equitable, and inclusive society where every individual, irrespective of caste, gender, or socioeconomic status, has access to opportunities for a dignified and fulfilling life.
          </p>
        </div>
        <div className="bg-accent rounded-3xl p-8 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
            <Target size={24} className="text-white" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-white/90 leading-relaxed">
            To empower marginalized communities through integrated development programs in education, health, livelihood, and women empowerment, fostering self-reliance and sustainable growth in partnership with local stakeholders.
          </p>
        </div>
        <div className="md:col-span-2 bg-cream rounded-3xl p-8">
          <h3 className="font-heading text-2xl font-bold text-primary mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Integrity', 'Inclusiveness', 'Accountability', 'Community Participation', 'Transparency', 'Sustainability'].map(v => (
              <div key={v} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-accent shrink-0" />
                <span className="text-gray-700 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  objectives: {
    title: 'Objectives',
    icon: Target,
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Samarpana's work is guided by a set of strategic objectives that drive all our programs and partnerships:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Education Access', desc: 'Ensure that children from marginalized families have access to quality education and remain in school through scholarships and support programs.' },
            { title: 'Women Empowerment', desc: 'Build the capacities and confidence of women through skill training, SHG formation, and awareness programs for financial independence.' },
            { title: 'Community Health', desc: 'Improve health outcomes in underserved communities through preventive health programs, mobile medical units, and health awareness camps.' },
            { title: 'Skill Development', desc: 'Provide vocational training to unemployed youth and adults to enhance employability and generate sustainable livelihoods.' },
            { title: 'Community Infrastructure', desc: 'Support the development of community assets and infrastructure to improve quality of life in rural and peri-urban areas.' },
            { title: 'Government Convergence', desc: 'Facilitate community access to government schemes and entitlements to ensure maximum benefit from public welfare programs.' },
          ].map((obj, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="font-semibold text-primary mb-2">{obj.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  management: {
    title: 'Management',
    icon: UserCheck,
    content: (
      <div>
        <p className="text-gray-600 mb-10 max-w-2xl">Our dedicated leadership team steers Samarpana's mission with vision and integrity.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Mr. Ramdas M', role: 'Founder & President', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
            { name: 'Ms. Sudha Rao', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
            { name: 'Mr. Anil Kumar', role: 'Program Manager', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
            { name: 'Ms. Kavitha S', role: 'Finance Head', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
            { name: 'Mr. Shankar B', role: 'Field Coordinator', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
            { name: 'Ms. Priya T', role: 'HR & Admin', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80' },
          ].map((m, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-cream" />
              <h4 className="font-semibold text-primary">{m.name}</h4>
              <p className="text-gray-500 text-sm">{m.role}</p>
              <div className="flex justify-center gap-2 mt-3">
                {['tw', 'wa', 'in'].map(s => (
                  <a key={s} href="#" className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[9px] text-gray-500 hover:bg-accent hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'org-chart': {
    title: 'Organization Chart',
    icon: GitBranch,
    content: (
      <div className="text-center">
        <p className="text-gray-600 mb-10">Samarpana's organizational structure ensures clear accountability and effective program delivery.</p>
        <div className="bg-cream rounded-3xl p-10 overflow-x-auto">
          {/* Simple org chart */}
          <div className="flex flex-col items-center gap-4 min-w-[600px]">
            <div className="bg-primary text-white px-8 py-3 rounded-xl font-semibold">General Body</div>
            <div className="w-0.5 h-6 bg-gray-400" />
            <div className="bg-primary-light text-white px-8 py-3 rounded-xl font-semibold">Board of Trustees</div>
            <div className="w-0.5 h-6 bg-gray-400" />
            <div className="bg-accent text-white px-8 py-3 rounded-xl font-semibold">Executive Director</div>
            <div className="flex gap-4 items-start">
              <div className="w-16 h-0.5 bg-gray-400 mt-3" />
              <div className="w-0.5 h-6 bg-gray-400" />
              <div className="w-16 h-0.5 bg-gray-400 mt-3" />
            </div>
            <div className="flex gap-6">
              {['Program Manager', 'Finance Head', 'HR & Admin'].map(r => (
                <div key={r} className="bg-white border-2 border-primary px-4 py-2 rounded-xl text-primary text-sm font-medium">{r}</div>
              ))}
            </div>
            <div className="flex gap-6">
              {['Field Coordinators', 'Accounts Team', 'Support Staff'].map(r => (
                <div key={r} className="bg-gray-100 px-4 py-2 rounded-xl text-gray-600 text-xs">{r}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  team: {
    title: 'Team / HR',
    icon: Users,
    content: (
      <div>
        <p className="text-gray-600 mb-10 max-w-2xl">Our team of passionate professionals and volunteers drives our mission forward every day.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Ramdas M', designation: 'President', dept: 'Leadership' },
            { name: 'Sudha Rao', designation: 'Executive Director', dept: 'Leadership' },
            { name: 'Anil Kumar', designation: 'Program Manager', dept: 'Programs' },
            { name: 'Kavitha S', designation: 'Finance Head', dept: 'Finance' },
            { name: 'Shankar B', designation: 'Field Coordinator', dept: 'Field Ops' },
            { name: 'Priya T', designation: 'HR Manager', dept: 'HR' },
            { name: 'Raju V', designation: 'Community Mobilizer', dept: 'Field Ops' },
            { name: 'Suma K', designation: 'Social Worker', dept: 'Programs' },
          ].map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">{m.name[0]}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">{m.name}</h4>
              <p className="text-gray-500 text-xs">{m.designation}</p>
              <span className="inline-block mt-2 text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">{m.dept}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

const sectionNav = [
  { key: 'organization', label: 'About Organization', icon: Users },
  { key: 'vision-mission', label: 'Vision & Mission', icon: Eye },
  { key: 'objectives', label: 'Objectives', icon: Target },
  { key: 'management', label: 'Management', icon: UserCheck },
  { key: 'org-chart', label: 'Org Chart', icon: GitBranch },
  { key: 'team', label: 'Team / HR', icon: Users },
]

export default function About() {
  const { section = 'organization' } = useParams()
  const current = sections[section] || sections['organization']

  return (
    <div>
      <PageHero
        title="About Us"
        breadcrumb={[{ label: current.title }]}
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm sticky top-24">
              <div className="bg-primary px-5 py-4">
                <h3 className="text-white font-semibold text-sm">About Us</h3>
              </div>
              <ul>
                {sectionNav.map(nav => (
                  <li key={nav.key}>
                    <Link
                      to={`/about/${nav.key}`}
                      className={`flex items-center gap-3 px-5 py-3.5 text-sm border-b border-gray-50 transition-colors
                        ${section === nav.key ? 'bg-accent/10 text-accent font-semibold border-l-4 border-l-accent' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                    >
                      <nav.icon size={14} />
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8 pb-4 border-b border-gray-100">
                {current.title}
              </h2>
              {current.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
