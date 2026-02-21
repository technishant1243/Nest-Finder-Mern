import { SOURCE_COLORS } from '../data/properties'

const chips = ['All', '1 BHK', '2 BHK', '3 BHK', 'Furnished', 'Parking', 'Gym']

const sources = [
  { name: 'Housing', color: SOURCE_COLORS['Housing.com'] },
  { name: 'Magicbricks', color: SOURCE_COLORS['Magicbricks'] },
  { name: '99acres', color: SOURCE_COLORS['99acres'] },
]

export default function FilterBar({ activeChip, setActiveChip, showToast }) {
  return (
    <div className="bg-white border-b border-card-border px-4 py-3 flex flex-wrap gap-2 items-center">
      <span className="text-xs font-bold text-muted uppercase tracking-wider mr-1">Filter:</span>

      {chips.map((chip) => (
        <button
          key={chip}
          onClick={() => {
            setActiveChip(chip)
            showToast(`Filter applied: ${chip}`)
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
            activeChip === chip
              ? 'bg-gold border-gold text-white'
              : 'bg-white border-card-border text-ink hover:bg-ink hover:border-ink hover:text-white'
          }`}
        >
          {chip}
        </button>
      ))}

      {/* Sources legend */}
      <div className="ml-auto flex items-center gap-3 text-xs text-muted">
        <span className="font-medium">Sources:</span>
        {sources.map(({ name, color }) => (
          <span key={name} className="flex items-center gap-1">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: color }}
            />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
