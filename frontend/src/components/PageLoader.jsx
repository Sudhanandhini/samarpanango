import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#fff',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, gap: '24px'
    }}>
      {/* Spinning ring */}
      <div style={{ position: 'relative', width: 110, height: 110 }}>
        <svg width="110" height="110" style={{ position: 'absolute', top: 0, left: 0, animation: 'spin 1.4s linear infinite' }}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3c2e" />
              <stop offset="50%" stopColor="#e8a020" />
              <stop offset="100%" stopColor="#f5c84a" />
            </linearGradient>
          </defs>
          <circle cx="55" cy="55" r="48" fill="none" stroke="#f0f0f0" strokeWidth="6" />
          <circle cx="55" cy="55" r="48" fill="none" stroke="url(#ringGrad)" strokeWidth="6"
            strokeLinecap="round" strokeDasharray="200 105" strokeDashoffset="0" />
        </svg>
        <img src={logo} alt="Logo"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 64, height: 64, objectFit: 'contain' }} />
      </div>

      {/* Text */}
      <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
        <p style={{ fontFamily: "'Noto Sans Kannada', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#1a3c2e', margin: 0 }}>
          ಕಾಯಕವೇ ಕೈಲಾಸ
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#e8a020', margin: '4px 0 0' }}>
          Kayakave Kailasa
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ width: 220 }}>
        <div style={{ height: 6, background: '#eee', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: 'linear-gradient(90deg, #1a3c2e, #e8a020, #f5c84a)',
            borderRadius: 99, transition: 'width 0.04s linear'
          }} />
        </div>
        <p style={{ textAlign: 'center', marginTop: 8, fontSize: '0.85rem', color: '#888', fontFamily: "'DM Sans', sans-serif" }}>
          {progress}%
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
