import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import studentRoutes from "./Routes/studentRoutes.js"

dotenv.config();

const port = 5005;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/student", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
