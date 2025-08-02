import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import Note from "@/models/Note"
import { verifyToken } from "@/lib/authMiddleware"

export async function PUT(request, { params }) {
  try {
    await connectDB()

    const decoded = await verifyToken(request)
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { title, topic, content } = await request.json()

    // Validate input
    if (!title || !topic || !content) {
      return NextResponse.json({ message: "Title, topic, and content are required" }, { status: 400 })
    }

    const note = await Note.findOne({ _id: id, userId: decoded.userId })
    if (!note) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 })
    }

    note.title = title.trim()
    note.topic = topic.trim()
    note.content = content.trim()

    await note.save()

    return NextResponse.json(note)
  } catch (error) {
    console.error("Update note error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB()

    const decoded = await verifyToken(request)
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    const note = await Note.findOneAndDelete({ _id: id, userId: decoded.userId })
    if (!note) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Note deleted successfully" })
  } catch (error) {
    console.error("Delete note error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
