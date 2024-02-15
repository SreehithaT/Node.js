function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
  
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    if (req.body) {
        console.log('Body:', req.body);
    } 
    else {
        console.log('Body: No body found');
    }
    next();
  }
  
  const express = require('express');
  const app = express();
  app.use(express.json());
  app.use(loggingMiddleware);

  app.get('/Hello', (req, res)=>{
    res.send('Hello Sreehitha!');
  });

  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
  