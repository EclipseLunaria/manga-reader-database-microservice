import { Request, Response } from "express";

const mangaMetaController = (req:Request, res:Response) => {
    
    res.send("Hello mangaMeta Controller!");
};


export {mangaMetaController};