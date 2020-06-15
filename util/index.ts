import dotenv = require("dotenv");
dotenv.config();

export const enVar: {
    PORT: string;
    DB_URI: string;
} = {
    PORT: process.env.SERVER_PORT,
    DB_URI: process.env.DB_URI,
}