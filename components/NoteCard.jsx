"use client"

import { Edit, Trash2, Calendar, Tag } from "lucide-react"

export default function NoteCard({ note, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{note.title}</h3>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(note)}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
            title="Edit note"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="p-1 text-gray-500 hover:text-red-600 transition-colors"
            title="Delete note"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <Tag className="h-4 w-4" />
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{note.topic}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(note.createdAt)}</span>
        </div>
      </div>

      <div className="text-gray-700">
        <p className="line-clamp-3">
          {note.content.length > 150 ? `${note.content.substring(0, 150)}...` : note.content}
        </p>
      </div>
    </div>
  )
}
