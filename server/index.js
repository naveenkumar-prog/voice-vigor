import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8081;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json({limit : "50mb"}));
app.use(express.urlencoded({extended: true}));


app.get('/', async(req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

app.use("/api/user",userRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});


const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
    .connect(MONGO_URL)
    .then((res) => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log("erroroo",error);
    })
}

const startServer = async () => {
    try{
        connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();