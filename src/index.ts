// import express from 'express';
// import routes from './routes';
// import 'reflect-metadata';

// // init express app
// const app = express();

// const port = process.env.PORT === undefined ? (() => {console.warn("Port not specified defaulting to 6900"); return 6900})() : parseInt(process.env.PORT);


// // attach routes
// app.use('/', routes);

// // default route
// app.get('/', (req, res) => {
//   res.send('Service is running');
// });

// // start server
// app.listen(port, () => {
//   console.log(`Service is running in http://localhost:${port}/`);
// });
 
// src/index.ts
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ChapterInfo } from './models/seriesInfoModel';
import express from 'express';

createConnection().then(async connection => {
  const app = express();

  // Example: Add a new chapter
  app.get('/add-chapter', async (req, res) => {
    const chapter = new ChapterInfo();
    chapter.seriesId = 'some-series-id';
    chapter.chapterName = 'Chapter 1';
    chapter.sourceUrl = 'http://example.com/source';
    chapter.s3Url = 'http://example.com/s3';

    await connection.manager.save(chapter);
    res.send('Chapter has been saved');
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => console.log(error));
