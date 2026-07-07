const variants = {
  primary: 'bg-violet-700 hover:bg-violet-800 text-white shadow-sm',
  outline: 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent text-violet-700 hover:bg-violet-50',
  dark: 'bg-gray-900 hover:bg-black text-white'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  )
}

export default Button
