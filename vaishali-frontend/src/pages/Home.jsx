
import { useNavigate } from 'react-router-dom'
import { Search, Sparkles, MapPin, MessageCircleQuestion, Compass, ChevronRight } from 'lucide-react'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import PlaceCard from '../components/PlaceCard'
import { useEffect, useState } from "react";
import api from "../services/api";
const features = [
  {
    icon: Sparkles,
    title: 'Plan My Trip',
    subtitle: 'AI Trip Planner',
    color: 'bg-violet-600',
    path: '/plan-trip'
  },
  {
    icon: Compass,
    title: 'Explore Places',
    subtitle: 'Discover Attractions',
    color: 'bg-rose-500',
    path: '/explore'
  },
  {
    icon: MessageCircleQuestion,
    title: 'AI Tour Guide',
    subtitle: 'Ask Anything',
    color: 'bg-blue-500',
    path: '/ai-guide'
  },
  {
    icon: MapPin,
    title: 'Nearby Services',
    subtitle: 'Hotels, Food, More',
    color: 'bg-emerald-500',
    path: '/services'
  }
]

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(()=>{

    api.get("/places")
    .then((response)=>{

        console.log("API DATA:", response.data);

        setPlaces(
            Array.isArray(response.data)
            ? response.data
            : response.data.content || []
        );

    })

},[])
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  return (
    <div>
      <section className="relative">
        <div className="relative h-[420px] sm:h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=1600&q=80"
            alt="Vaishali"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-950/85 via-violet-900/60 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <p className="text-violet-200 text-sm font-semibold tracking-wide mb-2">WELCOME TO VAISHALI</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-lg">
              Explore Vaishali
            </h1>
            <p className="text-violet-200 font-medium mt-2">Where History Comes Alive</p>
            <p className="text-violet-100 text-sm mt-3 max-w-md">
              Discover the land of Lord Mahavira and Buddha. Plan your trip, explore ancient sites and get AI
              guided information.
            </p>

            <div className="mt-6 flex w-full max-w-md bg-white rounded-xl shadow-soft p-1.5">
              <div className="flex items-center gap-2 flex-1 px-3">
                <Search size={18} className="text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search places, history, hotels..."
                  className="w-full text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>
              <Button onClick={() => navigate('/explore')}>Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} onClick={() => navigate(f.path)} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">Top Attractions</h2>
          <button onClick={() => navigate('/explore')} className="text-violet-700 text-sm font-semibold flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
       
          {Array.isArray(places) ? places.slice(0,4) : [].map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
