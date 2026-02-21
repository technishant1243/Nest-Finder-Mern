import { CITIES } from '../data/properties'

const STATS = [
  { num: '50K+', label: 'Properties' },
  { num: '120+', label: 'Cities' },
  { num: '6',    label: 'Sources' },
  { num: '4.8★', label: 'Rating' },
]

export default function Hero({ onSearch }) {
  return (
    <section className="relative bg-[var(--color-ink)] pt-20 pb-12 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 65% 40%, rgba(201,149,42,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74,124,89,0.10) 0%, transparent 50%)' }}
      />
      <div className="relative flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
          🏠 India's First Real Estate Aggregator
        </span>
      </div>
      <h1 className="relative font-[var(--font-display)] text-center text-white font-black leading-tight text-5xl md:text-6xl mb-5">
        Find Your <em className="text-[var(--color-gold-light)] not-italic">Perfect</em><br />Home Across Every Platform
      </h1>
      <p className="relative text-center text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        We search Housing.com, Magicbricks, 99acres &amp; more simultaneously — so you don't have to jump between 10 websites.
      </p>
      <div className="relative max-w-3xl mx-auto bg-white rounded-2xl p-5 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest">City</label>
            <select className="w-full border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] bg-white appearance-none focus:outline-none focus:border-[var(--color-gold)] transition-colors cursor-pointer">
              {CITIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest">Property Type</label>
            <select className="w-full border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] bg-white appearance-none focus:outline-none focus:border-[var(--color-gold)] transition-colors cursor-pointer">
              <option value="all">All Types</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale / Buy</option>
              <option value="PG">PG / Hostel</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest">Budget</label>
            <select className="w-full border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] bg-white appearance-none focus:outline-none focus:border-[var(--color-gold)] transition-colors cursor-pointer">
              <option>Any Budget</option>
              <option>Under ₹10,000/mo</option>
              <option>₹10k – ₹25k</option>
              <option>₹25k – ₹50k</option>
              <option>₹50k+</option>
            </select>
          </div>
          <button onClick={onSearch} className="w-full bg-[var(--color-ink)] hover:bg-[var(--color-gold)] text-white font-bold rounded-lg py-2.5 px-5 text-sm transition-colors duration-200 cursor-pointer border-0 flex items-center justify-center gap-2">
            🔍 Search
          </button>
        </div>
      </div>
      <div className="relative flex justify-center gap-12 mt-10">
        {STATS.map(({ num, label }) => (
          <div key={label} className="text-center">
            <div className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-gold-light)]">{num}</div>
            <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
