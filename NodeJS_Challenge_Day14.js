const cache = {};

function cachingMiddleware(req, res, next) {
  const { method, url } = req;
  const cacheKey = `${method}:${url}`;

  if (cache[cacheKey] && cache[cacheKey].expirationTime > Date.now()) {
    res.send(cache[cacheKey].response);
    console.log("From cache");
  } 
  else {
    const originalSend = res.send;
    res.send = function (body) {
      cache[cacheKey] = {
        response: body,
        expirationTime: Date.now() + (1*60*1000), 
      };
      originalSend.call(this, body);
    };
    console.log("New request")
    next();
  }
}

const express = require('express');
const app = express();

app.use(cachingMiddleware);

app.get('/example', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
