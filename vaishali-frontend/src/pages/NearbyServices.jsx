import { useState } from 'react'
import { Star, MapPin } from 'lucide-react'
import Button from '../components/Button'
import { hotels } from '../utils/mockData'

const tabs = ['Hotels', 'Restaurants', 'Guides', 'Shops']

const NearbyServices = () => {
  const [activeTab, setActiveTab] = useState('Hotels')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Nearby Services</h1>
      <p className="text-sm text-gray-500 mt-1">Find everything you need nearby</p>

      <div className="flex gap-2 mt-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              activeTab === tab ? 'bg-violet-700 text-white' : 'bg-white border border-gray-200 text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white border border-gray-100 rounded-xl p-3 flex gap-4 shadow-card">
            <img src={hotel.image} alt={hotel.name} className="w-24 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">{hotel.name}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium text-gray-700">{hotel.rating}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1 ml-2">
                  <MapPin size={12} /> {hotel.distance}
                </span>
              </div>
              <p className="text-sm font-bold text-gray-900 mt-1">₹{hotel.price} / night</p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-6">View More</Button>
    </div>
  )
}

export default NearbyServices
