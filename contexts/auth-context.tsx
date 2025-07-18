"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

interface User {
  username: string
  isMember: boolean
  membershipExpiry?: string // "unlimited" or a date string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  signup: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isHydrated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database (in real app, this would be a proper database)
const mockUsers: { [key: string]: User & { password: string } } = {
  dank4lunch: {
    // Corrected username to dank4lunch
    username: "dank4lunch",
    isMember: true,
    membershipExpiry: "unlimited", // Unlimited membership for this user
  },
  // Example of a regular user who is not a member by default
  regularuser: {
    username: "regularuser",
    isMember: false,
    password: "password123",
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsHydrated(true)
  }, [])

  const login = useCallback(async (username, password) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockUser = mockUsers[username]
    if (mockUser && mockUser.password === password) {
      const { password: _, ...userWithoutPassword } = mockUser
      setUser(userWithoutPassword)
      localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }, [])

  const signup = useCallback(async (username, password) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const storedUsers = JSON.parse(localStorage.getItem("users") || "{}")
    if (storedUsers[username]) {
      return false // User already exists
    }

    storedUsers[username] = password
    localStorage.setItem("users", JSON.stringify(storedUsers))

    const newUser: User = {
      username,
      isMember: false, // New users are not members by default
      membershipExpiry: undefined,
    }
    setUser(newUser)
    localStorage.setItem("currentUser", JSON.stringify(newUser))
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }, [])

  return <AuthContext.Provider value={{ user, login, signup, logout, isHydrated }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
