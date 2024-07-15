import { Router } from "express";
import seriesMetaRouter from "./seriesMetaRoute";

const routes = Router();

// attach route definitions
routes.use("/meta", seriesMetaRouter);


export default routes;