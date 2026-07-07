import { MapPin, Users, Star, Calendar } from 'lucide-react'
import StatCard from "../../components/StatCard";
import { reviews } from "../../utils/mockData";

const visitorData = [120, 200, 180, 260, 240, 310, 290, 340, 300, 360]

const AdminDashboard = () => {
  const max = Math.max(...visitorData)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatCard icon={MapPin} label="Total Places" value="128" color="violet" />
        <StatCard icon={Users} label="Total Users" value="2,345" color="rose" />
        <StatCard icon={Star} label="Total Reviews" value="856" color="emerald" />
        <StatCard icon={Calendar} label="Total Itineraries" value="1,245" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
          <h2 className="font-bold text-gray-900 mb-4">Visitors (This Month)</h2>
          <div className="flex items-end gap-2 h-40">
            {visitorData.map((v, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-violet-200 rounded-t-md hover:bg-violet-400 transition-colors"
                  style={{ height: `${(v / max) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>1 May</span>
            <span>10 May</span>
            <span>20 May</span>
            <span>31 May</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
          <h2 className="font-bold text-gray-900 mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.comment.slice(0, 28)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
