import express, { json } from "express";

import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/pin.route.js";
import commnetRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comments", commnetRouter);
app.use("/boards", boardRouter);

app.listen(3000, () => {
  connectDB();
  console.log("sever is running");
});
