import React, { useEffect, useState } from 'react'
import Dot from './Dot'
import axios from "@/services/axios.js"
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/AuthProvider'
const NoteInput = ({ trigger, setTrigger }) => {
    const { user } = useAuth()
    const [color, setColor] = useState('bg-primary')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddNote = async () => {
        try {
            const response = await axios.post('/add', {
                title,
                description,
                color,
                user: user
            })
            toast.success(response.data.message)
            setTrigger(!trigger)
            setTitle('')
            setDescription('')
            setColor('bg-primary')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const twcolors = [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
        'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-gray-500',
        'bg-teal-500', 'bg-indigo-500', 'bg-violet-500', 'bg-lime-500',
        'bg-emerald-500', 'bg-cyan-500', 'bg-sky-500', 'bg-indigo-500',
        'bg-purple-500', 'bg-pink-500', 'bg-rose-500'
    ]

    return (
        <div className='w-full container mx-auto flex flex-col items-center gap-5'>
            <div className={`w-full ${color} rounded-lg  overflow-hidden text-white`}>
                <input
                    type="text"
                    className='w-full h-10 rounded-t-lg px-5 border-0 outline-none bg-transparent placeholder:text-gray-500'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className='w-full h-10 rounded-b-lg px-5 border-0 outline-none bg-transparent placeholder:text-gray-500'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex gap-2 p-5">
                    {twcolors.map((color, index) => (
                        <Dot key={index} color={color} onClick={() => setColor(color)} />
                    ))}
                </div>
            </div>
            <div className='ml-auto'>
                <button
                    className={`${color} text-white px-5 py-2 rounded-lg w-40 `}
                    onClick={handleAddNote}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default NoteInput