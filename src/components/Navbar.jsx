export default function Navbar({ onAuthClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-ink)] px-6 h-16 flex items-center justify-between shadow-lg">
      <div className="font-[var(--font-display)] text-2xl font-black tracking-tight">
        <span className="text-[var(--color-gold-light)]">Nest</span>
        <span className="text-white">Finder</span>
      </div>
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {['Buy', 'Rent', 'PG / Hostel', 'New Projects', 'Agents'].map((link) => (
          <li key={link}>
            <a href="#" className="text-white/60 text-sm font-medium hover:text-[var(--color-gold-light)] transition-colors duration-200 no-underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button onClick={() => onAuthClick('Login')} className="px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white/25 hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)] transition-all duration-200 cursor-pointer bg-transparent">
          Login
        </button>
        <button onClick={() => onAuthClick('Sign Up')} className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] hover:text-[var(--color-ink)] transition-all duration-200 cursor-pointer border-0">
          Sign Up
        </button>
      </div>
    </nav>
  )
}
