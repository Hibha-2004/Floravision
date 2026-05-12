'use client'
import { useState } from 'react'

const o2Plants = [
  {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    description1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    description2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdab4?w=400&h=380&fit=crop',
    imageAlt: 'Aglaonema O2 plant in a speckled white pot, known for air purification',
  },
  {
    id: 2,
    title: 'Air Purifying Sansevieria Collection',
    description1: "Sansevieria, also known as snake plant, is one of the most effective air-purifying plants available.",
    description2: 'It converts CO2 into oxygen at night, making it perfect for bedrooms. Removes benzene, formaldehyde, and other toxins effectively.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&h=380&fit=crop',
    imageAlt: 'Sansevieria snake plant in a white pot for air purification',
  },
  {
    id: 3,
    title: "Peace Lily - Nature's Air Filter",
    description1: 'Peace lilies are among the top air-purifying plants recommended by NASA. They thrive in low light and require minimal care.',
    description2: 'These plants effectively remove ammonia, benzene, and formaldehyde from the air while adding beautiful white blooms to your space.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=380&fit=crop',
    imageAlt: 'Peace lily plant with white flowers in a decorative pot',
  },
  {
    id: 4,
    title: 'Spider Plant - Oxygen Booster',
    description1: 'Spider plants are incredibly easy to grow and are excellent at producing oxygen and purifying the air around them.',
    description2: 'They remove carbon monoxide and nitrogen dioxide from indoor air environments continuously.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=380&fit=crop',
    imageAlt: 'Spider plant with long arching green leaves',
  },
]

export default function BestO2() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? o2Plants.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === o2Plants.length - 1 ? 0 : c + 1))

  const plant = o2Plants[current]

  return (
    <section id="o2-plants" className="py-8 px-4" style={{ backgroundColor: '#122012' }}>
      <div className="max-w-[430px] mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-[#f5f0e8] text-sm font-semibold border border-white/20 px-4 py-1 rounded-full">
            Our Best o2
          </h2>
        </div>

        <div className="border border-white/10 rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgba(26,46,26,0.5)' }}>
          {/* Plant image — left side overflowing, like Figma */}
          <div className="flex items-center gap-0 p-4">
            <div className="w-36 h-44 rounded-xl overflow-hidden flex-shrink-0 -ml-2" style={{ backgroundColor: 'rgba(30,53,32,0.4)' }}>
              <img
                src={plant.image}
                alt={plant.imageAlt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex-1 pl-4 space-y-2">
              <h3 className="text-[#f5f0e8] text-xs font-semibold leading-snug">{plant.title}</h3>
              <p className="text-[#9aaa9a] text-[10px] leading-relaxed">{plant.description1}</p>
              <p className="text-[#9aaa9a] text-[10px] leading-relaxed">{plant.description2}</p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  className="border border-[#f5f0e8]/30 text-[#f5f0e8] text-[10px] px-3 py-1 rounded-full hover:bg-[#4a7c59] hover:border-[#4a7c59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59]"
                  aria-label="Explore O2 plants"
                >
                  Explore
                </button>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={prev}
                    className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:border-[#4a7c59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59]"
                    aria-label="Previous plant"
                  >
                    <svg className="w-2.5 h-2.5 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-[#9aaa9a] text-[10px]" aria-live="polite">
                    {String(current + 1).padStart(2, '0')}/{String(o2Plants.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={next}
                    className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:border-[#4a7c59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59]"
                    aria-label="Next plant"
                  >
                    <svg className="w-2.5 h-2.5 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 pb-4" aria-label="Carousel navigation">
            {o2Plants.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59] ${
                  i === current ? 'w-4 h-1.5 bg-[#f5f0e8]' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
