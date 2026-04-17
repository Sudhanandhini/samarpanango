import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Target, Eye, CheckCircle, Users, GitBranch, UserCheck, ArrowRight } from 'lucide-react'
import img2 from '../assets/1.jpg';
import banner from "../assets/banner.jpg"


const sections = {
  organization: {
    title: 'About Organization',
    icon: Users,
    content: (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary mb-5">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Samarpan Abhiwradi Sansthan is a registered voluntary organization established on 05/10/2000–2001 under Section 13 of the Karnataka Societies Registration Act, 1960, with registration number SAU50/2000-2001, at Raichur. The organization is also registered under Section 12AA of the Income Tax Act, 1961 (2007–2008), and Section 80G (2010–2011), enabling donors to avail 50% tax exemption.


          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The organization is recognized by multiple government departments, including the Department of E-Governance, Women and Child Welfare, and Senior Citizens and Disabled Welfare. Since its inception, Samarpan Abhiwradi Sansthan has been actively engaged in social development initiatives.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Samarpana operates through a network of dedicated staff, volunteers, and community partners across Karnataka, reaching thousands of beneficiaries every year.
          </p>
        </div>
        <div>
          <img
            src={img2}
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
           To work for the development of people in rural and urban, providing the education, economic, social and other necessary services. 
          </p>
        </div>
        <div className="bg-accent rounded-3xl p-8 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
            <Target size={24} className="text-white" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-white/90 leading-relaxed">
            To Build & Strengthen Sustainable individual family, institutional and Community initiatives for health and development and management.
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
        <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-10 max-w-3xl">
          <li>To take up special and integrated education for all categories of the Disabled children in the society.</li>
          <li>To take up appropriate sustainable programme for development of formers in the Agriculture.</li>
          <li>To take of appropriate programmes for welfare of Poor and needy women &children in the field of Health, education economic empowerment in rural and urban area.</li>
          <li>To improve the availability of and access to quality health care by the people, especially for those residing in rural areas, the vulnerable women and children.</li>
          <li>To encourage income generating activities   to self help group members, women formers, youths for abolition of poverty.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6">
          <h4 className='text-xl font-bold text-primary'>Area Of Work</h4><br/><br/>
          {[
            { title: 'Education', desc: 'Organization believes that Education is the main filler of the Sustainable development of the society. in this concerned organization basically focused on Education' },
            { title: 'Disablility', desc: 'Organization focusing on disabled persons for their education, health, and skill development programmes. ' },
            { title: 'Health', desc: 'Health is the a big assets of the human being, if the person having a good health he always looking for  independent and development of the family, if the family will grow,  the society will also grow.' },
            { title: 'Agricultural ', desc: 'Agricultural education is a unique combination of agricultural education and training with community based programmes can with the help local people can make a huge difference to people’s lives. So organization more concentration on agricultural education.' },
            { title: 'Trainings', desc: 'Training is one of  the most factor for sharing of knowledge, experience, and information etc.and it is also  key factors in enabling individuals and communities to move towards self sufficiency on their own terms. So organization organize more and more training programmes for Rural youths, women’s,  formers ,teachers, and PRI members in the project area' },
            
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

        {/* President & General Secretary — big cards */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          {[
            { role: 'President', name: 'Chandrappa', color: 'bg-primary' },
            { role: 'General Secretary', name: 'Ramdas', color: 'bg-primary-light' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} rounded-2xl p-6 flex flex-col items-center gap-3 shadow-md text-white`}>
              <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/40 overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="40" cy="30" r="16" fill="white" fillOpacity="0.75"/>
                  <ellipse cx="40" cy="64" rx="24" ry="14" fill="white" fillOpacity="0.5"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg leading-tight">{item.name}</div>
                <div className="text-sm opacity-80 mt-0.5">{item.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Programme Manager & Other Staff — small blocks */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            { role: 'Programme Manager', color: 'bg-accent text-white' },
            { role: 'Other Staff', color: 'bg-gray-700 text-white' },
          ].map((item, i) => (
            <div key={i} className={`${item.color} px-8 py-4 rounded-2xl font-semibold text-base w-full max-w-xs text-center shadow-md`}>
              {item.role}
            </div>
          ))}
        </div>

        {/* Governing Body Members */}
        <div className="mb-8">
          <h4 className="font-heading text-lg font-bold text-primary mb-4">Members of the Management Committee</h4>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3 text-left font-semibold">#</th>
                  <th className="px-5 py-3 text-left font-semibold">Name</th>
                  <th className="px-5 py-3 text-left font-semibold">Designation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Chandrappa', designation: 'President' },
                  { name: 'Prabhu', designation: 'Vice-President' },
                  { name: 'Ramdas', designation: 'General Secretary' },
                  { name: 'Shavithramma', designation: 'Secretary' },
                  { name: 'Anusuya', designation: 'Treasurer' },
                  { name: 'Amaramma', designation: 'Member' },
                  { name: 'Tppamma', designation: 'Member' },
                  { name: 'Lingappa', designation: 'Member' },
                ].map((m, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                    <td className="px-5 py-3 text-gray-400 font-medium">{String(i + 1).padStart(2, '0')}</td>
                    <td className="px-5 py-3 font-semibold text-primary-dark">{m.name}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold
                        ${m.designation === 'President' ? 'bg-primary text-white' :
                          m.designation === 'Vice-President' ? 'bg-primary-light text-white' :
                          m.designation === 'General Secretary' ? 'bg-primary-light text-white' :
                          m.designation === 'Treasurer' ? 'bg-accent text-white' :
                          'bg-gray-100 text-gray-600'}`}>
                        {m.designation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Staff category blocks */}
        <div className="bg-cream rounded-3xl p-6">
          <h4 className="font-heading text-lg font-bold text-primary mb-5">Staff Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { role: 'Programme Staff', count: 5, color: 'border-primary text-primary', badge: 'bg-primary' },
              { role: 'Account Officer', count: 1, color: 'border-primary text-primary', badge: 'bg-primary' },
              { role: 'Field Staff', count: 21, color: 'border-accent text-accent', badge: 'bg-accent' },
              { role: 'Account Assistant', count: 1, color: 'border-accent text-accent', badge: 'bg-accent' },
              { role: 'Volunteers', count: 100, color: 'border-green-600 text-green-700', badge: 'bg-green-600' },
              { role: 'Group D', count: 1, color: 'border-gray-500 text-gray-600', badge: 'bg-gray-500' },
              { role: 'Driver', count: 1, color: 'border-gray-400 text-gray-500', badge: 'bg-gray-400' },
              { role: 'Office Assistant', count: 1, color: 'border-gray-400 text-gray-500', badge: 'bg-gray-400' },
              { role: 'Cook & Attender', count: 3, color: 'border-gray-400 text-gray-500', badge: 'bg-gray-400' },
            ].map((item, i) => (
              <div key={i} className={`bg-white border-2 ${item.color} rounded-xl px-4 py-3 font-medium text-sm shadow-sm flex items-center justify-between gap-2`}>
                <span>{item.role}</span>
                <span className={`${item.badge} text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[24px] text-center`}>{item.count}</span>
              </div>
            ))}
          </div>
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
          <div className="flex flex-col items-center gap-0 min-w-[560px]">

            {/* Title */}
            <div className="bg-primary text-white px-10 py-3 rounded-xl font-bold text-base shadow-md">
              Samarpana Development Organization, Sindhanur
            </div>
            <div className="w-0.5 h-5 bg-gray-400" />

            {/* Org Structure label */}
            <div className="bg-white border-2 border-primary text-primary px-8 py-2 rounded-xl font-semibold text-sm shadow">
              Organizational Structure
            </div>
            <div className="w-0.5 h-5 bg-gray-400" />

            {/* President */}
            <div className="bg-primary text-white px-10 py-3 rounded-xl font-semibold shadow-md">President</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            {/* General Secretary */}
            <div className="bg-primary-light text-white px-10 py-3 rounded-xl font-semibold shadow-md">General Secretary</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            {/* Programme Manager */}
            <div className="bg-accent text-white px-10 py-3 rounded-xl font-semibold shadow-md">Programme Manager</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            {/* Other Staff */}
            <div className="bg-gray-700 text-white px-10 py-3 rounded-xl font-semibold shadow-md">Other Staff</div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gray-500" />
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-500" />
            </div>

            {/* Staff Box */}
            <div className="border-2 border-gray-400 rounded-2xl p-6 w-full max-w-lg bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-lg text-center underline">Programme Staff</div>
                <div className="bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-lg text-center">Account Officer</div>
                <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg text-center">Field Staff</div>
                <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg text-center">Account Assistant</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-green-50 text-green-700 font-medium text-sm px-4 py-2 rounded-lg text-center">Volunteers</div>
                <div className="bg-gray-50 text-gray-600 text-sm px-4 py-2 rounded-lg text-center">Group D</div>
                <div className="bg-gray-50 text-gray-600 text-sm px-4 py-2 rounded-lg text-center font-medium">
                  Driver, Office Assistant, Cook &amp; Attender
                </div>
              </div>
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
            { name: 'Kambale', designation: 'DRP' },
            { name: 'S.Kolli', designation: 'ZS' },
            { name: 'Santhosh Kambale', designation: 'ZS'},
            { name: 'Geetha Kulkarni', designation: 'Accountant' },
            { name: 'Mounish Nayak', designation: 'Project Manager' },
            { name: 'Kantemma', designation: 'Warden' },
            // { name: 'Raju V', designation: 'Community Mobilizer' },
            // { name: 'Suma K', designation: 'Social Worker' },
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
        bgImage={banner}
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