import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData, token) => {
    setUser(userData)
    if (token) localStorage.setItem('vh_token', token)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('vh_token')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
