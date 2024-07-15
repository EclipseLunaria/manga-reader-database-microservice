import { Router } from "express";
import { seriesMetaController } from "../controllers";

const seriesMetaRouter = Router();

seriesMetaRouter.get("/", seriesMetaController);

export default seriesMetaRouter;