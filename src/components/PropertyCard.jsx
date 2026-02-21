import { useState } from 'react'
import { GRADIENTS, SOURCES } from '../data/properties'

const TYPE_STYLES = { Rent: 'bg-[var(--color-sage)] text-white', Sale: 'bg-[var(--color-rust)] text-white', PG: 'bg-[var(--color-plum)] text-white' }
const DELAYS = ['delay-0', 'delay-80', 'delay-160', 'delay-240', 'delay-320', 'delay-400']

export default function PropertyCard({ property, index, onViewDetails, showToast }) {
  const [liked, setLiked] = useState(false)
  const delay = DELAYS[index % DELAYS.length]
  const { type, title, price, priceLabel, loc, bhk, area, floor, furnished, source, grad, emoji } = property
  const sourceColor = SOURCES[source]?.color || '#888'

  function toggleLike(e) {
    e.stopPropagation()
    const next = !liked
    setLiked(next)
    showToast(next ? '❤️ Added to favorites!' : 'Removed from favorites')
  }

  return (
    <div
      className={`bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden cursor-pointer animate-fadeUp ${delay} hover:-translate-y-1 transition-all duration-200`}
      style={{ boxShadow: '0 4px 24px rgba(26,26,46,0.08)' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,26,46,0.14)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,26,46,0.08)'}
    >
      <div className="h-48 relative flex items-center justify-center" style={{ background: GRADIENTS[grad] }}>
        <span className="text-5xl relative z-10">{emoji}</span>
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${TYPE_STYLES[type] || 'bg-gray-500 text-white'}`}>{type}</span>
        <button onClick={toggleLike} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-base transition-transform duration-200 hover:scale-110 border-0 cursor-pointer">
          {liked ? '❤️' : '🤍'}
        </button>
        <span className="absolute bottom-3 right-3 text-white text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: sourceColor + 'cc' }}>{source}</span>
      </div>
      <div className="p-4">
        <div className="font-[var(--font-display)] text-xl font-bold text-[var(--color-ink)]">
          {price}<span className="font-[var(--font-body)] text-xs font-normal text-[var(--color-muted)]">{priceLabel}</span>
        </div>
        <div className="text-sm font-semibold mt-1 mb-1 text-[var(--color-ink)]">{title}</div>
        <div className="flex items-center gap-1 text-xs text-[var(--color-muted)] mb-3">📍 {loc}</div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {[`🛏 ${bhk}`, `📐 ${area}`, `🏗 ${floor}`, `🪑 ${furnished}`].map(s => (
            <span key={s} className="bg-[var(--color-warm)] text-[var(--color-ink)] text-[11px] font-medium px-2 py-1 rounded-md">{s}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => showToast(`📞 Connecting you with ${property.owner}…`)} className="flex-1 bg-[var(--color-ink)] hover:bg-[var(--color-gold)] text-white text-xs font-bold py-2.5 rounded-lg transition-colors duration-200 cursor-pointer border-0">
            Contact Owner
          </button>
          <button onClick={() => onViewDetails(property)} className="flex-1 bg-transparent hover:bg-[var(--color-ink)] text-[var(--color-ink)] hover:text-white text-xs font-bold py-2.5 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-ink)] transition-all duration-200 cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
