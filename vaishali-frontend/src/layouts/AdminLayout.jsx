import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { Bell, Menu } from 'lucide-react'

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
          <button className="text-gray-500">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <img src="https://i.pravatar.cc/100?img=33" alt="Admin" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
