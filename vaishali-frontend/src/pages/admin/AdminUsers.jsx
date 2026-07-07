import DataTable from '../../components/DataTable'

const users = [
  { id: 1, name: 'Anjali Sharma', email: 'anjali@example.com', joined: '12 Jan 2026', status: 'Active' },
  { id: 2, name: 'Rohit Verma', email: 'rohit@example.com', joined: '03 Feb 2026', status: 'Active' },
  { id: 3, name: 'Priya Singh', email: 'priya@example.com', joined: '21 Mar 2026', status: 'Inactive' }
]

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'joined', label: 'Joined' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <span
        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          row.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'
        }`}
      >
        {row.status}
      </span>
    )
  }
]

const AdminUsers = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
      <div className="mt-6">
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  )
}

export default AdminUsers
