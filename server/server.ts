import express from 'express';
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
