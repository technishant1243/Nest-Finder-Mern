import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FiltersBar from './components/FiltersBar'
import Sidebar from './components/Sidebar'
import PropertyCard from './components/PropertyCard'
import PropertyModal from './components/PropertyModal'
import Toast from './components/Toast'
import { useToast } from './hooks/useToast'
import { PROPERTIES } from './data/properties'

const PAGES = [1, 2, 3, 4, 5]

export default function App() {
  const [activeChip, setActiveChip] = useState('All')
  const [selectedProp, setSelectedProp] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [sortBy, setSortBy] = useState('relevance')
  const { toast, showToast } = useToast()

  const filtered = useMemo(() => {
    let list = [...PROPERTIES]
    if (activeChip !== 'All') {
      const chip = activeChip.toLowerCase()
      list = list.filter(p =>
        p.bhk.toLowerCase().includes(chip) ||
        p.amenities.some(a => a.toLowerCase().includes(chip)) ||
        p.furnished.toLowerCase().includes(chip)
      )
    }
    return list
  }, [activeChip])

  function handleSearch() {
    showToast('🔍 Searching across Housing.com, Magicbricks & 99acres…')
    setTimeout(() => showToast(`✅ Found ${filtered.length} properties!`), 1200)
  }

  function handleChip(chip) {
    setActiveChip(chip)
    showToast(`Filter: ${chip}`)
  }

  return (
    <div className="min-h-screen bg-[var(--color-warm)]" style={{ fontFamily: 'var(--font-body)' }}>
      <Navbar onAuthClick={label => showToast(`Opening ${label}…`)} />
      <Hero onSearch={handleSearch} />
      <FiltersBar onChipClick={handleChip} />

      {/* Main Layout */}
      <div className="max-w-[1280px] mx-auto px-5 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <Sidebar showToast={showToast} />
          </div>
        </div>

        {/* Listings */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="font-[var(--font-display)] text-2xl font-bold">
              <span className="text-[var(--color-gold)]">{filtered.length}</span> Properties Found
            </div>
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-[var(--color-border)] rounded-lg px-3 py-2 text-sm bg-white text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-gold)] cursor-pointer"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="newest">Newest First</option>
              </select>
              <div className="flex gap-1">
                {['⊞', '☰'].map((icon, i) => (
                  <button
                    key={icon}
                    className={`w-9 h-9 rounded-lg border text-sm flex items-center justify-center cursor-pointer transition-all duration-200 ${
                      i === 0
                        ? 'bg-[var(--color-ink)] border-[var(--color-ink)] text-white'
                        : 'bg-white border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:border-[var(--color-ink)] hover:text-white'
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[var(--color-muted)]">
              <div className="text-5xl mb-4">🏠</div>
              <div className="text-lg font-semibold">No properties found</div>
              <div className="text-sm mt-1">Try adjusting your filters</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
              {filtered.map((prop, i) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  index={i}
                  onViewDetails={setSelectedProp}
                  showToast={showToast}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="w-9 h-9 rounded-lg border border-[var(--color-border)] bg-white text-sm flex items-center justify-center cursor-pointer hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)] transition-all duration-200">
              ‹
            </button>
            {PAGES.map(p => (
              <button
                key={p}
                onClick={() => { setActivePage(p); showToast(`Page ${p}`) }}
                className={`w-9 h-9 rounded-lg border text-sm flex items-center justify-center cursor-pointer font-medium transition-all duration-200 ${
                  activePage === p
                    ? 'bg-[var(--color-ink)] border-[var(--color-ink)] text-white'
                    : 'bg-white border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)]'
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-9 h-9 rounded-lg border border-[var(--color-border)] bg-white text-sm flex items-center justify-center cursor-pointer hover:bg-[var(--color-ink)] hover:text-white hover:border-[var(--color-ink)] transition-all duration-200">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PropertyModal
        property={selectedProp}
        onClose={() => setSelectedProp(null)}
        showToast={showToast}
      />

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
