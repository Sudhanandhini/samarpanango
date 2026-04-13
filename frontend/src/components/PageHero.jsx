import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, breadcrumb = [], bgImage }) {
  const bg = bgImage || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80'
  return (
    <div className="relative wavy-bottom">
      <div
        className="h-64 md:h-80 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13,36,24,0.75), rgba(13,36,24,0.75)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-accent" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-accent transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-accent">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
