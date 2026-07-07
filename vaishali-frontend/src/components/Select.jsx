import { ChevronDown } from 'lucide-react'

const Select = ({ label, className = '', containerClassName = '', children, ...props }) => {
  return (
    <div className={containerClassName}>
      {label && <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>}
      <div className="relative">
        <select
          className={`w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  )
}

export default Select
