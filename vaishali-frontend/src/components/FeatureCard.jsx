const FeatureCard = ({ icon: Icon, title, subtitle, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-soft transition-shadow p-4 flex items-center gap-3 text-left w-full"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </button>
  )
}

export default FeatureCard
