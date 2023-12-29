import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.SERVER_PORT || 9211;

app.listen(PORT, (req, res) => {
  console.log(`server is started at ${PORT}`);
});
