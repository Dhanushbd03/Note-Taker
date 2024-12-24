import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import NoteGroup from './NoteGroup'
import NoteInput from './NoteInput'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'
const Home = () => {
    const [trigger, setTrigger] = useState(false)
    const { session } = useAuth();
    return (session ?
        <div className='bg-bg min-h-screen'>
            <Navbar />
            <NoteInput trigger={trigger} setTrigger={setTrigger} />
            <NoteGroup trigger={trigger} setTrigger={setTrigger} />
        </div> : <Navigate to='/signin' />
    )
}

export default Home
