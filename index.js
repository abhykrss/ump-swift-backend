"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Configuring ENVIRONMENT variables
// import dotenv from "dotenv";
// if (process.env.NODE_ENV === "dev") dotenv.config();
// console.log(process.env.NODE_ENV);
//Crucial Imports -->
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userController_1 = require("./controllers/userController");
//Router Config -->
const app = (0, express_1.default)();
const port = 4001;
//MiddleWares -->
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const userID = "9d06c064-c168-11ed-98e6-bb09c0346e5c";
//Routes -->
app.get("/", userController_1.home);
app.get("/users", userController_1.usersFetch);
app.put("/userType", userController_1.usertype);
app.put("/photoIdChange", userController_1.updatePhotoId);
app.put("/updateAttendance", userController_1.updateAttendance);
app.listen(port, () => {
    console.log(`Server listening to Port ${port}`);
});
