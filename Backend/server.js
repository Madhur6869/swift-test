const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");


const dbconnect = require("./mongo/dbConnect.js");

const app = express();
app.use(cookieParser());

dotenv.config({ path: "./.env" });
dbconnect();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.text());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port: ${process.env.PORT}!`);
});
