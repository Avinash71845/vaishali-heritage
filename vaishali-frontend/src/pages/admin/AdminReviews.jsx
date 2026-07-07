import { Star, Trash2 } from 'lucide-react'
import DataTable from '../../components/DataTable'
import { reviews } from '../../utils/mockData'

const columns = [
  {
    key: 'name',
    label: 'User',
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.avatar} alt={row.name} className="w-9 h-9 rounded-full" />
        <span className="font-medium text-gray-900">{row.name}</span>
      </div>
    )
  },
  { key: 'comment', label: 'Comment' },
  {
    key: 'rating',
    label: 'Rating',
    render: (row) => (
      <div className="flex items-center gap-1">
        <Star size={14} className="fill-amber-400 text-amber-400" />
        {row.rating}
      </div>
    )
  },
  {
    key: 'action',
    label: '',
    render: () => (
      <button className="text-gray-400 hover:text-red-500">
        <Trash2 size={16} />
      </button>
    )
  }
]

const AdminReviews = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Manage Reviews</h1>
      <div className="mt-6">
        <DataTable columns={columns} data={reviews} />
      </div>
    </div>
  )
}

export default AdminReviews
