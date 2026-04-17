import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  BookOpen, Heart, Stethoscope, Wrench, Home, ArrowRight, CheckCircle,
  Calendar, MapPin, Building2, Target, Users, Link2, TrendingUp, Clock,
  Star, Leaf, ChevronRight, IndianRupee, Award, FileText
} from 'lucide-react'

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';

import banner from "../assets/banner.jpg"
// ─── DATA ───────────────────────────────────────────────────────────────────

const ongoingProjects = [
  {
    key: 'st-hostel',
    title: 'GIA – ST Girls Hostel',
    funder: 'Ministry of Tribal Affairs, New Delhi',
    location: 'Gunda Village, Maski Taluka, Raichur District',
    scope: 'Training & Education',
    year: '2018–19 to Present',
    beneficiaries: '92 ST Rural Girls',
    amount2425: '₹14,95,328',
    color: 'bg-primary',
    icon: Building2,
    image: img4,
    tag: 'Education',
    tagColor: 'bg-blue-100 text-blue-700',
    desc: 'Providing free lodging, boarding, uniforms, books, and stationery to ST girl students at Gunda Village under Ministry of Tribal Affairs grants. 86 students admitted in 2022–23.',
  },
  {
    key: 'lws',
    title: 'Link Worker Scheme (LWS) Project',
    funder: 'Karnataka State AIDS Prevention Society (KSAPS), Bengaluru',
    location: '100 Villages, Vijayapur District',
    scope: 'Awareness, Training & Clinical Services',
    year: '2022–23 to Present',
    beneficiaries: '22,000+ (HRGs & Community)',
    amount2425: '₹31,55,771',
    color: 'bg-green-700',
    icon: Stethoscope,
    image: img1,
    tag: 'Health',
    tagColor: 'bg-green-100 text-green-700',
    desc: 'HIV/AIDS prevention, awareness and care services across 100 high-risk villages in Vijayapur District. Includes health camps, IEC activities, and beneficiary referral to ART centres.',
  },
  {
    key: 'microfinance',
    title: 'Micro Finance Programme',
    funder: 'NABFINS (NABARD Financial Institutions Network)',
    location: 'Sindhanur',
    scope: 'Financial Linkage & Skill Upgradation Training',
    year: '2014 to Present',
    beneficiaries: '5,000+ SHG/JLG Members',
    amount2425: '₹3,52,613',
    color: 'bg-accent',
    icon: TrendingUp,
    image: img2,
    tag: 'Women Empowerment',
    tagColor: 'bg-pink-100 text-pink-700',
    desc: 'Disbursing ₹1 Crore+ in microloans annually through SHG/JLG formation with NABFINS and Bank of Baroda, supporting women entrepreneurs in rural and urban Sindhanur.',
  },
  {
    key: 'ashakirana',
    title: 'Asha Kirana Home for Poor & Orphan Children',
    funder: 'Organization & Community Contribution',
    location: 'P.W.A. Achimthi, Sindhanur City',
    scope: 'Education & Hostel Facilities',
    year: 'Ongoing',
    beneficiaries: '48 Children',
    amount2425: '₹1,28,552',
    color: 'bg-orange-500',
    icon: Home,
    image: img5,
    tag: 'Education',
    tagColor: 'bg-blue-100 text-blue-700',
    desc: 'Running a home for poor and orphan children entirely on donor contributions — providing free education, lodging, boarding, nutritious meals, and care without any government grant.',
  },
  {
    key: 'healthonwheel',
    title: 'Health on Wheel Programme',
    funder: 'Organization & Community Contribution',
    location: 'Gunda GP, Maski Taluka',
    scope: 'Health Camps & Awareness',
    year: 'Ongoing (3+ years)',
    beneficiaries: '100+ ST Beneficiaries/year',
    amount2425: '₹49,715',
    color: 'bg-purple-600',
    icon: Stethoscope,
    image: img3,
    tag: 'Health',
    tagColor: 'bg-green-100 text-green-700',
    desc: 'Mobile medical camps in Gunda and Kalmangi Panchayat with trained doctors. Rural Health Clinic with twice-weekly doctor visits, free medicines, and referral support.',
  },
  {
    key: 'skilldevelopment',
    title: 'Skill Development Training Project',
    funder: 'Organization & Community Contribution',
    location: 'Sindhanur',
    scope: 'Vocational Training',
    year: 'Ongoing',
    beneficiaries: '250+ Youth & Women',
    amount2425: '₹1,54,916',
    color: 'bg-teal-600',
    icon: Wrench,
    image: img6,
    tag: 'Skill Development',
    tagColor: 'bg-orange-100 text-orange-700',
    desc: 'Tailoring, dairy development, fashion designing (MEDP/NABARD), and agriculture training for rural youth and SHG members. Trainees earn ₹500–₹1,000/day after completion.',
  },
]

const pastProjects = [
  { sl: 1,   name: 'Integrated education for Disabled children project.(IEDC,IEDSS)', years: '2004-05 to 2008-09', target: 'Disabled school children', beneficiaries: 137,   nature: 'Education & Training',                                    funder: 'MHRD' },
  { sl: 2,   name: 'Home education programme for disabled',                           years: '2005-06 to 2012',    target: 'Disabled children',        beneficiaries: 150,   nature: 'Education',                                               funder: 'SSA' },
  { sl: 3,   name: 'Tent School',                                                     years: '2005-06',            target: 'Drop out',                  beneficiaries: 50,    nature: 'Education',                                               funder: 'SSA' },
  { sl: 4,   name: '12 months & 6 months Bridge course programme',                   years: '2005-06 to 2008',    target: 'Drop out',                  beneficiaries: 500,   nature: 'Education',                                               funder: 'SSA' },
  { sl: 5,   name: 'PRA & Training programme',                                        years: '2006-07-08',         target: 'VFC members',               beneficiaries: 300,   nature: 'Training',                                                funder: 'Dep. Forest rcr.' },
  { sl: 6,   name: 'Child labour school',                                             years: '2006-07 to 2013',    target: 'Child labour',              beneficiaries: 500,   nature: 'Education & Training',                                    funder: 'NCLP' },
  { sl: 7,   name: 'Grameen Vikas andolana project',                                  years: '2006-07-08',         target: 'PRI & SHG & youth',         beneficiaries: 881,   nature: 'Training & Awareness',                                    funder: 'CAPART Dharwad' },
  { sl: 8,   name: 'SJSY',                                                            years: '2008-09',            target: 'SC & ST Rural Women',       beneficiaries: 200,   nature: 'Training & Awareness',                                    funder: 'ZP Koppal' },
  { sl: '8', name: 'KGBV School',                                                     years: '2005-06 to 2012-13', target: 'Drop out girls',             beneficiaries: 450,   nature: 'Education',                                               funder: 'SSA' },
  { sl: 9,   name: 'IEDSS',                                                           years: '2009-10 to 2011-12', target: 'Disabled',                  beneficiaries: 25,    nature: 'Education & training',                                    funder: 'MHRD' },
  { sl: 10,  name: 'MGNREGA',                                                         years: '2011-12',            target: 'Community',                 beneficiaries: 4000,  nature: 'Training & preparation of action plan & awareness',       funder: 'ZP rcr' },
  { sl: 11,  name: 'Suvarna Grama yojana',                                            years: '2011-12',            target: 'Community',                 beneficiaries: 2000,  nature: 'Training & preparation of action plan & awareness',       funder: 'ZP rcr' },
  { sl: 12,  name: 'Water Users Co operative society training',                       years: '2010-11-12',         target: 'WUSC members / formers',    beneficiaries: 11650, nature: 'Training',                                                funder: 'CADA munirbad' },
  { sl: 13,  name: 'Bio fuel promotion project',                                      years: '2013-14',            target: 'Community',                 beneficiaries: 600,   nature: 'Awareness & Training on promotion of Bio fuel plants',    funder: 'Grama Panchayth' },
  { sl: 14,  name: 'GIA- ST Girls Hostel',                                            years: '2018-19 to Till the date', target: 'ST Rural Girls',       beneficiaries: 92,    nature: 'Hostel',                                                  funder: 'MOT' },
  { sl: 15,  name: 'LWS Project',                                                     years: '2022-23 to Till the date', target: 'HIV/AIDS & Community HRGS', beneficiaries: 22000, nature: 'Awareness, Training & Clinical Service',           funder: 'KSAPS' },
  { sl: 16,  name: 'Micro Finance Programme',                                         years: '2014 to Till the date',    target: 'SHG/JLG Members',      beneficiaries: 5000,  nature: 'Formation Financial, Linkage & MEDP Training',            funder: 'NBFINS' },
  { sl: 17,  name: 'MEDP',                                                            years: '2024-25',            target: 'SHG/JLG Members',           beneficiaries: 30,    nature: 'MEDP Training',                                           funder: 'NABARD' },
]

const financialHistory = [
  {
    year: '2024-25',
    projects: [
      { name: 'GIA- ST Girls Hostel',          funder: 'MOT',                           amount: 1495328, location: 'Gunda Village, Maski',              scope: 'Training & Education' },
      { name: 'Link Worker Project',            funder: 'KSAPS',                         amount: 3155771, location: '100 Villages of Vijayapur Dist.',   scope: 'Awareness Training &' },
      { name: 'Micro Finance Programme',        funder: 'NBFINS',                        amount: 352613,  location: 'Sindhanur',                         scope: 'Financial Linkage & Skill up gradation Training' },
      { name: 'Home for Poor & orphan Children',funder: 'Organization & Community Contribution', amount: 128552, location: 'Sindhanur',                scope: 'Education & Hostel Facilities' },
      { name: 'Health on Wheel Programme',      funder: 'Organization & Community Contribution', amount: 49715,  location: 'Sindhanur Taluka Gunda GP', scope: 'Health Camp & Awareness' },
      { name: 'Skill development Training Project', funder: 'Organization & Community Contribution', amount: 154916, location: 'Sindhanur',             scope: 'Training' },
    ]
  },
  {
    year: '2023-24',
    projects: [
      { name: 'GIA- ST Girls Hostel',    funder: 'MOT',    amount: 2600500, location: 'Gunda Village, Maski',            scope: 'Training & Education' },
      { name: 'Link Worker Project',     funder: 'KSAPS',  amount: 4515313, location: '100 Villages of Vijayapur Dist.', scope: 'Awareness Training &' },
      { name: 'Micro Finance Programme', funder: 'NBFINS', amount: 344402,  location: 'Sindhanur',                       scope: 'Financial Linkage & Skill up gradation Training' },
      { name: 'MEDP',                    funder: 'NABARD', amount: 150000,  location: 'Sindhnur (Dagesugur Village)',     scope: 'Training & Market linkage' },
    ]
  },
  {
    year: '2022-23',
    projects: [
      { name: 'GIA- ST Girls Hostel',           funder: 'MOT',                           amount: 1011517, location: 'Gunda Village, Maski',              scope: 'Training & Education' },
      { name: 'Link Worker Project',             funder: 'KSAPS',                         amount: 409102,  location: '100 Villages of Vijayapur Dist.',   scope: 'Awareness Training &' },
      { name: 'Micro Finance Programme',         funder: 'NBFINS',                        amount: 265923,  location: 'Sindhanur',                         scope: 'Financial Linkage & Skill up gradation Training' },
      { name: 'Home for Poor & orphan Children', funder: 'Organization & Community Contribution', amount: 187398, location: 'Sindhanur',                scope: 'Education & Hostel Facilities' },
      { name: 'Health on Wheel Programme',       funder: 'Organization & Community Contribution', amount: 41090,  location: 'Sindhanur Taluka Gunda GP', scope: 'Health Camp & Awareness' },
      { name: 'Skill development Training Project', funder: 'Organization & Community Contribution', amount: 79661, location: 'Sindhanur',               scope: 'Training' },
    ]
  },
]

const futurePlans = [
  { title: 'Sustainable Agriculture Programme', icon: Leaf, color: 'bg-green-600', desc: 'Implementing large-scale sustainable agriculture programmes to support rural farming communities and boost livelihoods across Hyderabad-Karnataka districts.' },
  { title: 'Local Nutrition Food Programme', icon: Heart, color: 'bg-rose-600', desc: 'Preparing and delivering a community-based local nutrition food programme targeting malnourished children in rural areas to reduce child malnutrition rates.' },
  { title: 'Women Empowerment & Skill Upgradation', icon: TrendingUp, color: 'bg-pink-600', desc: 'Expanding women empowerment through advanced skill upgradation programmes and promoting agricultural sub-activities to enhance income for rural women.' },
  { title: 'Education for Poor & Talented Children', icon: BookOpen, color: 'bg-blue-600', desc: 'Providing scholarships and residential educational support to poor but talented children in rural and urban areas to ensure no child is left behind.' },
  { title: 'Rural Sustainable Development', icon: Home, color: 'bg-teal-600', desc: 'Implementing holistic rural development programmes in Raichur, Koppal, Bellary, Bijapur, Gulbarga, and Vijayanagar districts to contribute to national GDP growth.' },
]

// ─── FORMAT AMOUNT ───────────────────────────────────────────────────────────
function fmtAmount(n) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return `₹${n.toLocaleString('en-IN')}`
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Programs() {
  const { type, subtype } = useParams()

  // ── ONGOING PROJECTS LISTING ─────────────────────────────────────────────
  if (type === 'ongoing' && !subtype) {
    return (
      <div>
        <PageHero
          title="Ongoing Projects"
          breadcrumb={[{ label: 'Programs / Services', path: '/programs' }, { label: 'Ongoing Projects' }]}
              bgImage={banner}
            />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <ProjectTypeNav active="ongoing" />

          {/* Summary banner */}
          <div className="bg-primary rounded-3xl p-8 text-white mb-12 grid md:grid-cols-4 gap-6">
            {[
              { value: '6', label: 'Active Projects' },
              { value: '5+', label: 'Funding Partners' },
              { value: '₹61L+', label: 'Total Budget 2024–25' },
              { value: '22,000+', label: 'Beneficiaries' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-gray-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {ongoingProjects.map((proj, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-4">
                  <img src={proj.image} alt={proj.title} className="w-full h-full min-h-[180px] object-cover" />
                  <div className="md:col-span-3 p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${proj.tagColor}`}>{proj.tag}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Ongoing</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">{proj.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{proj.desc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">Funding Agency</div>
                        <div className="text-xs font-semibold text-primary">{proj.funder}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">Location</div>
                        <div className="text-xs font-semibold text-primary">{proj.location}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">Beneficiaries</div>
                        <div className="text-xs font-semibold text-accent">{proj.beneficiaries}</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">Budget 2024–25</div>
                        <div className="text-xs font-semibold text-green-700">{proj.amount2425}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={13} className="text-accent" /> {proj.year}
                      <span className="mx-2">·</span>
                      <Target size={13} className="text-accent" /> {proj.scope}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── PAST / COMPLETED PROJECTS ─────────────────────────────────────────────
  if (type === 'completed') {
    const totalBenef = pastProjects.reduce((s, p) => s + p.beneficiaries, 0)
    return (
      <div>
        <PageHero
          title="Past & Completed Projects"
          breadcrumb={[{ label: 'Programs / Services', path: '/programs' }, { label: 'Completed Projects' }]}
          bgImage={banner}
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <ProjectTypeNav active="completed" />

          {/* Stat banner */}
          <div className="grid md:grid-cols-4 gap-5 mb-12">
            {[
              { value: '2003', label: 'Working Since', sub: '20+ years of impact', icon: Calendar },
              { value: '15+', label: 'Completed Projects', sub: 'Across all sectors', icon: Award },
              { value: `${(totalBenef / 1000).toFixed(0)}K+`, label: 'Total Beneficiaries', sub: 'Across all past projects', icon: Users },
              { value: '8+', label: 'Funding Agencies', sub: 'Govt & Central bodies', icon: Building2 },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-primary">{s.value}</div>
                  <div className="font-semibold text-gray-700 text-sm">{s.label}</div>
                  <div className="text-gray-400 text-xs">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Image strip */}
          <div className="grid grid-cols-4 gap-3 mb-10">
            {[img1, img3, img5, img7].map((src, i) => (
              <img key={i} src={src} alt="Past project" className="rounded-2xl h-36 w-full object-cover shadow-sm" />
            ))}
          </div>

          {/* Projects table */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <FileText size={18} className="text-accent" />
              <h3 className="text-white font-semibold">Funding agency / Department for Implementing Project Since from 2003 to 2024-25</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Sl.</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Project Name</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Years</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Target Group</th>
                    <th className="text-right px-5 py-3 text-gray-500 font-semibold text-xs">Beneficiaries</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Nature</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-semibold text-xs">Funder</th>
                  </tr>
                </thead>
                <tbody>
                  {pastProjects.map((p, i) => (
                    <tr key={i} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/40'}`}>
                      <td className="px-5 py-3.5 text-gray-400 text-xs">{String(p.sl).padStart(2, '0')}</td>
                      <td className="px-5 py-3.5 font-medium text-primary text-xs max-w-xs">{p.name}</td>
                      <td className="px-5 py-3.5 text-gray-500 text-xs whitespace-nowrap">
                        <span className="flex items-center gap-1"><Calendar size={11} className="text-accent" />{p.years}</span>
                      </td>
                      <td className="px-5 py-3.5 text-gray-500 text-xs">{p.target}</td>
                      <td className="px-5 py-3.5 text-right">
                        <span className="font-semibold text-accent text-xs">{p.beneficiaries.toLocaleString('en-IN')}</span>
                      </td>
                      <td className="px-5 py-3.5 text-gray-500 text-xs">{p.nature}</td>
                      <td className="px-5 py-3.5">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{p.funder}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-accent/5 border-t-2 border-accent/20">
                    <td colSpan={4} className="px-5 py-3 font-semibold text-primary text-sm">Total Beneficiaries</td>
                    <td className="px-5 py-3 text-right font-bold text-accent text-base">{totalBenef.toLocaleString('en-IN')}</td>
                    <td colSpan={2} />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Sector breakdown */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { sector: 'Education & Training', count: 7, color: 'border-blue-500 bg-blue-50', tc: 'text-blue-700', projects: ['IEDC/IEDSS', 'Bridge Courses', 'Tent Schools', 'KGBV School', 'Child Labour School', 'Home Education Programme'] },
              { sector: 'Agriculture & Rural Dev.', count: 3, color: 'border-green-500 bg-green-50', tc: 'text-green-700', projects: ['Water Users Co-op Training', 'Grameen Vikas Andolana', 'Bio-Fuel Promotion', 'MGNREGA', 'Suvarna Grama Yojana'] },
              { sector: 'Women & Skill Dev.', count: 3, color: 'border-pink-500 bg-pink-50', tc: 'text-pink-700', projects: ['SJSY – SC/ST Women', 'PRA & Training Programme', 'MEDP Fashion Designing'] },
            ].map((sec, i) => (
              <div key={i} className={`rounded-2xl border-2 p-5 ${sec.color}`}>
                <div className={`font-heading text-2xl font-bold ${sec.tc} mb-1`}>{sec.count}+</div>
                <div className="font-semibold text-primary mb-3">{sec.sector}</div>
                <ul className="space-y-1.5">
                  {sec.projects.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${sec.tc.replace('text-', 'bg-')} shrink-0`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── UPCOMING / FUTURE PLANS ───────────────────────────────────────────────
  if (type === 'upcoming') {
    return (
      <div>
        <PageHero
          title="Future Plans & Upcoming Projects"
          breadcrumb={[{ label: 'Programs / Services', path: '/programs' }, { label: 'Upcoming Projects' }]}
          bgImage={banner}
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <ProjectTypeNav active="upcoming" />

          {/* Intro */}
          <div className="bg-primary rounded-3xl p-10 text-white mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-5">
                <Star size={14} /> Future Vision 2025–2030
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Future Plans</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                Samarpana Development Organization is committed to expanding its reach and deepening its impact 
                across Karnataka, with a special focus on Hyderabad-Karnataka districts including Raichur, Koppal, 
                Bellary, Bijapur, Gulbarga, and Vijayanagar. The following programmes are planned for future 
                implementation to contribute to the national development agenda.
              </p>
            </div>
          </div>

          {/* Future plan cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {futurePlans.map((plan, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${plan.color} text-white rounded-2xl flex items-center justify-center mb-5`}>
                  <plan.icon size={22} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading text-lg font-bold text-primary">{plan.title}</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium shrink-0">Planned</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>

          {/* Focus districts */}
          <div className="bg-cream rounded-3xl p-8 mb-12">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">Target Districts for Future Expansion</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { dist: 'Raichur', note: 'Primary base & ongoing projects' },
                { dist: 'Koppal', note: 'Tribal & rural development' },
                { dist: 'Bellary', note: 'Education support programmes' },
                { dist: 'Bijapur (Vijayapura)', note: 'LWS health programmes' },
                { dist: 'Gulbarga (Kalaburagi)', note: 'Women empowerment' },
                { dist: 'Vijayanagar', note: 'Agriculture & livelihood' },
              ].map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-accent" />
                    <span className="font-semibold text-primary text-sm">{d.dist}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{d.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image strip */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[img2, img4, img6].map((src, i) => (
              <img key={i} src={src} alt="Future plans" className="rounded-2xl h-48 w-full object-cover shadow" />
            ))}
          </div>

          {/* CTA */}
          <div className="bg-accent rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-heading text-2xl font-bold mb-2">Partner With Us</h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-xl">
                Are you a government agency, CSR partner, or individual donor interested in co-implementing 
                any of these future programmes? Reach out to us — together we can build sustainable change.
              </p>
            </div>
            <Link to="/contact" className="bg-white text-accent font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors shrink-0">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── GOVERNMENT SUPPORTED / FINANCIAL HISTORY ──────────────────────────────
  if (type === 'government') {
    return (
      <div>
        <PageHero
          title="Government Supported Projects"
          breadcrumb={[{ label: 'Programs / Services', path: '/programs' }, { label: 'Govt. Supported' }]}
          bgImage={banner}
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <ProjectTypeNav active="government" />

          <p className="text-gray-600 mb-10 max-w-2xl">
            Last three experience. Details of the projects implemented from 2022-23 to 2024-25.
          </p>

          {financialHistory.map((fy, fi) => {
            const total = fy.projects.reduce((s, p) => s + p.amount, 0)
            const yearColors = ['bg-primary', 'bg-green-700', 'bg-accent']
            return (
              <div key={fi} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden mb-8">
                <div className={`${yearColors[fi]} px-7 py-5 flex items-center justify-between`}>
                  <div>
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Financial Year</span>
                    <h3 className="text-white font-heading text-2xl font-bold">{fy.year}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-white/70 text-xs">Total Utilization</div>
                    <div className="text-white font-bold text-xl">{fmtAmount(total)}</div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs">Project Name</th>
                        <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs">Funder</th>
                        <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs">Location</th>
                        <th className="text-left px-6 py-3 text-gray-500 font-semibold text-xs">Scope</th>
                        <th className="text-right px-6 py-3 text-gray-500 font-semibold text-xs">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fy.projects.map((p, pi) => (
                        <tr key={pi} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-3.5 font-medium text-primary text-xs">{p.name}</td>
                          <td className="px-6 py-3.5">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{p.funder}</span>
                          </td>
                          <td className="px-6 py-3.5 text-gray-500 text-xs">
                            <span className="flex items-center gap-1"><MapPin size={11} className="text-accent" />{p.location}</span>
                          </td>
                          <td className="px-6 py-3.5 text-gray-500 text-xs">{p.scope}</td>
                          <td className="px-6 py-3.5 text-right font-semibold text-accent text-sm">
                            {p.amount.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-50 border-t-2 border-gray-200">
                        <td colSpan={4} className="px-6 py-3 font-semibold text-primary text-sm">Total</td>
                        <td className="px-6 py-3 text-right font-bold text-primary text-base">
                          {total.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )
          })}

          {/* 3-year comparison */}
          <div className="bg-cream rounded-3xl p-8">
            <h3 className="font-heading text-xl font-bold text-primary mb-6">3-Year Funding Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {financialHistory.map((fy, fi) => {
                const total = fy.projects.reduce((s, p) => s + p.amount, 0)
                const colors = ['bg-primary', 'bg-green-700', 'bg-accent']
                return (
                  <div key={fi} className={`${colors[fi]} rounded-2xl p-6 text-white`}>
                    <div className="text-white/70 text-xs mb-1">{fy.year}</div>
                    <div className="font-heading text-2xl font-bold mb-2">{fmtAmount(total)}</div>
                    <div className="text-white/80 text-xs">{fy.projects.length} projects funded</div>
                    <div className="mt-4 space-y-1.5">
                      {fy.projects.map((p, pi) => (
                        <div key={pi} className="flex justify-between text-xs text-white/80">
                          <span className="truncate mr-2">{p.name}</span>
                          <span className="font-semibold shrink-0">{fmtAmount(p.amount)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── PROGRAM DETAIL (education / health / skill / women / community / linkworker) ──
  const programTypes = {
    education: {
      title: 'Education Programs', icon: BookOpen, color: 'bg-blue-500',
      image: img3, tag: 'Education',
      desc: 'Samarpana has been working in education since 2003, starting with IEDC for disabled children and expanding to girl education, bridge courses, and ST hostel programmes.',
      activities: [
        'Girls Hostel for ST Students — Gunda Village (Ministry of Tribal Affairs)',
        'Asha Kirana Home for Poor & Orphan Children — Sindhanur',
        'Integrated Education for Disabled Children (IEDC)',
        'Bridge Course Programme for Dropouts',
        'KGBV School — 450 dropout girls educated (SSA)',
        'Child Labour School — 500 children mainstreamed',
        'Tent School and Home Education Programmes',
      ],
      stats: [{ label: 'Years Active', value: '20+' }, { label: 'Children Educated', value: '2,000+' }, { label: 'Projects', value: '8+' }, { label: 'Funders', value: 'MOT, SSA, MHRD' }],
    },
    women: {
      title: 'Women Empowerment', icon: Heart, color: 'bg-pink-500',
      image: img2, tag: 'Women',
      desc: 'Empowering women through SHG formation, microfinance, vocational training, and market linkages since 2008.',
      activities: [
        'Micro Finance Programme — SHG/JLG loans with NABFINS & Bank of Baroda',
        'MEDP Fashion Designing Training — NABARD funded',
        'SJSY Programme — SC/ST Rural Women (Zilla Panchayat, Koppal)',
        'Self-Help Group formation and capacity building',
        'Vocational training: tailoring, Kundan work, food processing',
        'Leadership development and financial literacy workshops',
      ],
      stats: [{ label: 'Women Benefitted', value: '5,000+' }, { label: 'Loan Amount/Year', value: '₹1 Cr+' }, { label: 'SHG/JLG Groups', value: '345' }, { label: 'Enterprises Started', value: '25+' }],
    },
    health: {
      title: 'Health Programs', icon: Stethoscope, color: 'bg-green-500',
      image: img1, tag: 'Health',
      desc: 'Bringing essential healthcare to remote villages through mobile health camps, rural clinics, and HIV/AIDS prevention programmes.',
      activities: [
        'Link Worker Scheme — 100 villages, Vijayapur District (KSAPS)',
        'Health on Wheel Programme — Gunda GP, Maski Taluka',
        'HIV/AIDS Awareness Campaigns — 50+ villages',
        'Health camps: 88+ camps, 6,911+ patients served',
        'Sankaryakarta Scheme — Haveri District (NIDC/KSCDC)',
        'Blood donation camps, CBS camps, school awareness',
        'Referral to ART centres — 41+ new cases linked',
      ],
      stats: [{ label: 'Health Camps', value: '88+' }, { label: 'Patients Served', value: '6,900+' }, { label: 'Villages Covered', value: '100' }, { label: 'HIV Cases Linked to ART', value: '41' }],
    },
    skill: {
      title: 'Skill Development', icon: Wrench, color: 'bg-orange-500',
      image: img6, tag: 'Skill Dev',
      desc: 'Equipping rural youth and women with marketable vocational skills for self-employment and sustainable livelihoods.',
      activities: [
        'MEDP Training Programme — NABFINS & NABARD',
        'Fashion Designing Training — Sindhanur, Dadesugur Village',
        'Tailoring, Dairy Development, Agarbatti Making',
        'Entrepreneurship development and market linkage',
        'Micro-finance facilitation for enterprise launch',
        'Water Users Co-operative Society Training — 11,650 farmers',
        'PRA & Training Programme — VFC Members',
      ],
      stats: [{ label: 'Members Trained', value: '250+' }, { label: 'Enterprises Started', value: '25' }, { label: 'Daily Income', value: '₹500–1000' }, { label: 'Farmers Trained (WUCS)', value: '11,650' }],
    },
    community: {
      title: 'Community Development', icon: Home, color: 'bg-purple-500',
      image: img7, tag: 'Community',
      desc: 'Strengthening rural communities through infrastructure, health services, agricultural support, and environmental programmes.',
      activities: [
        'Health on Wheel — mobile medical camps in Gunda GP',
        'Rural Health Clinic — twice-weekly doctors, Gunda Village',
        'Hostel building construction (CSR: Tektronix India + MP/MLC Grant)',
        'Water Users Co-operative Society Training — 11,650 farmers',
        'Grameen Vikas Andolana — PRI, SHG & Youth training',
        'MGNREGA — Training & action plan preparation',
        'Bio-Fuel Promotion Project — environment awareness',
      ],
      stats: [{ label: 'Health Camps', value: '30+' }, { label: 'Farmers Trained', value: '11,650' }, { label: 'Gunda GP Villages', value: '14' }, { label: 'Community Members', value: '6,000+' }],
    },
    linkworker: {
      title: 'Link Worker Program', icon: Link2, color: 'bg-teal-500',
      image: img5, tag: 'Health',
      desc: 'Bridging marginalized communities and government health, welfare, and social services through trained Link Workers.',
      activities: [
        'LWS at 100 villages, Vijayapur District — KSAPS funded',
        'Doorstep outreach to HRGs (FSW, IDUs, MSM, PLHIV)',
        'IEC programmes, Jata programmes, school awareness',
        'Health camps, CBS camps, blood donation camps',
        'Referral to ICTC, hospitals, and ART centres',
        'Social benefit linkage: Dhanashree, Rajivagandhi Vasati Yojane',
        'Formation & strengthening of VV Groups',
      ],
      stats: [{ label: 'Villages Covered', value: '100' }, { label: 'Beneficiaries', value: '22,000+' }, { label: 'Health Camps', value: '88+' }, { label: 'ART-Linked Cases', value: '41' }],
    },
  }

  const resolvedSubtype = subtype || (Object.keys(programTypes).includes(type) ? type : null)
  if (resolvedSubtype && programTypes[resolvedSubtype]) {
    const prog = programTypes[resolvedSubtype]
    return (
      <div>
        <PageHero
          title={prog.title}
          breadcrumb={[{ label: 'Programs', path: '/programs' }, { label: 'Ongoing Projects', path: '/programs/ongoing' }, { label: prog.title }]}
          bgImage={typeof prog.image === 'string' ? prog.image : undefined}
        />
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Sub nav */}
          <div className="flex flex-wrap gap-2 mb-12">
            {Object.entries(programTypes).map(([key, p]) => (
              <Link key={key} to={`/programs/ongoing/${key}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${key === resolvedSubtype ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {p.title}
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
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
            </div>
            <div className="space-y-4">
              <img src={prog.image} alt={prog.title} className="rounded-3xl w-full h-72 object-cover shadow-xl" />
              <div className="grid grid-cols-2 gap-3">
                {prog.stats.map((s, i) => (
                  <div key={i} className={`${prog.color} rounded-2xl p-4 text-center text-white`}>
                    <div className="font-heading text-xl font-bold">{s.value}</div>
                    <div className="text-white/80 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image strip */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[img2, img4, img6].map((src, i) => (
              <img key={i} src={src} alt="Program" className="rounded-2xl h-36 w-full object-cover shadow-sm" />
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Support This Program</p>
              <p className="text-gray-300 text-sm">Help us expand our {prog.title.toLowerCase()} across Karnataka.</p>
            </div>
            <Link to="/contact" className="btn-primary text-sm shrink-0">Get Involved <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    )
  }

  // ── DEFAULT LANDING ───────────────────────────────────────────────────────
  return (
    <div>
      <PageHero
        title="Programs & Services"
        breadcrumb={[{ label: 'Programs & Services' }]}
        bgImage="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Quick nav */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { label: 'Ongoing Projects', path: '/programs/ongoing', color: 'bg-primary', icon: TrendingUp },
            { label: 'Completed Projects', path: '/programs/completed', color: 'bg-green-700', icon: Award },
            { label: 'Upcoming Projects', path: '/programs/upcoming', color: 'bg-accent', icon: Star },
            { label: 'Govt. Supported', path: '/programs/government', color: 'bg-gray-700', icon: Building2 },
          ].map(n => (
            <Link key={n.label} to={n.path}
              className={`${n.color} text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}>
              <n.icon size={14} /> {n.label} <ArrowRight size={12} />
            </Link>
          ))}
        </div>

        {/* Stats overview */}
        <div className="grid md:grid-cols-4 gap-5 mb-12">
          {[
            { value: '6', label: 'Ongoing Projects', icon: TrendingUp, color: 'text-primary bg-primary/10' },
            { value: '15+', label: 'Completed Projects', icon: Award, color: 'text-green-700 bg-green-50' },
            { value: '22,000+', label: 'Total Beneficiaries', icon: Users, color: 'text-accent bg-accent/10' },
            { value: '2003', label: 'Working Since', icon: Calendar, color: 'text-purple-600 bg-purple-50' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.color}`}>
                <s.icon size={20} />
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing projects preview */}
        <h2 className="font-heading text-2xl font-bold text-primary mb-6">Ongoing Projects</h2>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {ongoingProjects.map((proj, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${proj.tagColor}`}>{proj.tag}</span>
                <h3 className="font-semibold text-primary mt-2 mb-1 text-sm leading-snug">{proj.title}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">{proj.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-semibold">{proj.beneficiaries}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Ongoing</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-16">
          <Link to="/programs/ongoing" className="btn-primary text-sm">View All Ongoing Projects <ArrowRight size={14} /></Link>
        </div>

        {/* Future plans preview */}
        <div className="bg-cream rounded-3xl p-8 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-primary">Future Plans</h2>
            <Link to="/programs/upcoming" className="text-sm text-accent font-semibold flex items-center gap-1 hover:underline">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {futurePlans.slice(0, 3).map((plan, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className={`w-9 h-9 ${plan.color} text-white rounded-xl flex items-center justify-center mb-3`}>
                  <plan.icon size={16} />
                </div>
                <h4 className="font-semibold text-primary text-sm mb-2">{plan.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program category tiles */}
        <h2 className="font-heading text-2xl font-bold text-primary mb-6">Program Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(programTypes).map(([key, prog]) => (
            <Link key={key} to={`/programs/ongoing/${key}`}
              className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 ${prog.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                <prog.icon size={22} className="text-white" />
              </div>
              <p className="font-semibold text-gray-800 text-xs">{prog.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── PROJECT TYPE NAV ─────────────────────────────────────────────────────────
function ProjectTypeNav({ active }) {
  const navItems = [
    { label: 'Ongoing Projects', path: '/programs/ongoing', key: 'ongoing' },
    { label: 'Completed Projects', path: '/programs/completed', key: 'completed' },
    { label: 'Upcoming Projects', path: '/programs/upcoming', key: 'upcoming' },
    { label: 'Govt. Supported', path: '/programs/government', key: 'government' },
  ]
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {navItems.map(n => (
        <Link key={n.key} to={n.path}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            n.key === active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}>
          {n.label}
        </Link>
      ))}
    </div>
  )
}