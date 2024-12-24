import React from 'react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'
import { toast } from 'react-hot-toast'
const Navbar = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const handleLogout = async () => {
        const response = await logout()
        if (response.status === true) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }

        navigate('/signin')

    }

    return (
        <nav className="bg-bg py-5">
            <div className="border-primary border-2 bg-bg rounded-lg container flex  items-center justify-between mx-auto p-4 ">
                <Logo />

                <button
                    type="submit"
                    className="w-40 bg-gradient-to-r to-primary from-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center text-white font-bold"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
