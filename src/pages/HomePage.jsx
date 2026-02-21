import { useState, useMemo } from 'react'
import { LayoutGrid, List, ChevronLeft, ChevronRight } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import PropertyCard from '../components/PropertyCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import PropertyModal from '../components/PropertyModal'
import { properties } from '../data/properties'

export default function HomePage({ showToast }) {
  const [filters, setFilters] = useState({ city: 'Delhi', type: 'all', budget: 'Any Budget' })
  const [activeChip, setActiveChip] = useState('All')
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [gridView, setGridView] = useState(true)
  const [sortBy, setSortBy] = useState('relevance')

  const filtered = useMemo(() => {
    let list = [...properties]
    if (filters.type !== 'all') list = list.filter((p) => p.type === filters.type)
    return list
  }, [filters.type])

  const handleSearch = () => {
    showToast(`🔍 Searching across Housing.com, Magicbricks & 99acres in ${filters.city}…`)
    setTimeout(() => showToast(`✅ Found ${filtered.length} properties!`), 1200)
  }

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} onSearch={handleSearch} />
      <FilterBar activeChip={activeChip} setActiveChip={setActiveChip} showToast={showToast} />

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <Sidebar showToast={showToast} />

        {/* Listings */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl font-bold text-ink">
              <span className="text-gold">{filtered.length}</span> Properties Found
            </h2>
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-2 border-card-border rounded-lg px-3 py-1.5 text-sm text-ink focus:outline-none focus:border-gold"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="newest">Newest First</option>
              </select>
              <div className="flex border-2 border-card-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setGridView(true)}
                  className={`w-9 h-9 flex items-center justify-center transition-colors ${
                    gridView ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-ink/10'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setGridView(false)}
                  className={`w-9 h-9 flex items-center justify-center border-l-2 border-card-border transition-colors ${
                    !gridView ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-ink/10'
                  }`}
                  title="List View"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div
            className={`grid gap-4 ${
              gridView ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={i}
                onViewDetails={setSelectedProperty}
                showToast={showToast}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-9 h-9 flex items-center justify-center border-2 border-card-border rounded-lg bg-white text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors">
              <ChevronLeft size={16} />
            </button>
            {[1, 2, 3, '…', 8].map((p, i) => (
              <button
                key={i}
                className={`w-9 h-9 flex items-center justify-center border-2 rounded-lg text-sm font-medium transition-colors ${
                  p === 1
                    ? 'bg-ink text-white border-ink'
                    : 'border-card-border bg-white text-ink hover:bg-ink hover:text-white hover:border-ink'
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-9 h-9 flex items-center justify-center border-2 border-card-border rounded-lg bg-white text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          showToast={showToast}
        />
      )}
    </>
  )
}
