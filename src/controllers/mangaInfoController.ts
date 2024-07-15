import { Request, Response } from "express";

const seriesMetaController = (req:Request, res:Response) => {
    
    res.send("Hello Template Controller!");
};

export class ChapterController {
    
}

export {seriesMetaController}