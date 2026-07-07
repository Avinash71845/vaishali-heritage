const AdminPlaceholder = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-10 mt-6 text-center text-gray-400">
        {title} management coming soon.
      </div>
    </div>
  )
}

export default AdminPlaceholder
