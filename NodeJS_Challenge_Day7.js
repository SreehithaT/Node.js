const express = require('express');
const app = express();

function requestLoggerMiddleware(req, res, next) {

  console.log(`[${new Date().toLocaleString()}] ${req.method}`)
}

app.use(requestLoggerMiddleware);

app.listen(3000, () => {
  console.log(`Express server is running on port 3000`);
});
