import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './src/routes/api/route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('', route)


app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});

