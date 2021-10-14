import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import connectDB from "./db/connect.js";
import postRouter from "./route/posts.js";
const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(cors());
// routes
app.use("/posts", postRouter);
const PORT = process.env.PORT || 5000;
const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
Start();
