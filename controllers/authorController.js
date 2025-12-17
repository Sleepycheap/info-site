import {getAuthorById} from '../db.js';
import {CustomNotFoundError} from '../errors/CustomNotFoundError.js'

export async function getAuthor(req,res) {
  const {authorId} = req.params;

  try {
    const author = await getAuthorById(Number(authorId));
    
    if (!author) {
      throw new CustomNotFoundError("Author not found");
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error('Error retrieving author:', error);
    res.status(500).send('Internal server error');
  }

};


