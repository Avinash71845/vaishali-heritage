import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Star,
  Users,
  Wrench,
  FileText,
  Image,
  Settings,
  LogOut,
  Landmark
} from 'lucide-react'

const links = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { label: 'Places', icon: MapPin, path: '/admin/places' },
  { label: 'Itineraries', icon: Calendar, path: '/admin/itineraries' },
  { label: 'Reviews', icon: Star, path: '/admin/reviews' },
  { label: 'Users', icon: Users, path: '/admin/users' },
  { label: 'Services', icon: Wrench, path: '/admin/services' },
  { label: 'Blogs', icon: FileText, path: '/admin/blogs' },
  { label: 'Media', icon: Image, path: '/admin/media' },
  { label: 'Settings', icon: Settings, path: '/admin/settings' }
]

const Sidebar = () => {
  return (
    <aside className="w-60 bg-violet-700 min-h-screen flex flex-col text-white shrink-0">
      <div className="flex items-center gap-2 px-5 py-5">
        <Landmark size={22} />
        <span className="font-bold text-lg">Vaishali</span>
      </div>
      <nav className="flex-1 px-3 space-y-1 mt-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive ? 'bg-white text-violet-700' : 'text-violet-100 hover:bg-violet-600'
              }`
            }
          >
            <link.icon size={18} />
            {link.label}
          </NavLink>
        ))}
      </nav>
      <button className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-5 rounded-xl text-sm font-medium text-violet-100 hover:bg-violet-600">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
