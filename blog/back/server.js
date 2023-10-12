import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db';
import cors from "cors";
import { erroResponserHandler, invalidPathHandler } from "./middleware/errorHandler";

//Route
import userRoutes from './routes/userRoutes';

dotenv.config();
connectDB();


/*const app = express();: This line creates an instance of the Express.js 
application by calling the express function. This instance (app) will be 
used to define routes, middleware, and handle HTTP requests and responses.*/
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send("Server is running...");
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.use(invalidPathHandler);
app.use(erroResponserHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));