import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import {
  getAllProject,
  getWebProjects,
} from "./controllers/project-controllers.js";
import bodyParser from "body-parser";
import cors from "cors";
import webRouter from "./routs/web-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
dotenv.config();

connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/back", express.static("./public/images"));
app.use("/images", express.static("./public/images"));
/*app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works!" });
});*/

app.get("/api/projects", getAllProject);
//app.get("/api/projects/web", getWebProjects);
app.use("/api", webRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 8000);
