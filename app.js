import express from 'express';
import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';
import {join} from 'node:path';
import { fileURLToPath } from 'node:url';
// import indexRouter from './routes/indexRouter.js';
import 'dotenv/config'
const dirname = fileURLToPath(new URL('.', import.meta.url));
const filepath = join(dirname, 'views');

const app = express();

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
// app.use('/', indexRouter);


const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.render('index', {message: 'EJS Rocks!'});
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My express app is listening on port: ${port}`);
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);;
})

app.set('views', filepath);
app.set('view engine', 'ejs');