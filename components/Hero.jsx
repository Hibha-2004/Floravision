'use client'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ backgroundColor: '#1a2e1a', minHeight: '100svh' }}>
      {/* Full background plant image */}
      <img
        src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.65) saturate(1.2)' }}
      />
      {/* dark overlay gradient from bottom only */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,46,26,0.1) 0%, rgba(26,46,26,0.3) 40%, rgba(26,46,26,0.92) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[430px] mx-auto px-4 pt-20 pb-8 flex flex-col min-h-[100svh]">

        {/* Floating product card — top right */}
        <div className="self-end mb-4">
          <div className="bg-[#122012]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 w-36">
            <div className="text-[10px] text-[#9aaa9a] mb-0.5">Indoor Plant</div>
            <div className="text-[#f5f0e8] text-xs font-medium mb-2">Aglaonema plant</div>
            <div className="w-full h-20 rounded-lg overflow-hidden bg-[#1e3520]/40 mb-2">
              <img
                src="https://images.unsplash.com/photo-1591958911259-bee2173bdab4?w=160&h=120&fit=crop"
                alt="Aglaonema indoor plant in a white pot"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-full bg-[#4a7c59] hover:bg-[#3d6849] active:scale-95 text-white text-[10px] py-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/50">
              Buy Now
            </button>
          </div>
        </div>

        {/* Hero headline */}
        <div className="flex-1 flex flex-col justify-end pb-4">
          <h1 className="text-[42px] font-bold text-[#f5f0e8] leading-tight mb-3">
            Earth's Exhale
          </h1>
          <p className="text-[#9aaa9a] text-xs leading-relaxed mb-5 max-w-[260px]">
            "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button className="bg-[#4a7c59] hover:bg-[#3d6849] active:scale-95 text-white text-xs px-5 py-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4a7c59]/50">
              Buy Now
            </button>
            <button className="flex items-center gap-2 text-[#f5f0e8] text-xs hover:text-[#9aaa9a] transition-colors focus:outline-none focus:underline">
              <span className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Give Tomorrow
            </button>
          </div>

          {/* Review card */}
          <div className="bg-[#122012]/70 backdrop-blur-sm border border-white/10 rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&crop=face"
                alt="Ronnie Hamil profile photo"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-[#f5f0e8] text-xs font-medium">Ronnie Hamil</p>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#9aaa9a] text-[11px] leading-relaxed">
              I can't express how thrilled I am with my recent plant purchase. The plants arrived beautifully packaged. They bring such warmth and energy to my home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
