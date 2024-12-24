import React, { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import axios from '@/services/axios'
import Cookies from 'js-cookie'
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(Cookies.get('session'))
    const [user, setUser] = useState(Cookies.get('user'))
    const login = async ({ email, password }) => {
        const response = await axios.post('/signin', { email, password })
        if (response.data.status) {
            console.log(response.data.session.expires);

            // Store both session and user data
            setSession(response.data.session)
            setUser(response.data.session.userId)

            Cookies.set('session', response.data.session)
            Cookies.set('user', response.data.session.userId)
        }
        return response.data
    }

    const logout = async () => {
        try {
            setSession(null)
            setUser(null)
            Cookies.remove('session')
            Cookies.remove('user')
            return {
                message: "User logged out successfully",
                status: true
            }
        } catch (error) {
            return {
                message: error.message,
                status: false
            }
        }
    }

    return (
        <AuthContext.Provider value={{ session, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export default AuthProvider;
