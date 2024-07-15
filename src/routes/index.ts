import { Router } from "express";
import mangaMetaRouter from "./mangaMetaRoute";

const routes = Router();

// attach route definitions
routes.use("/meta", mangaMetaRouter);


export default routes;