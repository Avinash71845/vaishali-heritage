import { Star, Plus } from 'lucide-react'
import DataTable from '../../components/DataTable'
import Button from '../../components/Button'
import { places } from '../../utils/mockData'

const columns = [
  {
    key: 'name',
    label: 'Place',
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.image} alt={row.name} className="w-10 h-10 rounded-lg object-cover" />
        <span className="font-medium text-gray-900">{row.name}</span>
      </div>
    )
  },
  { key: 'category', label: 'Category' },
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
  { key: 'reviews', label: 'Reviews' }
]

const AdminPlaces = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Manage Places</h1>
        <Button icon={Plus} size="sm">Add Place</Button>
      </div>
      <div className="mt-6">
        <DataTable columns={columns} data={places} />
      </div>
    </div>
  )
}

export default AdminPlaces
