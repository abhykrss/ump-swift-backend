//Crucial Imports -->
import { Request, Response } from "express";
import {
  usersFetchQuery,
  attendanceQuery,
  photoIdQuery,
  userTypeQuery,
  trainingInfoQuery,
} from "../db/queries/query";

//Home Route-->
export const home = (req: Request, res: Response) => {
  res.send("Backend Swift Home Route");
};

//Get Users Data Route (GET)-->
export const usersFetch = async (req: Request, res: Response) => {
  try {
    const users: any = await usersFetchQuery();
    res.send(users[0]);
  } catch (error) {
    res.send(error);
  }
};

//Get Trainings Information Route (GET)-->
export const trainingInfo = async (req: Request, res: Response) => {
  try {
    const trainingInfo: any = await trainingInfoQuery();
    res.send(trainingInfo[0]);
  } catch (error) {
    res.send(error);
  }
};

//UserType Route (GET)-->
export const usertype = async (req: Request, res: Response) => {
  if (req.body.id === "") res.send("Not enough detailes provided by the user");
  else {
    try {
      const userType = await userTypeQuery(req.body.id);
      res.send(userType);
    } catch (error) {
      res.send(error);
    }
  }
};

//Update Attendance Route (PUT)-->
export const updateAttendance = async (req: Request, res: Response) => {
  if (
    req.body.attendance === "" ||
    req.body.id === "" ||
    req.body.training_id === ""
  )
    res.send("Not enough detailes provided by the user");
  else {
    try {
      await attendanceQuery(
        req.body.attendance,
        req.body.id,
        req.body.training_id
      );
      res.send("changed Attendance");
    } catch (error) {
      res.send(error);
    }
  }
};

//Update PhotoId Route (PUT)-->
export const updatePhotoId = async (req: Request, res: Response) => {
  if (req.body.id.length > 0) {
    try {
      await photoIdQuery(req.body.id, req.body.change);
      res.send("changed Photo ID");
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send("Not enough detailes provided by the user");
  }
};
