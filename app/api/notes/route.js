import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import Note from "@/models/Note"
import { verifyToken } from "@/lib/authMiddleware"

export async function GET(request) {
  try {
    await connectDB()

    const decoded = await verifyToken(request)
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const notes = await Note.find({ userId: decoded.userId }).sort({ createdAt: -1 })

    return NextResponse.json(notes)
  } catch (error) {
    console.error("Get notes error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connectDB()

    const decoded = await verifyToken(request)
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { title, topic, content } = await request.json()

    // Validate input
    if (!title || !topic || !content) {
      return NextResponse.json({ message: "Title, topic, and content are required" }, { status: 400 })
    }

    const note = new Note({
      title: title.trim(),
      topic: topic.trim(),
      content: content.trim(),
      userId: decoded.userId,
    })

    await note.save()

    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error("Create note error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
