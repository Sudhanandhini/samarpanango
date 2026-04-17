import { useState } from 'react'
import PageHero from '../components/PageHero'
import { X, ZoomIn } from 'lucide-react'

import p9 from '../assets/Picture9.jpg'
import p10 from '../assets/Picture10.jpg'
import p11 from '../assets/Picture11.jpg'
import p12 from '../assets/Picture12.jpg'
import p13 from '../assets/Picture13.jpg'
import p14 from '../assets/Picture14.jpg'
import p15 from '../assets/Picture15.jpg'
import p16 from '../assets/Picture16.jpg'
import p17 from '../assets/Picture17.jpg'
import p4 from '../assets/Picture4.jpg'
import p5 from '../assets/Picture5.jpg'
import p6 from '../assets/Picture6.jpg'
import p7 from '../assets/Picture7.jpg'
import p8 from '../assets/Picture8.jpg'
import i1 from '../assets/1.jpg'
import i2 from '../assets/2.jpg'
import i3 from '../assets/3.jpg'
import i4 from '../assets/4.jpg'
import i5 from '../assets/5.jpg'
import i6 from '../assets/6.jpg'
import i7 from '../assets/7.jpg'
import i8 from '../assets/8.jpg'
import banner from '../assets/banner.jpg'
import i9 from '../assets/11(2).jpg'
import i10 from '../assets/11(1).jpg'
import i11 from '../assets/11(4).jpg'
import i12 from '../assets/11(5).jpg'
import i13 from '../assets/11(6).jpg'
import i14 from '../assets/picture8.jpg'
import i15 from '../assets/picture7.jpg'
import i16 from '../assets/picture21.jpg'
import i17 from '../assets/picture22.jpg'
import i18 from '../assets/picture23.jpg'
import i19 from '../assets/picture25.jpg'

import i20 from '../assets/picture27.jpg'
import i21 from '../assets/picture28.jpg'
import i22 from '../assets/picture30.jpg'
import i23 from '../assets/picture31.jpg'
import i24 from '../assets/picture32.jpg'
import i25 from '../assets/picture33.jpg'
import i26 from '../assets/picture34.jpg'
import i27 from '../assets/picture35.jpg'
import i28 from '../assets/picture36.jpg'
import i29 from '../assets/picture37.jpg'


const images = [p9,p10,p11,p12,p13,p14,p15,p16,p17,p4,p5,p6,p7,p8,i1,i2,i3,i4,i5,i6,i7,i8, i9, i10, i11, i12, i13, 
  i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [idx, setIdx] = useState(null)

  const open = (i) => { setIdx(i); setLightbox(images[i]) }
  const prev = (e) => { e.stopPropagation(); const i = (idx - 1 + images.length) % images.length; open(i) }
  const next = (e) => { e.stopPropagation(); const i = (idx + 1) % images.length; open(i) }

  return (
    <div>
      <PageHero
        title="Gallery"
        breadcrumb={[{ label: 'Gallery' }]}
        bgImage={banner}
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="section-tag">Our Work in Pictures</span>
          <h2 className="section-title mb-4">A Glimpse of Our Impact</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => open(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn size={28} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button onClick={prev} className="absolute left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/25 text-xl">‹</button>
          <img
            src={lightbox}
            alt=""
            className="max-w-4xl w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button onClick={next} className="absolute right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/25 text-xl">›</button>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
