import PageHero from '../components/PageHero'
import { ExternalLink, HandshakeIcon } from 'lucide-react'
import logo1 from '../assets/14.webp'
import logo2 from '../assets/12.webp'
import logo3 from '../assets/13.webp'
import logo4 from '../assets/11.png'

const partners = [
  {
    name: 'Ministry of Tribal Affairs, New Delhi',
    type: 'Government Partner',
    desc: 'Supporting tribal welfare and development programs across India, the Ministry of Tribal Affairs funds key projects of Samarpana focusing on tribal education and community development.',
    areas: ['Tribal Education', 'Community Welfare', 'Livelihood Support'],
    color: 'bg-blue-600',
    abbr: 'MTA',
    logo: logo1,
  },
  {
    name: 'Karnataka AIDS Prevention Society, Bangalore',
    type: 'Health Partner',
    desc: 'KAPS works with Samarpana to implement HIV/AIDS awareness, prevention, and support programs across Karnataka, reaching vulnerable populations in rural and urban areas.',
    areas: ['HIV/AIDS Awareness', 'Preventive Health', 'Community Health'],
    color: 'bg-red-600',
    abbr: 'KAPS',
    logo: logo2,
  },
  {
    name: 'NABARD Financial Services Ltd, Bangalore',
    type: 'Financial Partner',
    desc: 'NABARD supports Samarpana rural development and livelihood programs through grants and technical assistance, enabling self-help group formation and microfinance access for marginalized communities.',
    areas: ['Microfinance', 'Rural Development', 'SHG Support'],
    color: 'bg-green-700',
    abbr: 'NABARD',
    logo: logo3,
  },
  {
    name: 'Tektornix / Ralliant Pvt Ltd',
    type: 'Corporate Partner',
    desc: 'Through their CSR initiatives, Tektornix / Ralliant Pvt Ltd partners with Samarpana to support skill development and youth empowerment programs, bridging the gap between industry and community.',
    areas: ['Skill Development', 'Youth Employment', 'CSR Programs'],
    color: 'bg-orange-600',
    abbr: 'TRP',
    logo: logo4,
  },
]

export default function ProjectPartners() {
  return (
    <div>
      <PageHero
        title="Project Partners"
        breadcrumb={[{ label: 'Project Partners' }]}
        bgImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <span className="section-tag">Our Partners</span>
          <h2 className="section-title mb-4">Working Together for Lasting Change</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Samarpana impact is amplified through strong partnerships with government bodies, financial institutions, and corporate organizations who share our vision for an equitable society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-5 mb-6">
                {/* Logo or abbreviation */}
                <div className={`w-16 h-16 rounded-2xl shrink-0 overflow-hidden flex items-center justify-center ${p.logo ? 'bg-white border border-gray-100 shadow-sm p-1' : `${p.color} text-white font-bold text-sm`}`}>
                  {p.logo
                    ? <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                    : p.abbr
                  }
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary leading-tight">{p.name}</h3>
                  <span className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full mt-2 inline-block">{p.type}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {p.areas.map(a => (
                    <span key={a} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-center text-white">
          <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <HandshakeIcon size={28} className="text-accent" />
          </div>
          <h3 className="font-heading text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            We welcome collaborations with organizations that share our values. Whether you're a government body, corporate entity, or civil society organization, let's work together for greater impact.
          </p>
          <a href="/contact" className="btn-primary">Partner With Us <ExternalLink size={16} /></a>
        </div>
      </section>
    </div>
  )
}
