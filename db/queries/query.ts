import { database } from "../config/config";

//Getting User Type SQL Query-->
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

//Getting Users data SQL Query-->
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

//Getting Trainings Informations SQL Query-->
export const trainingInfoQuery = async () => {
  try {
    const trainingInfo = await database.query(
      `SELECT
      u.user_name,
      t.centre_name,
      t.centre_number,
      t.start_date,
      t.end_date,
      t.duration,
      t.venue
      FROM trainings AS t
      JOIN app_users AS u
      on t.trainer_name=u.id`
    );
    return trainingInfo;
  } catch (error) {
    return error;
  }
};

//Updating Attendance SQL Query-->
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

//Updating PhotoId SQL Query-->
export const photoIdQuery = async (id: any, change: any) => {
  try {
    return await database.query(
      `UPDATE app_users SET photo_id=${change} WHERE id='${id}'`
    );
  } catch (error) {
    return error;
  }
};
