'use client'

const trendyPlants = [
  {
    id: 1,
    name: 'For Your Desks Decorations',
    description: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=280&h=280&fit=crop',
    imageAlt: 'Green leafy desk decoration plant in a white round pot',
  },
  {
    id: 2,
    name: 'For Your Desks Decorations',
    description: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
    price: 'Rs. 399/-',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=280&h=280&fit=crop',
    imageAlt: 'Succulent cactus plant in a white pot for desk decoration',
  },
]

export default function TrendyPlants() {
  return (
    <section id="trendy" className="py-8 px-4" style={{ backgroundColor: '#1a2e1a' }}>
      <div className="max-w-[430px] mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-[#f5f0e8] text-sm font-semibold border border-white/20 px-4 py-1 rounded-full">
            Our Trendy plants
          </h2>
        </div>

        <div className="space-y-3">
          {trendyPlants.map((plant) => (
            <div
              key={plant.id}
              className="border border-white/10 rounded-2xl overflow-hidden flex items-stretch hover:border-[#4a7c59]/40 transition-all duration-300 group"
              style={{ backgroundColor: 'rgba(30,53,32,0.5)' }}
            >
              {/* Image */}
              <div className="w-32 flex-shrink-0 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#f5f0e8] text-xs font-semibold mb-1">{plant.name}</h3>
                  <p className="text-[#9aaa9a] text-[10px] leading-relaxed mb-2 line-clamp-2">{plant.description}</p>
                  <p className="text-[#f5f0e8] text-xs font-bold mb-2">{plant.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="border border-[#f5f0e8]/30 text-[#f5f0e8] text-[10px] px-3 py-1 rounded-full hover:bg-[#4a7c59] hover:border-[#4a7c59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59]"
                    aria-label={`Explore ${plant.name}`}
                  >
                    Explore
                  </button>
                  <button
                    className="w-6 h-6 border border-[#f5f0e8]/30 rounded-full flex items-center justify-center hover:bg-[#4a7c59] hover:border-[#4a7c59] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#4a7c59]"
                    aria-label={`Add ${plant.name} to cart`}
                  >
                    <svg className="w-3 h-3 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
