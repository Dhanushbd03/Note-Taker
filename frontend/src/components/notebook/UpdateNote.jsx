import React, { useState } from 'react'
import axios from "@/services/axios.js"
import { toast } from 'react-hot-toast'
import Dot from './Dot'
import { useAuth } from '@/context/AuthProvider'
const UpdateNote = ({ note, trigger, setTrigger, onClose }) => {
    const [title, setTitle] = useState(note.title)
    const { user } = useAuth()
    const [description, setDescription] = useState(note.description)
    const [color, setColor] = useState(note.color)
    const twcolors = [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
        'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-gray-500',
        'bg-teal-500', 'bg-indigo-500', 'bg-violet-500', 'bg-lime-500',
        'bg-emerald-500', 'bg-cyan-500', 'bg-sky-500', 'bg-indigo-500',
        'bg-purple-500', 'bg-pink-500', 'bg-rose-500'
    ]
    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const response = await axios.put(`/notes/${note.$id}`, {
                title,
                description,
                color,
                user: user
            })
            if (response.data.success) {
                toast.success("Note updated successfully")
                setTrigger(!trigger)
                onClose()
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleColor = (selectedColor) => {
        setColor(selectedColor)
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
            <div className={`w-auto z-50 h-auto flex flex-col justify-between rounded-lg border border-gray-400 mb-6 py-5 px-4 ${color} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-transparent text-gray-800 font-bold mb-3 focus:outline-none"
                            placeholder="Title"
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-transparent text-gray-800 text-sm focus:outline-none"
                            placeholder="Description"
                            rows="4"
                        />
                    </div>
                    <div className="flex items-start flex-col gap-5">
                        <div className="flex gap-2 flex-wrap max-w-96">
                            {twcolors.map((color, index) => (
                                <Dot key={index} color={color} onClick={() => handleColor(color)} />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 `}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateNote
