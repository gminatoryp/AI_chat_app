import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

const app = express();

//Adding to middleware
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ai', aiRoutes);

//Routes
app.get('/', async (req,res) => {
    res.status(200).json({message: 'Hello from AI'});
})

//Running the server
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port 8080'))
    } catch (error) {
        console.log(error)
    }
};

startServer();