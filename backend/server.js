// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const fs = require('fs');
// const http = require('http');
// const { Server } = require('socket.io');

// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();
// const server = http.createServer(app); // for socket.io
// const io = new Server(server, {
//   cors: {
//     origin: '*', // You can restrict this in production
//     methods: ['GET', 'POST']
//   }
// });

// // ✅ Ensure uploads folder exists
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// // 🔐 Middleware
// app.use(cors());
// app.use(express.json());

// // 📦 Serve uploaded videos and images
// app.use('/uploads', express.static(uploadsDir));

// // 🚀 API Routes
// const alumniRoutes = require('./routes/alumniRoutes');
// const authRoutes = require('./routes/auth');
// const profileRoutes = require('./routes/profile');
// const newsRoutes = require('./routes/news');
// const uploadRoute = require('./routes/upload');
// const adminRoutes = require('./routes/adminRoutes');
// const jobRoutes = require('./routes/jobRoutes');
// const sessionRoutes = require('./routes/sessionRoutes'); // ✅ New
// const chatRoutes = require('./routes/chatRoutes');       // ✅ New

// app.use('/api/alumni', alumniRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/profile', profileRoutes);
// app.use('/api/job-news', newsRoutes);
// app.use('/api/upload', uploadRoute);
// app.use('/api/admin', adminRoutes);
// app.use('/api/jobs', jobRoutes);
// app.use('/api/sessions', sessionRoutes); // ✅ New
// app.use('/api/chat', chatRoutes);        // ✅ New
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // ✅ Real-time chat with Socket.IO
// io.on('connection', (socket) => {
//   console.log('🟢 New client connected:', socket.id);

//   socket.on('sendMessage', (message) => {
//     io.emit('receiveMessage', message); // broadcast to all clients
//   });

//   socket.on('disconnect', () => {
//     console.log('🔴 Client disconnected:', socket.id);
//   });
// });

// // ✅ Global error handler
// app.use((err, req, res, next) => {
//   console.error('❌ Server Error:', err.stack);
//   res.status(500).json({ message: 'Server error occurred' });
// });

// // 🔊 Start server with Socket.IO
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { Server } = require('socket.io');

const connectDB = require('./config/db');

dotenv.config();

// 🔌 Connect MongoDB
connectDB();

const app = express();
const server = http.createServer(app);

// 🔁 Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: '*', // OK for local dev
    methods: ['GET', 'POST'],
  },
});

// 📁 Ensure uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 🔐 Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📦 Serve uploaded files
app.use('/uploads', express.static(uploadsDir));

// 🚀 API Routes
app.use('/api/alumni', require('./routes/alumniRoutes'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/job-news', require('./routes/news'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));

// 🧪 Health check (VERY useful)
app.get('/', (req, res) => {
  res.send('✅ Alumni Portal Backend Running');
});

// 💬 Socket.IO Real-time Chat
io.on('connection', (socket) => {
  console.log(`🟢 Client connected: ${socket.id}`);

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log(`🔴 Client disconnected: ${socket.id}`);
  });
});

// ❌ Global Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});

// 🔊 Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
