import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Note || mongoose.model("Note", NoteSchema)
