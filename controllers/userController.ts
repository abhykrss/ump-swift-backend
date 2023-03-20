//Crucial Imports -->
import { Request, Response } from "express";
import {
  usersFetchQuery,
  attendanceQuery,
  photoIdQuery,
  userTypeQuery,
} from "../db/queries/query";

export const home = (req: Request, res: Response) => {
  res.send("Backend Swift Home Route");
};

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

export const updatePhotoId = async (req: Request, res: Response) => {
  if (req.body.id === "") res.send("Not enough detailes provided by the user");
  else {
    try {
      await photoIdQuery(req.body.id);
      res.send("changed photoid");
    } catch (error) {
      res.send(error);
    }
  }
};

export const usersFetch = async (req: Request, res: Response) => {
  try {
    const users: any = await usersFetchQuery();
    res.send(users[0]);
  } catch (error) {
    res.send(error);
  }
};
