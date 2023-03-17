import { Sequelize } from "sequelize";

//Database Connection -->
export const database = new Sequelize(`${process.env.DEV_DB_URL}`);
const connectDB = async () => {
  try {
    await database.authenticate();
    console.log("Database Connection Establised.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
