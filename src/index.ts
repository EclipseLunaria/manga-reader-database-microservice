
import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ChapterInfo } from './models/mangaInfoModel';

createConnection().then(async connection => {
  const app = express();
  const port = process.env.PORT || 6965;
  
  app.listen(port, () => {
    console.log(`Database service is running on http://localhost:${port}`);
  });
}).catch(error => console.log(error));
