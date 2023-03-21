//Configuring ENVIRONMENT variables
// import dotenv from "dotenv";
// dotenv.config();

//Crucial Imports -->
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  home,
  usersFetch,
  usertype,
  updateAttendance,
  updatePhotoId,
  trainingInfo,
} from "./controllers/userController";

//Router Config -->
const app: Express = express();
const port = process.env.PORT;

//MiddleWares -->
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin:
      "https://641a0ee70c8e79064a869ea5--stellular-maamoul-1bdee3.netlify.app",
  })
);
//Routes -->
app.get("/", home);

app.get("/users", usersFetch);

app.get("/trainingInfo", trainingInfo);

app.put("/userType", usertype);

app.put("/photoIdChange", updatePhotoId);

app.put("/updateAttendance", updateAttendance);

app.listen(port, () => {
  console.log(`Server listening to Port ${port}`);
});
