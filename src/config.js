const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PASSWORD = process.env.DB_PASSWORD || "Hh_659654276";
const DB_NAME = process.env.DB_NAME || "appbooks";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USER = process.env.DB_USER || "root";

module.exports = {PORT, DB_HOST, DB_PASSWORD, DB_NAME, DB_PORT, DB_USER}