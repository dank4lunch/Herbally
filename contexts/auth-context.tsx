"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  hasMembership: boolean
  membershipExpiry?: Date
  joinedDate: Date
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  purchaseMembership: () => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database (in real app, this would be a proper database)
const mockUsers: { [key: string]: User & { password: string } } = {
  "demo@herbally.co.za": {
    id: "1",
    email: "demo@herbally.co.za",
    name: "Demo User",
    password: "password123",
    hasMembership: true,
    membershipExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    joinedDate: new Date("2024-01-01"),
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("herbally-user")
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("herbally-user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser = mockUsers[email]
    if (mockUser && mockUser.password === password) {
      const { password: _, ...userWithoutPassword } = mockUser
      setUser(userWithoutPassword)
      localStorage.setItem("herbally-user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if user already exists
    if (mockUsers[email]) {
      setIsLoading(false)
      return false
    }

    // Create new user
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      email,
      name,
      password,
      hasMembership: false,
      joinedDate: new Date(),
    }

    mockUsers[email] = newUser

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("herbally-user", JSON.stringify(userWithoutPassword))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("herbally-user")
  }

  const purchaseMembership = async (): Promise<boolean> => {
    if (!user) return false

    setIsLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const updatedUser = {
      ...user,
      hasMembership: true,
      membershipExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    }

    setUser(updatedUser)
    localStorage.setItem("herbally-user", JSON.stringify(updatedUser))

    // Update mock database
    if (mockUsers[user.email]) {
      mockUsers[user.email] = { ...mockUsers[user.email], ...updatedUser }
    }

    setIsLoading(false)
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        purchaseMembership,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
