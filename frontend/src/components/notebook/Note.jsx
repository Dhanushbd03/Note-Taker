import React, { useState } from 'react'
import axios from "@/services/axios.js"
import { toast } from 'react-hot-toast'
import UpdateNote from './UpdateNote'

const Note = ({ note, trigger, setTrigger }) => {
    const [edit, setEdit] = useState(false)
    const deleteNote = async () => {
        try {
            const response = await axios.delete(`/notes/${note.$id}`)
            toast.success(response.data.message)
            setTrigger(!trigger)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className={`w-full h-64 flex flex-col justify-between rounded-lg border border-gray-400 mb-6 py-5 px-4 ${note.color}`}>
            <div>
                <h4 className="text-gray-800 font-bold mb-3">{note.title}</h4>
                <p className="text-gray-800 text-sm">{note.description}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800">
                    <p className="text-sm">{note.createdAt}</p>
                    <div className='flex items-center gap-2'>
                        <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="edit note" role="button" onClick={() => setEdit(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                            </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="delete note" role="button" onClick={deleteNote}>
                            <svg className="text-white w-5 h-5" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>delete [#1487]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs></defs>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#ffff">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {edit && <UpdateNote note={note} onClose={() => setEdit(false)} trigger={trigger} setTrigger={setTrigger} />}
        </div>
    )
}

export default Note
