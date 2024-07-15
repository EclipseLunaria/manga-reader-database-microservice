import { Router } from "express";
import { mangaMetaController } from "../controllers";

const mangaMetaRouter = Router();

mangaMetaRouter.get("/", mangaMetaController);

export default mangaMetaRouter;