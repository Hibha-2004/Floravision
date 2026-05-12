'use client'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="py-8 px-4 border-t border-white/10" style={{ backgroundColor: '#0d1f0d' }}>
      <div className="max-w-[430px] mx-auto space-y-6">

        {/* Brand */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true">🌿</span>
            <span className="text-[#f5f0e8] font-semibold text-sm tracking-wide">FloraVision.</span>
          </div>
          <p className="text-[#9aaa9a] text-[11px] leading-relaxed max-w-[260px]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#f5f0e8] text-xs font-semibold mb-3">Quick Link's</h3>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {['Home', "Types Of plant's", 'Contact', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#9aaa9a] text-[11px] hover:text-[#f5f0e8] transition-colors duration-200 focus:outline-none focus:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#f5f0e8] text-xs font-semibold mb-3">For Every Update.</h3>
          {subscribed ? (
            <p className="text-[#4a7c59] text-xs">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <label htmlFor="footer-email" className="sr-only">Enter your email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                className="flex-1 text-[11px] px-3 py-2 rounded-l-md border border-white/10 focus:outline-none focus:border-[#4a7c59]/50 placeholder-[#9aaa9a]/50 text-[#f5f0e8]"
                style={{ backgroundColor: '#1a2e1a' }}
              />
              <button
                type="submit"
                className="bg-[#4a7c59] hover:bg-[#3d6849] active:scale-95 text-white text-[10px] px-3 py-2 rounded-r-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59] font-semibold tracking-wide"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

        {/* Social + Copyright */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex gap-4">
            {[['FB', 'Facebook'], ['TW', 'Twitter'], ['LI', 'LinkedIn']].map(([label, name]) => (
              <a key={label} href="#" className="text-[#9aaa9a] text-xs hover:text-[#f5f0e8] transition-colors focus:outline-none focus:underline" aria-label={name}>
                {label}
              </a>
            ))}
          </div>
          <p className="text-[#9aaa9a] text-[10px]">FloraVision &copy; all right reserve</p>
        </div>
      </div>
    </footer>
  )
}
