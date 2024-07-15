
import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ChapterInfo } from './models/mangaInfoModel';

createConnection().then(async connection => {
  const app = express();

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => console.log(error));
