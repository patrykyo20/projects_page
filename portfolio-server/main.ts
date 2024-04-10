import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ApiRouter from './src/routes/api/index';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('', ApiRouter);

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});

