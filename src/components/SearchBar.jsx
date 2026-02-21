import { Search } from 'lucide-react'
import { CITIES } from '../data/properties'

export default function SearchBar({ filters, setFilters, onSearch }) {
  return (
    <section className="bg-ink pb-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* City */}
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">
              City
            </label>
            <select
              value={filters.city}
              onChange={(e) => setFilters((f) => ({ ...f, city: e.target.value }))}
              className="w-full border-2 border-card-border rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
            >
              {CITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">
              Property Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
              className="w-full border-2 border-card-border rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
            >
              <option value="all">All Types</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale / Buy</option>
              <option value="PG">PG / Hostel</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">
              Budget
            </label>
            <select
              value={filters.budget}
              onChange={(e) => setFilters((f) => ({ ...f, budget: e.target.value }))}
              className="w-full border-2 border-card-border rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold transition-colors"
            >
              <option>Any Budget</option>
              <option>Under ₹10,000/mo</option>
              <option>₹10k – ₹25k</option>
              <option>₹25k – ₹50k</option>
              <option>₹50k+</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={onSearch}
            className="flex items-center justify-center gap-2 bg-ink text-white font-bold text-sm py-3 px-6 rounded-lg hover:bg-gold transition-colors duration-200"
          >
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
