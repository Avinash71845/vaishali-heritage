import { Landmark } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-violet-700 flex items-center justify-center">
              <Landmark size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg">Vaishali</span>
          </div>
          <p className="text-sm text-gray-400">Discover the land of Lord Mahavira and Buddha.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Top Attractions</li>
            <li>Buddhist Sites</li>
            <li>Museums</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Plan</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>AI Trip Planner</li>
            <li>Route Planner</li>
            <li>Nearby Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2026 Vaishali Heritage Travel Platform. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
