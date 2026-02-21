import { useEffect } from 'react'
import { GRADIENTS, SOURCES } from '../data/properties'

export default function PropertyModal({ property, onClose, showToast }) {
  useEffect(() => {
    document.body.style.overflow = property ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [property])

  if (!property) return null

  const { title, price, priceLabel, loc, bhk, area, floor, furnished, source, owner, desc, amenities, grad, emoji } = property
  const sourceColor = SOURCES[source]?.color || '#888'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(26,26,46,0.75)' }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-modalIn">
        <div className="h-60 relative flex items-center justify-center" style={{ background: GRADIENTS[grad] }}>
          <span className="text-7xl">{emoji}</span>
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-lg border-0 cursor-pointer transition-colors">✕</button>
          <span className="absolute bottom-4 left-4 text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: sourceColor }}>{source}</span>
        </div>
        <div className="p-6">
          <div className="font-[var(--font-display)] text-3xl font-black text-[var(--color-ink)]">
            {price}<span className="font-[var(--font-body)] text-sm font-normal text-[var(--color-muted)]">{priceLabel}</span>
          </div>
          <div className="text-base font-semibold mt-1 mb-0.5">{title}</div>
          <div className="text-sm text-[var(--color-muted)] mb-4">📍 {loc}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {[bhk, area, floor, furnished].map(s => (
              <span key={s} className="bg-[var(--color-warm)] text-[var(--color-ink)] text-sm font-medium px-3 py-1.5 rounded-lg">{s}</span>
            ))}
          </div>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{desc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {amenities.map(a => (
              <span key={a} className="bg-green-50 text-[var(--color-sage)] text-xs font-bold px-2.5 py-1 rounded-lg">✓ {a}</span>
            ))}
          </div>
          <div className="bg-[var(--color-warm)] rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="font-bold text-sm">{owner}</div>
              <div className="text-xs text-[var(--color-muted)] mt-0.5">Property Owner / Agent</div>
            </div>
            <button onClick={() => { showToast('📞 Calling owner… connecting!'); onClose() }} className="bg-[var(--color-sage)] hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg border-0 cursor-pointer transition-colors duration-200">
              📞 Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
