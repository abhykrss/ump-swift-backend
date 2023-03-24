import { Sequelize } from "sequelize";

//Database Connection -->
//export const database = new Sequelize(`${process.env.DEV_DB_URL}`);
export const database = new Sequelize({
  host: process.env.DB_HOST,
  dialect: "postgres",
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
const connectDB = async () => {
  try {
    await database.authenticate();
    console.log("Database Connection Establised.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectDB();
