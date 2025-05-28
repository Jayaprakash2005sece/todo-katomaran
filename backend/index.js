const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const TodoModel = require('./models/Todo');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ Auth routes
app.use('/auth', authRoutes);

// ✅ Todo routes
app.get('/todos', async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
});

app.post('/add', async (req, res) => {
  const newTask = await TodoModel.create({ task: req.body.task });
  res.json(newTask);
});

app.delete('/delete/:id', async (req, res) => {
  await TodoModel.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

// ✅ Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
