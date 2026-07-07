import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PageHeader = ({ title, right }) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 bg-white sticky top-16 z-30">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-lg text-gray-900">{title}</h1>
      </div>
      {right}
    </div>
  )
}

export default PageHeader
