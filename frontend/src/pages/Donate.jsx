import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { Copy, CheckCircle, Heart, Building2, Phone, Mail, Globe, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import qr from '../assets/qr.jpg'

import banner from "../assets/banner.jpg"

const regDetails = [
  { label: 'Name of the NGO', value: 'Samarpana Development Organization' },
  { label: 'Contact Person', value: 'Mr. Chandrappa MSW — President\nCell: 9448518172\n\nMr. Ramadas MSW — General Secretary\nCell: 9483700272' },
  { label: 'Registered Address', value: 'Samarpana Development Organization\nGangan Gouda Building, Room No. 3, Kadari Colony\nHatti Road, Sindhanur Taluk\nRaichur Dist. Karnataka — Pin 584128' },
  { label: 'Present & Communication Address', value: 'Samarpana Development Organization\nNear Government Junior College, PWD Camp\nSindhanur Dist. Raichur State, Karnataka (India)\nPin Code: 584128' },
  { label: 'Telephone', value: '08535-221272 / 9448518172 / 9483700272' },
  { label: 'Email', value: 'samarpana_org@rediffmail.com\nsamarpana2000@gmail.com' },
  { label: 'Website', value: 'samarpanadv.org' },
  { label: 'Year of Establishment', value: '05-10-2000' },
  { label: 'Registration No.', value: 'SOR/50/2000' },
  { label: 'PAN No.', value: 'AAGTS6717C' },
  { label: '12A', value: '05/12A/CIT-GLB2007/08 (Income Tax Act 1961)' },
  { label: '80G', value: '20/80G/CIT/GLB/2010-11' },
  { label: 'FCR No.', value: '0964610045' },
  { label: 'Service Tax No.', value: 'AAGTS6717CSD001' },
  { label: 'Professional Tax No.', value: 'CDT 742676560' },
  { label: 'EPF No.', value: '1608605341' },
  { label: 'ESI No.', value: '7100002060000999' },
  {
    label: 'Bank Account Information',
    value: 'Joint Account in the name of President & General Secretary\nCanara Bank — SB A/C No: 17111010019412\nIFSC Code: CNRB0001711',
    highlight: true,
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy} className="ml-2 text-accent hover:text-accent-light transition-colors" title="Copy">
      {copied ? <CheckCircle size={14} className="text-green-500" /> : <Copy size={14} />}
    </button>
  )
}

export default function Donate() {
  return (
    <div>
      <PageHero
        title="Donate Now"
        breadcrumb={[{ label: 'Donate Now' }]}
        bgImage={banner}
      />

      <section className="max-w-6xl mx-auto px-4 py-16">

        {/* Why donate */}
        <div className="text-center mb-14">
          <span className="section-tag">Make a Difference</span>
          <h2 className="section-title mb-4">Your Donation Changes Lives</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Every contribution — big or small — directly supports education, health, and livelihood programs for marginalized communities across Karnataka. Donations are eligible for 50% tax exemption under Section 80G.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* ── UPI / QR Section ── */}
          <div className="bg-sky-500 rounded-3xl p-8 text-white flex flex-col items-center">
            <p className="text-sky-100 text-xs font-semibold uppercase tracking-widest mb-1">Scan &amp; Pay Instantly</p>
            <h3 className="font-heading text-2xl font-bold mb-1">BHIM UPI Payment</h3>
            <p className="text-sky-100 text-sm mb-6">Scan using any BHIM UPI enabled app</p>

            {/* QR card */}
            <div className="bg-white rounded-2xl p-2 w-full max-w-xs text-center shadow-xl mb-5">
             
              {/* QR Code placeholder — replace src with actual QR image */}
              <div className="w-full h-auto ">
                <div className="text-center text-gray-400 text-xs px-2">
                  {/* <p className="font-semibold mb-1">QR Code</p>
                  <p>Place QR image here</p>
                  <p className="mt-1 text-[10px]">(Add qr.png to assets folder)</p> */}
                  <img src={qr} alt="UPI QR Code" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* <div className="bg-sky-50 rounded-xl px-4 py-2 flex items-center justify-center gap-1">
                <span className="text-sky-700 font-semibold text-sm">8660425731kagb1@cnrb</span>
                <CopyButton text="8660425731kagb1@cnrb" />
              </div> */}
            </div>

            {/* Accepted apps */}
            <p className="text-sky-100 text-xs mb-3 uppercase tracking-widest">Accepted via</p>
            <div className="flex flex-wrap justify-center gap-4 text-center text-white text-xs font-semibold">
              {['Canara', 'BHIM', 'Google Pay', 'PayTm', 'Phone Pe'].map(app => (
                <div key={app} className="bg-white/20 rounded-xl px-4 py-2 min-w-[68px]">
                  {app}
                </div>
              ))}
            </div>
          </div>

          {/* ── Bank Transfer ── */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Building2 size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">Bank Transfer</h3>
                <p className="text-gray-400 text-xs">Direct bank deposit / NEFT / RTGS</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Account Name', value: 'President & General Secretary\nSamarpana Development Organization' },
                { label: 'Bank', value: 'Canara Bank' },
                { label: 'Account Type', value: 'Savings Account (Joint)' },
                { label: 'Account No.', value: '17111010019412', copy: true },
                { label: 'IFSC Code', value: 'CNRB0001711', copy: true },
                { label: 'Branch', value: 'Sindhanur, Raichur District, Karnataka' },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4 py-3 border-b border-gray-50 last:border-0">
                  <span className="text-gray-400 text-xs font-medium w-32 shrink-0">{item.label}</span>
                  <div className="flex items-start gap-1 flex-1">
                    <span className="text-primary text-sm font-semibold whitespace-pre-line leading-relaxed">{item.value}</span>
                    {item.copy && <CopyButton text={item.value} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
              <p className="text-green-700 text-xs leading-relaxed">
                Donations are eligible for <strong>50% tax exemption</strong> under Section 80G (Registration: 20/80G/CIT/GLB/2010-11). Please share your PAN and address to receive the tax receipt.
              </p>
            </div>
          </div>
        </div>

        {/* ── NGO Registration Details Table ── */}
        {/* <div className="bg-white border border-gray-100 rounded-3xl shadow-md overflow-hidden mb-10">
          <div className="bg-primary px-8 py-5">
            <h3 className="font-heading text-xl font-bold text-white">NGO Registration &amp; Legal Details</h3>
            <p className="text-gray-300 text-sm mt-1">All registrations and certifications of Samarpana Development Organization</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {regDetails.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${row.highlight ? 'bg-accent/5' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-4 font-semibold text-primary w-56 shrink-0 align-top text-xs uppercase tracking-wide">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-gray-700 whitespace-pre-line leading-relaxed align-top">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        {/* ── Contact for donations ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { icon: Phone, label: 'Call Us', lines: ['Mr. Chandrappa: 9448518172', 'Mr. Ramadas: 9483700272', 'Office: 08535-221272'], color: 'bg-primary' },
            { icon: Mail, label: 'Email Us', lines: ['samarpana_org@rediffmail.com', 'samarpana2000@gmail.com'], color: 'bg-accent' },
            { icon: Globe, label: 'Website', lines: ['samarpanadv.org'], color: 'bg-green-600' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                <item.icon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{item.label}</p>
                {item.lines.map((l, li) => <p key={li} className="text-gray-700 text-sm font-medium">{l}</p>)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0">
              <Heart size={26} className="text-white" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold">Want to Volunteer Instead?</h4>
              <p className="text-gray-300 text-sm mt-1">Join our growing network of passionate change-makers across Karnataka.</p>
            </div>
          </div>
          <Link to="/get-involved/volunteer" className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-full shrink-0 transition-colors">
            Get Involved <ArrowRight size={16} />
          </Link>
        </div>

      </section>
    </div>
  )
}
