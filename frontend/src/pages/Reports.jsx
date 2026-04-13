import PageHero from '../components/PageHero'
import { FileText, Download, Calendar, Eye } from 'lucide-react'

const reports = [
  {
    category: 'Annual Reports',
    items: [
      { title: 'Annual Report 2023–24', size: '4.2 MB', date: 'April 2024', type: 'PDF' },
      { title: 'Annual Report 2022–23', size: '3.8 MB', date: 'April 2023', type: 'PDF' },
      { title: 'Annual Report 2021–22', size: '3.5 MB', date: 'April 2022', type: 'PDF' },
      { title: 'Annual Report 2020–21', size: '3.1 MB', date: 'April 2021', type: 'PDF' },
    ],
  },
  {
    category: 'Audit Reports',
    items: [
      { title: 'Audited Financial Statement 2023–24', size: '1.8 MB', date: 'June 2024', type: 'PDF' },
      { title: 'Audited Financial Statement 2022–23', size: '1.6 MB', date: 'June 2023', type: 'PDF' },
      { title: 'Audited Financial Statement 2021–22', size: '1.4 MB', date: 'June 2022', type: 'PDF' },
    ],
  },
  {
    category: 'Project Reports',
    items: [
      { title: 'Tribal Education Program – Impact Report 2023', size: '2.1 MB', date: 'Dec 2023', type: 'PDF' },
      { title: 'Women Empowerment SHG Report 2023', size: '1.9 MB', date: 'Nov 2023', type: 'PDF' },
      { title: 'Mobile Health Camp Report 2022–23', size: '1.3 MB', date: 'March 2023', type: 'PDF' },
      { title: 'Skill Development Outcomes Report 2023', size: '1.6 MB', date: 'Jan 2024', type: 'PDF' },
    ],
  },
  {
    category: 'Legal & Compliance Documents',
    items: [
      { title: 'Registration Certificate (Trust Deed)', size: '0.5 MB', date: '2000', type: 'PDF' },
      { title: '12A & 80G Certificate', size: '0.4 MB', date: '2005', type: 'PDF' },
      { title: 'FCRA Certificate', size: '0.3 MB', date: '2010', type: 'PDF' },
      { title: 'CSR Registration Certificate', size: '0.3 MB', date: '2020', type: 'PDF' },
    ],
  },
]

export default function Reports() {
  return (
    <div>
      <PageHero
        title="Reports & Documents"
        breadcrumb={[{ label: 'Reports & Documents' }]}
        bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
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
                  <div key={ii} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm truncate">{item.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar size={11} /> {item.date}</span>
                        <span className="text-xs text-gray-400">{item.size}</span>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{item.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-500">
                        <Eye size={14} />
                      </button>
                      <button className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-accent">
                        <Download size={14} />
                      </button>
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
