const mongoose = require('mongoose');
const express = require('express');

const app = express();

function connectToMongoDB() {
  const mongoDBURI = 'mongodb://localhost:27017/yourdatabase';

  mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB successfully!');
  });
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
    console.log('Connected to MongoDB successfully!');
  });
}
connectToMongoDB();
