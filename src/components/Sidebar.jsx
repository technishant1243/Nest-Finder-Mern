import { useState } from 'react'
import { SOURCES } from '../data/properties'

const AMENITIES = ['🅿️ Parking', '🏋️ Gym', '🏊 Pool', '🛡️ Security', '🌿 Garden', '⚡ Power BU', '🛗 Lift', '📶 WiFi']
const SOURCE_COUNTS = { 'Housing.com': 12, 'Magicbricks': 9, '99acres': 8, 'NoBroker': 5 }

function SideCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border)] p-5">
      <h3 className="font-[var(--font-display)] font-bold text-base text-[var(--color-ink)] mb-4">{title}</h3>
      {children}
    </div>
  )
}

export default function Sidebar({ showToast }) {
  const [priceVal, setPriceVal] = useState(40000)
  const [amenities, setAmenities] = useState([])
  const [sources, setSources] = useState(['Housing.com', 'Magicbricks', '99acres'])
  const [types, setTypes] = useState(['Flat / Apartment', 'Independent House'])

  const toggleAmenity = (a) => setAmenities(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a])
  const toggleSource  = (s) => setSources(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  const toggleType    = (t) => setTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const priceDisplay = priceVal >= 100000
    ? 'Up to ₹1 Lakh+'
    : `Up to ₹${priceVal.toLocaleString('en-IN')}/mo`

  return (
    <aside className="flex flex-col gap-4">
      {/* Map Placeholder */}
      <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-56 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }}>
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="mapgrid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="#4a7c59" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#mapgrid)" />
        </svg>
        <div className="relative z-10 text-center">
          <div className="text-4xl mb-1">📍</div>
          <div className="text-sm font-bold text-green-800">Delhi NCR</div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[var(--color-ink)]/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
          🗺️ Map View — 24 listings
        </div>
      </div>

      <SideCard title="Price Range">
        <div className="flex flex-col gap-3">
          <input type="range" min={5000} max={100000} step={1000} value={priceVal} onChange={e => setPriceVal(Number(e.target.value))} className="w-full" />
          <div className="text-center font-[var(--font-display)] text-lg font-bold">{priceDisplay}</div>
          <div className="flex justify-between text-xs text-[var(--color-muted)]"><span>₹5K</span><span>₹1 Lakh</span></div>
        </div>
      </SideCard>

      <SideCard title="Property Type">
        <div className="flex flex-col gap-3">
          {['Flat / Apartment', 'Independent House', 'PG / Hostel', 'Studio', 'Villa'].map(t => (
            <label key={t} className="flex items-center gap-2.5 cursor-pointer text-sm">
              <input type="checkbox" checked={types.includes(t)} onChange={() => toggleType(t)} className="w-4 h-4" />
              {t}
            </label>
          ))}
        </div>
      </SideCard>

      <SideCard title="Amenities">
        <div className="grid grid-cols-2 gap-2">
          {AMENITIES.map(a => (
            <button key={a} onClick={() => toggleAmenity(a)} className={`px-2 py-2 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer text-center ${amenities.includes(a) ? 'bg-[var(--color-gold)] border-[var(--color-gold)] text-white' : 'bg-white border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'}`}>
              {a}
            </button>
          ))}
        </div>
        <button onClick={() => showToast('✅ Filters applied!')} className="mt-4 w-full bg-[var(--color-ink)] hover:bg-[var(--color-gold)] text-white font-bold rounded-lg py-2.5 text-sm transition-colors duration-200 cursor-pointer border-0">
          Apply Filters
        </button>
      </SideCard>

      <SideCard title="Data Sources">
        <div className="flex flex-col gap-3">
          {Object.entries(SOURCES).map(([name, { color }]) => (
            <label key={name} className="flex items-center gap-2.5 cursor-pointer text-sm">
              <input type="checkbox" checked={sources.includes(name)} onChange={() => toggleSource(name)} className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
              {name}
              <span className="ml-auto text-xs text-[var(--color-muted)]">({SOURCE_COUNTS[name]})</span>
            </label>
          ))}
        </div>
      </SideCard>
    </aside>
  )
}
