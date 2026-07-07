const colorMap = {
  violet: 'bg-violet-50 text-violet-700',
  rose: 'bg-rose-50 text-rose-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600'
}

const StatCard = ({ icon: Icon, label, value, color = 'violet' }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-card">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <Icon size={18} />
      </div>
      <p className="text-xs text-gray-400 mt-3">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  )
}

export default StatCard
