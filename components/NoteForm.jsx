"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function NoteForm({ note, onSave, onCancel, isOpen }) {
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    content: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title || "",
        topic: note.topic || "",
        content: note.content || "",
      })
    } else {
      setFormData({
        title: "",
        topic: "",
        content: "",
      })
    }
  }, [note])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = note ? `/api/notes/${note._id}` : "/api/notes"
      const method = note ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const savedNote = await response.json()
        onSave(savedNote)
        setFormData({ title: "", topic: "", content: "" })
      } else {
        const error = await response.json()
        alert(error.message || "Failed to save note")
      }
    } catch (error) {
      console.error("Error saving note:", error)
      alert("Failed to save note")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{note ? "Edit Note" : "Add New Note"}</h2>
          <button onClick={onCancel} className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter note title..."
            />
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Topic *
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a topic...</option>
              <option value="Scales">Scales</option>
              <option value="Chords">Chords</option>
              <option value="Harmony">Harmony</option>
              <option value="Rhythm">Rhythm</option>
              <option value="Melody">Melody</option>
              <option value="Theory">Theory</option>
              <option value="Composition">Composition</option>
              <option value="Analysis">Analysis</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={8}
              className="input-field resize-none"
              placeholder="Write your music theory notes here..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onCancel} className="btn-secondary" disabled={isLoading}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? "Saving..." : note ? "Update Note" : "Save Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
