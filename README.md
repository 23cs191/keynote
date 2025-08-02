# 🎼 Music Theory Notes App

A full-stack web application built with Next.js that helps users create, store, and access their music theory notes with personalized dashboards.

## ✨ Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Personal Dashboard**: View, create, edit, and delete music theory notes
- **Note Organization**: Categorize notes by topics (Scales, Chords, Harmony, etc.)
- **Search & Filter**: Find notes quickly with search and topic filtering
- **Responsive Design**: Clean, modern UI that works on all devices
- **Secure**: Password hashing with bcrypt and HTTP-only cookies

## 🛠 Tech Stack

- **Frontend & Backend**: Next.js 14 (App Router)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with HTTP-only cookies
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Password Hashing**: bcryptjs

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd music-theory-notes
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up MongoDB**
   - Install MongoDB locally or use MongoDB Atlas
   - Create a database named \`music_notes\`

4. **Configure environment variables**
   - Copy \`.env.local\` and update the values:
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/music_notes
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

1. **Register**: Create a new account with your name, email, and password
2. **Login**: Sign in to access your personal dashboard
3. **Create Notes**: Add music theory notes with titles, topics, and content
4. **Organize**: Use topics to categorize your notes (Scales, Chords, Harmony, etc.)
5. **Search**: Find specific notes using the search functionality
6. **Edit & Delete**: Manage your notes with full CRUD operations

## 📁 Project Structure

\`\`\`
music-theory-notes/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── notes/         # Notes CRUD endpoints
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── layout.js         # Root layout
│   ├── page.js           # Home page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Header.jsx        # Navigation header
│   ├── Footer.jsx        # Footer component
│   ├── NoteCard.jsx      # Note display card
│   └── NoteForm.jsx      # Note creation/editing form
├── lib/                  # Utility functions
│   ├── connectDB.js      # MongoDB connection
│   └── authMiddleware.js # JWT authentication
├── models/               # Mongoose models
│   ├── User.js          # User model
│   └── Note.js          # Note model
├── .env.local           # Environment variables
├── package.json         # Dependencies
└── README.md           # This file
\`\`\`

## 🔐 API Endpoints

### Authentication
- \`POST /api/auth/register\` - Register new user
- \`POST /api/auth/login\` - Login user
- \`POST /api/auth/logout\` - Logout user
- \`GET /api/auth/me\` - Get current user

### Notes
- \`GET /api/notes\` - Get all user notes
- \`POST /api/notes\` - Create new note
- \`PUT /api/notes/[id]\` - Update note
- \`DELETE /api/notes/[id]\` - Delete note

## 🔒 Security Features

- Passwords hashed with bcrypt (12 salt rounds)
- JWT tokens stored in HTTP-only cookies
- Protected API routes with authentication middleware
- Input validation and sanitization
- CORS protection

## 🎨 UI Components

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Forms**: Real-time validation and feedback
- **Modal System**: Clean note creation/editing experience
- **Search & Filter**: Instant results with debounced search
- **Loading States**: Smooth user experience with loading indicators

## 🚀 Deployment

1. **Build the application**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Set up production database**
   - Use MongoDB Atlas or your preferred MongoDB hosting
   - Update \`MONGODB_URI\` in production environment

3. **Configure environment variables**
   - Set secure \`JWT_SECRET\`
   - Set \`NODE_ENV=production\`

4. **Deploy to your preferred platform**
   - Vercel (recommended for Next.js)
   - Netlify
   - Railway
   - DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the flexible database
- Tailwind CSS for the utility-first styling
- Lucide React for the beautiful icons

---

**Happy Learning! 🎵**
