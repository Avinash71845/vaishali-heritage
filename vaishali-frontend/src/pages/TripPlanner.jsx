import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Plus, Bot } from 'lucide-react'
import Select from '../components/Select'
import Input from '../components/Input'
import Button from '../components/Button'
import { interestsList } from '../utils/mockData'
import { generateItinerary } from '../services/tripService'

const TripPlanner = () => {
  const navigate = useNavigate()
  const [days, setDays] = useState('2 Days')
  const [budget, setBudget] = useState('Medium')
  const [interests, setInterests] = useState(['History'])
  const [startPoint, setStartPoint] = useState('Vaishali Railway Station')
  const [loading, setLoading] = useState(false)

  const toggleInterest = (interest) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      await generateItinerary({ days, budget, interests, startPoint })
    } catch {
      // fallback to mock itinerary regardless of API outcome
    } finally {
      setLoading(false)
      navigate('/itinerary-result')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-3 mb-8">
        {['1', '2', '3'].map((step, idx) => (
          <div key={step} className="flex items-center gap-3 flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                idx === 0 ? 'bg-violet-700 text-white' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step}
            </div>
            {idx < 2 && <div className="flex-1 h-0.5 bg-gray-200" />}
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold text-gray-900">Tell us about your trip</h1>
      <p className="text-sm text-gray-500 mt-1">Our AI will create a perfect itinerary for you</p>

      <div className="mt-7 space-y-6">
        <Select label="Number of Days" value={days} onChange={(e) => setDays(e.target.value)}>
          <option>1 Day</option>
          <option>2 Days</option>
          <option>3 Days</option>
          <option>5 Days</option>
        </Select>

        <Select label="Budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Interests</label>
          <div className="flex flex-wrap gap-2">
            {interestsList.map((interest) => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  interests.includes(interest)
                    ? 'bg-violet-100 border-violet-400 text-violet-700'
                    : 'bg-white border-gray-200 text-gray-600'
                }`}
              >
                {interest}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium border border-dashed border-gray-300 text-gray-500 flex items-center gap-1">
              <Plus size={14} /> Add more
            </button>
          </div>
        </div>

        <Input
          label="Starting Point"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        />

        <Button onClick={handleGenerate} disabled={loading} icon={Sparkles} className="w-full" size="lg">
          {loading ? 'Generating...' : 'Generate My Itinerary'}
        </Button>

        <div className="bg-violet-50 rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center shrink-0">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-violet-900">AI Powered</p>
            <p className="text-xs text-violet-600">Personalized itineraries crafted just for you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripPlanner
