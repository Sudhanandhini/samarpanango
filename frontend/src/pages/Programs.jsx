import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { BookOpen, Heart, Stethoscope, Wrench, Home, ArrowRight, CheckCircle, Calendar, MapPin } from 'lucide-react'

const programTypes = {
  education: {
    title: 'Education Programs',
    icon: BookOpen,
    color: 'bg-blue-500',
    desc: 'Our education programs ensure that every child, regardless of socioeconomic background, has access to quality education.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    activities: [
      'Scholarship programs for meritorious students from low-income families',
      'Bridge course programs for school dropouts',
      'Computer literacy programs in rural schools',
      'Library and learning material support',
      'Teacher training and capacity building',
      'Awareness campaigns on girl child education',
    ],
  },
  women: {
    title: 'Women Empowerment',
    icon: Heart,
    color: 'bg-pink-500',
    desc: 'We empower women through skill training, SHG formation, awareness programs, and economic opportunities.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    activities: [
      'Self Help Group (SHG) formation and capacity building',
      'Vocational skill training (tailoring, handicrafts, food processing)',
      'Legal awareness and rights education',
      'Microfinance and savings mobilization',
      'Leadership development programs',
      'Anti-domestic violence awareness campaigns',
    ],
  },
  health: {
    title: 'Health Programs',
    icon: Stethoscope,
    color: 'bg-green-500',
    desc: 'Our health programs bring essential medical services and health awareness to communities with limited healthcare access.',
    image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80',
    activities: [
      'Mobile medical camps in remote villages',
      'Maternal and child health programs',
      'Nutrition programs for children and pregnant women',
      'HIV/AIDS awareness (in partnership with Karnataka AIDS Prevention Society)',
      'Health insurance enrollment drives',
      'Mental health awareness programs',
    ],
  },
  skill: {
    title: 'Skill Development',
    icon: Wrench,
    color: 'bg-orange-500',
    desc: 'We provide vocational training and skill development to unemployed youth and adults, enabling sustainable livelihoods.',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
    activities: [
      'Vocational training in construction, plumbing, and electrical work',
      'Computer and digital literacy courses',
      'Entrepreneurship development programs',
      'Placement assistance and job linkages',
      'Industry partnership programs',
      'Financial literacy workshops',
    ],
  },
  community: {
    title: 'Community Development',
    icon: Home,
    color: 'bg-purple-500',
    desc: 'We strengthen communities through infrastructure development, environment protection, and social cohesion initiatives.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    activities: [
      'Rural infrastructure development (roads, sanitation, water)',
      'Environment awareness and plantation drives',
      'Tribal community welfare programs',
      'Community library and recreation centers',
      'Disaster preparedness and relief',
      'Social harmony and peace-building initiatives',
    ],
  },
}

const projectLists = {
  ongoing: [
    { title: 'Education Support Program – Bellary', type: 'Education', status: 'Ongoing', year: '2022–Present', location: 'Bellary District', partner: 'Ministry of Tribal Affairs' },
    { title: 'Women Empowerment & SHG Network', type: 'Women Empowerment', status: 'Ongoing', year: '2020–Present', location: 'Bangalore Rural', partner: 'NABARD' },
    { title: 'Mobile Health Clinics – Rural Karnataka', type: 'Health', status: 'Ongoing', year: '2021–Present', location: 'Ramanagara & Tumkur', partner: 'Karnataka AIDS Prevention Society' },
    { title: 'Youth Skill Development Initiative', type: 'Skill Development', status: 'Ongoing', year: '2023–Present', location: 'Multiple Districts', partner: 'Tektornix / Ralliant Pvt Ltd' },
    { title: 'Tribal Community Welfare Program', type: 'Community', status: 'Ongoing', year: '2019–Present', location: 'Hassan & Chikmagalur', partner: 'Ministry of Tribal Affairs' },
  ],
  completed: [
    { title: 'Mid-Day Meal Program – 5 Schools', type: 'Education', status: 'Completed', year: '2018–2021', location: 'Kolar District', partner: 'District Administration' },
    { title: 'Water & Sanitation Project (WASH)', type: 'Community', status: 'Completed', year: '2017–2020', location: 'Raichur', partner: 'NABARD' },
    { title: 'HIV/AIDS Awareness – 50 Villages', type: 'Health', status: 'Completed', year: '2016–2019', location: 'North Karnataka', partner: 'Karnataka AIDS Prevention Society' },
    { title: 'Tribal Girl Child Education', type: 'Education', status: 'Completed', year: '2015–2018', location: 'Kodagu', partner: 'Ministry of Tribal Affairs' },
  ],
  government: [
    { title: 'Integrated Child Development Services (ICDS) Support', type: 'Health & Nutrition', status: 'Active', year: '2020–Present', location: 'Multiple Districts', partner: 'Govt. of Karnataka' },
    { title: 'National Rural Livelihood Mission (NRLM)', type: 'Livelihood', status: 'Active', year: '2019–Present', location: 'Rural Karnataka', partner: 'Ministry of Rural Development' },
    { title: 'Tribal Sub-Plan Implementation', type: 'Tribal Development', status: 'Active', year: '2021–Present', location: 'Tribal Taluks', partner: 'Ministry of Tribal Affairs' },
  ],
}

const subNavPrograms = [
  { label: 'Education Programs', key: 'education' },
  { label: 'Women Empowerment', key: 'women' },
  { label: 'Health Programs', key: 'health' },
  { label: 'Skill Development', key: 'skill' },
  { label: 'Community Development', key: 'community' },
]

export default function Programs() {
  const { type } = useParams()

  // If it's a project list type
  if (type === 'ongoing' || type === 'completed' || type === 'government') {
    const projects = projectLists[type] || []
    const titles = { ongoing: 'Ongoing Projects', completed: 'Completed Projects', government: 'Government Supported Projects' }
    return (
      <div>
        <PageHero
          title={titles[type]}
          breadcrumb={[{ label: 'Programs / Services', path: '/programs' }, { label: titles[type] }]}
          bgImage="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80"
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: 'Ongoing Projects', path: '/programs/ongoing' },
              { label: 'Completed Projects', path: '/programs/completed' },
              { label: 'Govt. Supported', path: '/programs/government' },
            ].map(n => (
              <Link
                key={n.label}
                to={n.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  n.path.includes(type) ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {n.label}
              </Link>
            ))}
          </div>

          {/* Sub-programs for ongoing */}
          {type === 'ongoing' && (
            <div className="mb-12">
              <h3 className="font-heading text-xl font-bold text-primary mb-6">Program Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {subNavPrograms.map(p => (
                  <Link
                    key={p.key}
                    to={`/programs/ongoing/${p.key}`}
                    className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:border-accent hover:shadow-md transition-all"
                  >
                    <p className="text-sm font-medium text-gray-700">{p.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-4 justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">{proj.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} className="text-accent" /> {proj.year}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-accent" /> {proj.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center flex-wrap">
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{proj.type}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      proj.status === 'Ongoing' || proj.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>{proj.status}</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                  Partner: <span className="font-medium text-gray-700">{proj.partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Sub-program detail
  const subTypes = Object.keys(programTypes)
  if (subTypes.includes(type)) {
    const prog = programTypes[type]
    return (
      <div>
        <PageHero
          title={prog.title}
          breadcrumb={[
            { label: 'Programs', path: '/programs' },
            { label: 'Ongoing Projects', path: '/programs/ongoing' },
            { label: prog.title }
          ]}
          bgImage={prog.image}
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Sub nav */}
          <div className="flex flex-wrap gap-3 mb-12">
            {subNavPrograms.map(p => (
              <Link
                key={p.key}
                to={`/programs/ongoing/${p.key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  p.key === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {p.label}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className={`w-12 h-12 ${prog.color} rounded-2xl flex items-center justify-center mb-6`}>
                <prog.icon size={24} className="text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-5">{prog.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{prog.desc}</p>
              <h3 className="font-semibold text-primary mb-4">Key Activities</h3>
              <ul className="space-y-3">
                {prog.activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link to="/contact" className="btn-primary text-sm">Get Involved <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div>
              <img src={prog.image} alt={prog.title} className="rounded-3xl w-full h-80 object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default programs landing
  return (
    <div>
      <PageHero
        title="Programs & Services"
        breadcrumb={[{ label: 'Programs & Services' }]}
        bgImage="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { label: 'Ongoing Projects', path: '/programs/ongoing' },
            { label: 'Completed Projects', path: '/programs/completed' },
            { label: 'Govt. Supported', path: '/programs/government' },
          ].map(n => (
            <Link key={n.label} to={n.path} className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-light transition-colors">
              {n.label} <ArrowRight size={12} className="inline" />
            </Link>
          ))}
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(programTypes).map(([key, prog]) => (
            <Link
              key={key}
              to={`/programs/ongoing/${key}`}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${prog.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <prog.icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-2">{prog.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{prog.desc.slice(0, 80)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
