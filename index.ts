//Configuring ENVIRONMENT variables
// import dotenv from "dotenv";
// if (process.env.NODE_ENV === "dev") dotenv.config();
// console.log(process.env.NODE_ENV);
//Crucial Imports -->
import express, { Express } from "express";
import bodyParser from "body-parser";
import {
  home,
  usersFetch,
  usertype,
  updateAttendance,
  updatePhotoId,
} from "./controllers/userController";

//Router Config -->
const app: Express = express();
const port = process.env.PORT;

//MiddleWares -->
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userID = "9d06c064-c168-11ed-98e6-bb09c0346e5c";

//Routes -->
app.get("/", home);

app.get("/users", usersFetch);

app.put("/userType", usertype);

app.put("/photoIdChange", updatePhotoId);

app.put("/updateAttendance", updateAttendance);

app.listen(port, () => {
  console.log(`Server listening to Port ${port}`);
});
