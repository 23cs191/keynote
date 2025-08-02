import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDB"
import User from "@/models/User"
import { verifyToken } from "@/lib/authMiddleware"

export async function GET(request) {
  try {
    await connectDB()

    const decoded = await verifyToken(request)
    if (!decoded) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const user = await User.findById(decoded.userId).select("-password")
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
