import express from 'express';
import helmet from 'helmet';
import routes from './routes';
import cors from 'cors';
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(helmet()); // adds recommended headers for security
app.use(express.json()); // parses all incoming json data, provides access to req.body
app.use(express.urlencoded({ extended: false })); // i dont know
app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
