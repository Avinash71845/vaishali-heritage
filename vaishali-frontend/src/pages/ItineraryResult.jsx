import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { places } from '../utils/mockData'

const itineraryData = {
  1: [
    { time: '09:00 AM', place: places[0] },
    { time: '11:30 AM', place: places[1] },
    { time: '02:00 PM', place: places[3] },
    { time: '04:00 PM', place: places[2] }
  ],
  2: [
    { time: '09:00 AM', place: places[4] },
    { time: '12:00 PM', place: places[5] }
  ]
}

const ItineraryResult = () => {
  const [activeDay, setActiveDay] = useState(1)
  const items = itineraryData[activeDay] || []

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Your 2 Days Vaishali Trip</h1>
      <p className="text-sm text-gray-500 mt-1">Budget: Medium &nbsp;•&nbsp; Interests: History, Buddhism</p>

      <div className="flex gap-2 mt-5">
        {[1, 2].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold ${
              activeDay === day ? 'bg-violet-700 text-white' : 'bg-white border border-gray-200 text-gray-600'
            }`}
          >
            Day {day}
          </button>
        ))}
      </div>

      <div className="mt-7 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-violet-200" />
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4 relative">
              <div className="w-4 h-4 rounded-full bg-violet-700 mt-1 shrink-0 z-10 ring-4 ring-white" />
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-3 flex gap-3 shadow-card">
                <img src={item.place.image} alt={item.place.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-medium">{item.time}</p>
                  <p className="font-semibold text-gray-900 text-sm mt-0.5">{item.place.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.place.description.slice(0, 40)}...</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={12} /> {item.place.distance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400">Total Distance</p>
          <p className="font-bold text-gray-900 mt-1">14 km</p>
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400">Estimated Time</p>
          <p className="font-bold text-gray-900 mt-1">6-7 hrs</p>
        </div>
      </div>
    </div>
  )
}

export default ItineraryResult
