import express from "express";
import router from "./controller/Url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
dotenv.config();
const port = process.env.PORT || 3000;
const dbConnection = process.env.MONGODB_URL || "mongodb://localhost:27017/url-shortener";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'view'))); 

app.use("/", router);

mongoose.connect(dbConnection, (err: any) => {
    if (err) 
        console.log(err);
    else app.listen(port, () => console.log("Server is running on port 3000 And Connected to MongoDB"));
});
