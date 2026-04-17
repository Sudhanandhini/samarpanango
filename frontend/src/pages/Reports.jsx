import PageHero from '../components/PageHero'
import { FileText, Calendar } from 'lucide-react'
import report1 from "../assets/annual/SDO-annual-2024-25.pdf"
import report2 from "../assets/annual/SDO-annual-2024-25.pdf"
import report3 from "../assets/annual/SDO-annual-2024-25.pdf"
import audit1 from "../assets/annual/SDO-Audit-report-2025-2023.pdf"

import banner from "../assets/banner.jpg"

import reg from "../assets/annual/SDO-Registration.pdf"
import bylaws from "../assets/annual/SDO-Bylows.pdf"
import pan from "../assets/annual/SDO-PAN.pdf"
import g80 from "../assets/annual/SDO-80G-12A.pdf"
import niti from "../assets/annual/SDO-NITI-Aayog.pdf"
import csr from "../assets/annual/SDO-NITI-Aayog.pdf"
import disable from "../assets/annual/SDO-registration-Section-51-52-Disabled-act.pdf"
import it from "../assets/annual/SDO-NITI-Aayog.pdf"

const reports = [
  {
    category: 'Annual Reports',
    items: [
      { title: 'Annual Report 2024–25', date: 'April 2025', type: 'PDF', file: report1 },
      { title: 'Annual Report 2023–24', date: 'April 2024', type: 'PDF', file: report2 },
      { title: 'Annual Report 2022–23', date: 'April 2023', type: 'PDF', file: report3 },
    ],
  },
  {
    category: 'Audit Reports',
    items: [
      { title: 'Audited Financial Statement 2023–25', size: '1.8 MB', date: 'June 2024', type: 'PDF', file: audit1 },
      
    ],
  },
  // {
  //   category: 'Project Reports',
  //   items: [
  //     { title: 'Tribal Education Program – Impact Report 2023', size: '2.1 MB', date: 'Dec 2023', type: 'PDF' },
  //     { title: 'Women Empowerment SHG Report 2023', size: '1.9 MB', date: 'Nov 2023', type: 'PDF' },
  //     { title: 'Mobile Health Camp Report 2022–23', size: '1.3 MB', date: 'March 2023', type: 'PDF' },
  //     { title: 'Skill Development Outcomes Report 2023', size: '1.6 MB', date: 'Jan 2024', type: 'PDF' },
  //   ],
  // },
  {
    category: 'Legal & Compliance Documents',
    items: [
      { title: 'SDO registration ', size: '0.5 MB', date: '2000', type: 'PDF', file:reg },
      { title: 'SDO Bylaws', size: '0.4 MB', date: '2005', type: 'PDF', file:bylaws },
      { title: 'SDO PAN Copy', size: '0.3 MB', date: '2010', type: 'PDF', file:pan },
      { title: 'SDO 80G 12A', size: '0.3 MB', date: '2020', type: 'PDF', file: g80 },
      { title: 'SDO NITI Aayog ', size: '0.5 MB', date: '2000', type: 'PDF', file:niti },
      { title: 'SDO CSR', size: '0.4 MB', date: '2005', type: 'PDF', file:csr },
      { title: 'SDO registration  Section 51 52 Disabled act', size: '0.3 MB', date: '2010', type: 'PDF', file:disable },
      { title: 'SDO IT Returns', size: '0.3 MB', date: '2020', type: 'PDF', file:it }
    ],
  },
]

export default function Reports() {
  return (
    <div>
      <PageHero
        title="Reports & Documents"
        breadcrumb={[{ label: 'Reports & Documents' }]}
        bgImage={banner}
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <span className="section-tag">Transparency & Accountability</span>
          <h2 className="section-title mb-4">Reports & Official Documents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Samarpana is committed to complete transparency. All our annual reports, financial statements, and legal documents are publicly available for download.
          </p>
        </div>

        <div className="space-y-12">
          {reports.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText size={16} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{section.category}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    onClick={() => item.file && window.open(item.file, '_blank')}
                    className={`bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 transition-shadow group ${item.file ? 'hover:shadow-md hover:border-primary cursor-pointer' : 'opacity-60'}`}
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-sm truncate ${item.file ? 'text-primary group-hover:underline' : 'text-gray-800'}`}>{item.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        {/* <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar size={11} /> {item.date}</span>
                        {item.size && <span className="text-xs text-gray-400">{item.size}</span>} */}
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cream rounded-3xl p-8 text-center">
          <p className="text-gray-600 text-sm">
            For specific documents or information not listed above, please contact us at{' '}
            <a href="mailto:samarpana2000@gmail.com" className="text-accent font-semibold hover:underline">samarpana2000@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}
