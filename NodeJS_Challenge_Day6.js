const express = require('express');
// import express from 'express';
const app = express();

function greetHandler(req, res) {
  const name = req.query.name;
  const greeting = name ? `Hello, ${name}!` : 'Hello, Guest!';
  res.send(greeting);
}

app.get('/greet', greetHandler);

app.listen(3000, () => {
  console.log(`Express server initialized and running on http://localhost:3000`);
});
