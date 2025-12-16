import express from 'express';
import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';
// import indexRouter from './routes/indexRouter.js';
import 'dotenv/config'

const app = express();

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
// app.use('/', indexRouter);


const port = process.env.PORT || 3000;



app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My express app is listening on port: ${port}`);
})