import {Router} from 'express';

const indexRouter = Router();
indexRouter.get('/', (req, res) => res.send('Welcome to the library'));
// indexRouter.get('/:authorId', (req, res) => {
//   const {authorID} = req.params;
//   res.send(`Author ID: ${authorID}`)
// })

export default Router;