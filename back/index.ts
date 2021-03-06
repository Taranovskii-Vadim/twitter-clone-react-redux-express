import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import { appPassport } from "./core/passport";

// Routes
import { UsersRouter } from "./routes/users";
import { AuthRouter } from "./routes/auth";
import { TweetRouter } from "./routes/tweets";
import { TagRouter } from "./routes/tags";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(appPassport.initialize());

app.use("/auth", AuthRouter);
app.use("/users", UsersRouter);
app.use("/tweets", TweetRouter);
app.use("/tags", TagRouter);

async function start() {
  try {
    mongoose.connect(
      "mongodb+srv://vadim:zNAA5pMpZV46uzzW@cluster0.xtpjk.mongodb.net/clone?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
