'use client'

const topPlants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen, known for its attractive foliage and ease of care.',
    price: 'Rs. 300/-',
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdab4?w=200&h=200&fit=crop',
    imageAlt: 'Aglaonema Chinese Evergreen plant with green leaves in a white pot',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.',
    price: 'Rs. 380/-',
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=200&h=200&fit=crop',
    imageAlt: 'Plantain Lilies hosta plant in a white round pot',
  },
  {
    id: 3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments.',
    price: 'Rs. 259/-',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200&h=200&fit=crop',
    imageAlt: 'Small cactus plant in an orange terracotta pot',
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves.',
    price: 'Rs. 400/-',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&h=200&fit=crop',
    imageAlt: 'Monstera Swiss cheese plant with split leaves',
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=200&h=200&fit=crop',
    imageAlt: 'Sansevieria snake plant with tall upright leaves in a white pot',
  },
  {
    id: 6,
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
    image: 'https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?w=200&h=200&fit=crop',
    imageAlt: 'Agave succulent plant with pointed leaves in a white pot',
  },
]

export default function TopSelling() {
  return (
    <section id="top-selling" className="py-8 px-4" style={{ backgroundColor: '#122012' }}>
      <div className="max-w-[430px] mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-[#f5f0e8] text-sm font-semibold border border-white/20 px-4 py-1 rounded-full">
            Our Top Selling Plants
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {topPlants.map((plant) => (
            <div
              key={plant.id}
              className="border border-white/10 rounded-xl p-2 hover:border-[#4a7c59]/30 transition-all duration-300 group"
              style={{ backgroundColor: 'rgba(26,46,26,0.6)' }}
            >
              <div className="w-full h-20 rounded-lg overflow-hidden mb-2" style={{ backgroundColor: 'rgba(30,53,32,0.4)' }}>
                <img
                  src={plant.image}
                  alt={plant.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#f5f0e8] text-[10px] font-semibold mb-1 leading-snug">{plant.name}</h3>
              <p className="text-[#9aaa9a] text-[9px] leading-relaxed mb-2 line-clamp-2">{plant.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#f5f0e8] text-[10px] font-bold">{plant.price}</span>
                <button
                  className="w-5 h-5 border border-[#f5f0e8]/30 rounded-full flex items-center justify-center hover:bg-[#4a7c59] hover:border-[#4a7c59] active:scale-95 transition-all duration-200"
                  aria-label={`Add ${plant.name} to cart`}
                >
                  <svg className="w-2.5 h-2.5 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
