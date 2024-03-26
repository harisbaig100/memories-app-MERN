import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouter);

// will change later
const CONNECTION_URL = "mongodb+srv://harisbaig100:Helloworld123@cluster0.myrh0mc.mongodb.net/"
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch(err => console.log(err.message));