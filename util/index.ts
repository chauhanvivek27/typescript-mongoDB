import dotenv = require("dotenv");
dotenv.config();
interface EnvVar {
    PORT: string,
    DB_URI: string,
}

export const enVar: EnvVar = {
    PORT: process.env.SERVER_PORT,
    DB_URI: process.env.DB_URI,
}