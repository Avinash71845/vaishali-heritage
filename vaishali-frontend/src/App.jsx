import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AppLayout from './layouts/AppLayout'
import AdminLayout from './layouts/AdminLayout'

import Home from './pages/Home'
import ExplorePlaces from './pages/ExplorePlaces'
import PlaceDetails from './pages/PlaceDetails'
import AiTourGuide from './pages/AiTourGuide'
import TripPlanner from './pages/TripPlanner'
import ItineraryResult from './pages/ItineraryResult'
import RoutePlanner from './pages/RoutePlanner'
import NearbyServices from './pages/NearbyServices'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Blog from './pages/Blog'

import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPlaces from './pages/admin/AdminPlaces'
import AdminUsers from './pages/admin/AdminUsers'
import AdminReviews from './pages/admin/AdminReviews'
import AdminPlaceholder from './pages/admin/AdminPlaceholder'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePlaces />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route path="/services" element={<NearbyServices />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/ai-guide" element={<AiTourGuide />} />
        <Route path="/plan-trip" element={<TripPlanner />} />
        <Route path="/itinerary-result" element={<ItineraryResult />} />
        <Route path="/route-planner" element={<RoutePlanner />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="places" element={<AdminPlaces />} />
        <Route path="itineraries" element={<AdminPlaceholder title="Itineraries" />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="services" element={<AdminPlaceholder title="Services" />} />
        <Route path="blogs" element={<AdminPlaceholder title="Blogs" />} />
        <Route path="media" element={<AdminPlaceholder title="Media" />} />
        <Route path="settings" element={<AdminPlaceholder title="Settings" />} />
      </Route>
    </Routes>
  )
}

export default App
