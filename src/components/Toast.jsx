export default function Toast({ message, visible }) {
  if (!visible) return null
  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-toastIn">
      <div className="bg-[var(--color-ink)] text-white text-sm font-medium px-5 py-3.5 rounded-xl shadow-xl" style={{ borderLeft: '4px solid var(--color-gold)' }}>
        {message}
      </div>
    </div>
  )
}
