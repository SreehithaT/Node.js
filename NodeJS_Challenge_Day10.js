const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});
app.get('/styles/style.css', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'styles/style.css'));
  });

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
