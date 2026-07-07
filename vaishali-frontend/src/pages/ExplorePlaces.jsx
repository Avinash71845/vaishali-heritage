
import { Search, SlidersHorizontal } from 'lucide-react'
import Input from '../components/Input'
import PlaceCard from '../components/PlaceCard'
import Button from '../components/Button'
import { useEffect, useState, useMemo } from "react";
import api from "../services/api";

const categories = ['All', 'Historical', 'Buddhist', 'Religious', 'Museums']

const ExplorePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

useEffect(() => {

 api.get("/places")
 .then((response)=>{

   console.log("PLACES API:", response.data);

   setPlaces(response.data.data || []);

 });

},[]);

const filtered = useMemo(() => {

  return (Array.isArray(places) ? places : []).filter(place =>
    activeCategory === "All"
      ? true
      : place.category === activeCategory
  );

}, [places, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Explore Places</h1>
      <p className="text-sm text-gray-500 mt-1">Discover the beauty and heritage of Vaishali</p>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Input
          icon={Search}
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          containerClassName="flex-1"
        />
        <Button variant="outline" icon={SlidersHorizontal}>
          Filters
        </Button>
      </div>

      <div className="flex gap-2 mt-5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat ? 'bg-violet-700 text-white' : 'bg-white border border-gray-200 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
        {filtered.slice(0, visibleCount).map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10 text-sm">No places found for this search.</p>
      )}

      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={() => setVisibleCount((c) => c + 6)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

export default ExplorePlaces
