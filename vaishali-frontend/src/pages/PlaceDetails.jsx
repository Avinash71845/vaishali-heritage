import { useParams, useNavigate } from 'react-router-dom'
import { Star, Heart, Camera, Sun } from 'lucide-react'
import api from "../services/api";
import { useEffect, useState } from "react";
import PlaceCard from '../components/PlaceCard'
import Button from '../components/Button'

const PlaceDetails = () => {
  const [place, setPlace] = useState(null);
  const [allPlaces, setAllPlaces] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
 useEffect(() => {

  api.get(`/places/${id}`)
    .then((response) => {
      setPlace(response.data.data);
    });

  api.get("/places")
    .then((response) => {
      setAllPlaces(response.data.data || []);
    });

}, [id]);

  if(!place){
 return <p>Loading...</p>
}
  
 
  

 const related = allPlaces
  .filter((p) => p.id !== place.id)
  .slice(0, 4);



  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
          <Heart size={18} className="text-gray-700" />
        </button>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          <Camera size={14} /> 1 / 8
        </div>
      </div>

      <div className="flex items-start justify-between mt-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{place.name}</h1>
          <p className="text-violet-700 text-sm font-medium mt-1">{place.type}</p>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg">
          <Star size={16} className="fill-amber-400 text-amber-400" />
          <span className="font-bold text-gray-800 text-sm">{place.rating}</span>
          <span className="text-xs text-gray-500">({place.reviews} reviews)</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-4 leading-relaxed">{place.description}</p>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400">Built In</p>
          <p className="font-semibold text-gray-800 text-sm mt-1">{place.builtIn}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400">Height</p>
          <p className="font-semibold text-gray-800 text-sm mt-1">{place.height}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400">Material</p>
          <p className="font-semibold text-gray-800 text-sm mt-1">{place.material}</p>
        </div>
      </div>

      <div className="mt-7">
        <h2 className="font-bold text-gray-900 mb-2">About this place</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{place.history}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-xs text-gray-400">Best Time to Visit</p>
          <p className="font-semibold text-gray-800 text-sm mt-1">{place.bestTime}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Weather</p>
            <p className="font-semibold text-gray-800 text-sm mt-1">{place.weather}</p>
          </div>
          <Sun size={22} className="text-amber-400" />
        </div>
      </div>

      <div className="flex gap-3 mt-7">
        <Button onClick={() => navigate('/ai-guide')} className="flex-1">Ask AI Tour Guide</Button>
        <Button variant="outline" onClick={() => navigate('/route-planner')} className="flex-1">Add to Route</Button>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-gray-900 mb-4">Related Places</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {related.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails
