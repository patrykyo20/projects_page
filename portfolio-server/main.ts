import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connection } from './src/utlis/db';
import errorHandler from './src/utlis/errorHandler';
import projectRouter from './src/routes/project.router';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

connection();

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/projects', projectRouter);

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});

