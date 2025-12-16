import {Router} from 'express';

const authorRouter = Router();
authorRouter.get('/', (req, res) => res.send('All Authors'));
authorRouter.get('/:authorId', (req, res) => {
  const {authorID} = req.params;
  res.send(`Author ID: ${authorID}`)
})

export default Router;