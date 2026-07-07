import { Star } from 'lucide-react'
import { reviews, ratingBreakdown } from '../utils/mockData'

const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0)

const Reviews = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h1>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-5 flex flex-col sm:flex-row gap-6 items-center">
        <div className="text-center shrink-0">
          <p className="text-4xl font-extrabold text-gray-900">4.6</p>
          <div className="flex justify-center gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">Based on {totalReviews} reviews</p>
        </div>

        <div className="flex-1 w-full space-y-1.5">
          {ratingBreakdown.map((r) => (
            <div key={r.star} className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-8">{r.star} ★</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${(r.count / totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8 text-right">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 space-y-5">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">{review.comment}</p>
            {review.photos.length > 0 && (
              <div className="flex gap-2 mt-3">
                {review.photos.map((photo, idx) => (
                  <img key={idx} src={photo} alt="review" className="w-16 h-16 rounded-lg object-cover" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-violet-700 font-semibold text-sm">View All Reviews →</button>
      </div>
    </div>
  )
}

export default Reviews
