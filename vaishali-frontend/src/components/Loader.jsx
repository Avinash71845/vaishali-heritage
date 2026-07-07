const Loader = ({ size = 24 }) => {
  return (
    <div className="flex items-center justify-center py-6">
      <div
        className="animate-spin rounded-full border-2 border-violet-200 border-t-violet-700"
        style={{ width: size, height: size }}
      />
    </div>
  )
}

export default Loader
