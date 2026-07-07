import { MapPin } from 'lucide-react'
import Button from '../components/Button'

const routeStops = [
  { id: 1, name: 'Vaishali Railway Station', note: 'Start Point' },
  { id: 2, name: 'Ashokan Pillar', note: '5 km from start' },
  { id: 3, name: 'Buddha Stupa', note: '3 km from previous' },
  { id: 4, name: 'Vaishali Museum', note: '2 km from previous' },
  { id: 5, name: 'Abhishek Pushkarini', note: '4 km from previous' }
]

const RoutePlanner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Route Planner</h1>
        <div className="mt-5 space-y-4">
          {routeStops.map((stop, idx) => (
            <div key={stop.id} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-violet-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{stop.name}</p>
                <p className="text-xs text-gray-400">{stop.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-7">
          <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400">Total Distance</p>
            <p className="font-bold text-gray-900 mt-1">14 km</p>
          </div>
          <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400">Estimated Time</p>
            <p className="font-bold text-gray-900 mt-1">40 mins</p>
          </div>
        </div>

        <Button className="w-full mt-6">Optimize Route</Button>
      </div>

      <div className="bg-gray-100 rounded-2xl h-80 lg:h-full flex items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
          alt="Map"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center text-gray-500">
          <MapPin size={32} />
          <p className="text-sm font-medium mt-2">Map view placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default RoutePlanner
