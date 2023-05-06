import express from "express";
import { getWebProjects } from "../controllers/project-controllers.js";

const webRouter = express.Router();

webRouter.get("/web", getWebProjects);

export default webRouter;
