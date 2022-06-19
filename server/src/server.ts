import express from 'express';
import helmet from 'helmet';
import routes from './routes';
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(helmet()); // adds recommended headers for security
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
