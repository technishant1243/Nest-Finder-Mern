import { useState } from 'react'
import { SOURCES } from '../data/properties'

const CHIPS = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Furnished', 'Parking', 'Gym', 'Pool']

export default function FiltersBar({ onChipClick }) {
  const [active, setActive] = useState('All')

  function handleChip(chip) {
    setActive(chip)
    onChipClick(chip)
  }

  return (
    <div className="bg-white border-b border-[var(--color-border)] px-6 py-3 flex items-center gap-3 flex-wrap sticky top-16 z-40">
      <span className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest mr-1">Filter:</span>

      {CHIPS.map((chip) => (
        <button
          key={chip}
          onClick={() => handleChip(chip)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
            active === chip
              ? 'bg-[var(--color-gold)] border-[var(--color-gold)] text-white'
              : 'bg-white border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-white'
          }`}
        >
          {chip}
        </button>
      ))}

      {/* Source dots */}
      <div className="ml-auto flex items-center gap-2 text-xs text-[var(--color-muted)]">
        <span>Sources:</span>
        {Object.entries(SOURCES).map(([name, { color }]) => (
          <span key={name} className="flex items-center gap-1">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse-dot"
              style={{ backgroundColor: color }}
            />
            <span className="hidden lg:inline">{name}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
