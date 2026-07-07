import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PlaceCard = ({ place, compact = false }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/places/${place.id}`)}
      className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-soft transition-shadow cursor-pointer overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            compact ? 'h-28' : 'h-36'
          }`}
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm truncate">{place.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{place.type}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-gray-700">{place.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
