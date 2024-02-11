const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware');

const app = express();

app.use(authenticationMiddleware);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
