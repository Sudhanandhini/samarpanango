import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero
        title="Contact Us"
        breadcrumb={[{ label: 'Contact Us' }]}
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left: Info cards */}
          <div className="space-y-5">
            <div>
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title mb-3">We'd Love to Hear From You</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reach out to us for partnerships, donations, volunteering, or any queries about our programs.
              </p>
            </div>

            {[
              {
                icon: Phone,
                label: 'Phone Number',
                lines: ['Mr. Ramdas M', '+91 94837 00272'],
                color: 'bg-primary',
              },
              {
                icon: MapPin,
                label: 'Location',
                lines: ['Bangalore, Karnataka', 'India – 560 001'],
                color: 'bg-accent',
              },
              {
                icon: Mail,
                label: 'Email Address',
                lines: ['samarpana2000@gmail.com'],
                color: 'bg-green-600',
              },
              // {
              //   icon: Clock,
              //   label: 'Office Hours',
              //   lines: ['Mon–Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
              //   color: 'bg-purple-600',
              // },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{item.label}</p>
                  {item.lines.map((line, li) => (
                    <p key={li} className="text-gray-800 text-sm font-medium leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
            {sent ? (
              <div className="h-full flex items-center justify-center text-center py-20">
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={36} className="text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. We will get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', address: '', message: '' }) }}
                    className="mt-6 text-accent font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-primary mb-7">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Address</label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you or how you'd like to get involved..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary text-base py-3.5 px-8">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-6 rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2284.6635833440805!2d76.7807641!3d15.7810196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7eb52e5c2b993%3A0xdaab26da382c5a1d!2sAshakiran%20poor%20and%20orphan%20childrens%20hostel!5e1!3m2!1sen!2sau!4v1776066938348!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
