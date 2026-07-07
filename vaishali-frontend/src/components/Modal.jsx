import { X } from 'lucide-react'

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-soft w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-700">
          <X size={20} />
        </button>
        {title && <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  )
}

export default Modal
