const posts = [
  {
    id: 1,
    title: 'Top 5 Buddhist Sites to Visit in Vaishali',
    image: 'https://images.unsplash.com/photo-1623068387585-95dfbedd54a8?w=600&q=80',
    date: 'May 12, 2026'
  },
  {
    id: 2,
    title: 'A Complete Guide to the Ashokan Pillar',
    image: 'https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=600&q=80',
    date: 'Apr 28, 2026'
  },
  {
    id: 3,
    title: 'Best Time of Year to Explore Vaishali',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80',
    date: 'Apr 10, 2026'
  }
]

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-7">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-xs text-gray-400">{post.date}</p>
              <h3 className="font-semibold text-gray-900 mt-1">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
