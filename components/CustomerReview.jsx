'use client'

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    rating: 5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    rating: 5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Carol Huels',
    rating: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=40&h=40&fit=crop&crop=face',
  },
]

export default function CustomerReview() {
  return (
    <section id="reviews" className="py-8 px-4" style={{ backgroundColor: '#1a2e1a' }}>
      <div className="max-w-[430px] mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-[#f5f0e8] text-sm font-semibold border border-white/20 px-4 py-1 rounded-full">
            Customer Review
          </h2>
        </div>

        <div className="space-y-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-white/10 rounded-2xl p-4 hover:border-[#4a7c59]/20 transition-all duration-300"
              style={{ backgroundColor: 'rgba(30,53,32,0.4)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={review.avatar}
                  alt={`${review.name} profile photo`}
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-[#f5f0e8] text-xs font-semibold">{review.name}</p>
                  <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#9aaa9a] text-[11px] leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
