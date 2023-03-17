import { database } from "../config/config";

export const attendanceQuery = async (
  attendance: Number,
  id: any,
  training_id: any
) => {
  try {
    return await database.query(
      `UPDATE training_user SET attendance=${attendance} WHERE user_id='${id}' and training_id='${training_id}'`
    );
  } catch (error) {
    return error;
  }
};

export const photoIdQuery = async (id: any) => {
  try {
    return await database.query(
      `UPDATE app_users SET photo_id=true WHERE id='${id}'`
    );
  } catch (error) {
    return error;
  }
};

export const userTypeQuery = async (id: any) => {
  try {
    const userTypeIdJSON: any = await database.query(
      `SELECT user_type FROM app_users WHERE id='${id}'`
    );
    const userTypeId = userTypeIdJSON[0][0]?.user_type;
    const userTypeJSON: any = await database.query(
      `SELECT name FROM user_type WHERE type=${userTypeId}`
    );
    const userType = userTypeJSON[0][0]?.name;
    return userType;
  } catch (error) {
    return error;
  }
};

export const usersFetchQuery = async () => {
  try {
    const users = await database.query(
      `SELECT 
    users.id,
    users.user_name,
    users.dob,
    users.email,
    users.photo_id,
    users.user_name,
    trainings.attendance,
    trainings.training_id
    FROM app_users AS users 
    JOIN training_user AS trainings
    ON users.id = trainings.user_id`
    );
    return users;
  } catch (error) {
    return error;
  }
};
