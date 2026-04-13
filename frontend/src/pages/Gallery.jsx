import { useState } from 'react'
import PageHero from '../components/PageHero'
import { X, ZoomIn } from 'lucide-react'

const categories = ['All', 'Education', 'Health', 'Women Empowerment', 'Community', 'Events']

const images = [
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80', cat: 'Education', title: 'School Support Program' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', cat: 'Community', title: 'Community Outreach' },
  { src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80', cat: 'Education', title: 'Learning Together' },
  { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', cat: 'Women Empowerment', title: 'Women SHG Meeting' },
  { src: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&q=80', cat: 'Health', title: 'Health Camp' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', cat: 'Events', title: 'Annual Day Event' },
  { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80', cat: 'Education', title: 'Computer Training' },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', cat: 'Events', title: 'Partner Meeting' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', cat: 'Health', title: 'Medical Camp' },
  { src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80', cat: 'Community', title: 'Village Development' },
  { src: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=600&q=80', cat: 'Women Empowerment', title: 'Skill Training Workshop' },
  { src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80', cat: 'Events', title: 'Awareness Rally' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All' ? images : images.filter(img => img.cat === activeCategory)

  return (
    <div>
      <PageHero
        title="Gallery"
        breadcrumb={[{ label: 'Gallery' }]}
        bgImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="section-tag">Our Work in Pictures</span>
          <h2 className="section-title mb-4">A Glimpse of Our Impact</h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                <ZoomIn size={24} className="text-white" />
                <span className="text-white text-xs font-medium">{img.title}</span>
                <span className="text-accent text-[10px]">{img.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="flex justify-between items-center mt-3 px-2">
              <div>
                <p className="text-white font-medium">{lightbox.title}</p>
                <p className="text-accent text-sm">{lightbox.cat}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
