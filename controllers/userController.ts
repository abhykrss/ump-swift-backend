//Crucial Imports -->
import { Request, Response } from "express";
import {
  usersFetchQuery,
  attendanceQuery,
  photoIdQuery,
  userTypeQuery,
} from "../db/queries/query";

export const home = (req: Request, res: Response) => {
  res.send("Home Backend Swift");
};

export const usertype = async (req: Request, res: Response) => {
  try {
    const userType = await userTypeQuery(req.body.id);
    res.send(userType);
  } catch (error) {
    res.send(error);
  }
};

export const updateAttendance = async (req: Request, res: Response) => {
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
};

export const updatePhotoId = async (req: Request, res: Response) => {
  try {
    await photoIdQuery(req.body.id);
    res.send("changed photoid");
  } catch (error) {
    res.send(error);
  }
};

export const usersFetch = async (req: Request, res: Response) => {
  try {
    const users = await usersFetchQuery();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};
