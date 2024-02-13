function rateLimitMiddleware(req, res, next) {
    const rateLimit = 5;
  
    const clientIP = req.headers['x-forwarded-for'];
  
    const key = `rate-limit:${clientIP}`;
  
    const requestCount = requestCountObject[key] || 0;
    if (requestCount > rateLimit) {
      return res.status(429).json({ error: 'Too Many Requests' });
    }
    requestCountObject[key] = (requestCountObject[key] || 0) + 1;
    next();
  }
  
  const requestCountObject = {};
 
  const express = require('express');
  const app = express();
  
  app.use(rateLimitMiddleware);

  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });