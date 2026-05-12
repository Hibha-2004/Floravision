'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(18,32,18,0.9)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-1.5">
            <span className="text-sm" aria-hidden="true">🌿</span>
            <span className="text-[#f5f0e8] font-semibold text-sm tracking-wide">FloraVision.</span>
          </div>

          <div className="hidden md:flex items-center gap-5">
            {['Home', 'Plants Type', 'Pots', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-xs text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors duration-200 focus:outline-none focus:underline">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="Search" className="text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#4a7c59] rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button aria-label="Wishlist" className="text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#4a7c59] rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button aria-label="Cart" className="text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#4a7c59] rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button
              className="md:hidden text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 py-3 border-t border-white/10">
            {['Home', 'Plants Type', 'Pots', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-xs text-[#9aaa9a] hover:text-[#f5f0e8] transition-colors px-1 py-0.5 focus:outline-none focus:underline" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
