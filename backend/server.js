import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

// listener
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})
