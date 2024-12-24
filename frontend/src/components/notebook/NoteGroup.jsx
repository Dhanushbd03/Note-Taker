import React, { useState, useEffect } from 'react'
import Note from './Note'
import axios from "@/services/axios.js"
import { useAuth } from '@/context/AuthProvider'
const NoteGroup = ({ trigger, setTrigger }) => {
  const { user } = useAuth()
  const [notes, setNotes] = useState([])
  const getNotes = async () => {
    try {
      const response = await axios.get('/notes', {
        params: {
          userid: user
        }
      })

      if (response.data.success) {
        setNotes(response.data.notes.documents)
      }
    } catch (error) {
      console.error("Error fetching notes:", error)
    }
  }
  useEffect(() => {
    getNotes()
  }, [trigger])

  useEffect(() => {
    getNotes()
  }, [])

  useEffect(() => {
  }, [notes])

  return (
    <div className="mx-auto container py-10 px-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.isArray(notes) && notes.map((note) => (
          <Note key={note.$id} note={note} trigger={trigger} setTrigger={setTrigger} />
        ))}
      </div>
    </div>
  )
}

export default NoteGroup
