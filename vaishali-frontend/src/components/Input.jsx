const Input = ({ label, icon: Icon, className = '', containerClassName = '', ...props }) => {
  return (
    <div className={containerClassName}>
      {label && <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>}
      <div className="relative">
        {Icon && <Icon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
        <input
          className={`w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 ${
            Icon ? 'pl-10 pr-3' : 'px-3'
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  )
}

export default Input
