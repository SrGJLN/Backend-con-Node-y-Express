import { pool } from '../db/db.js';

const getPost = async () => { 
  try { 
    const posts = await pool.query('SELECT id , titulo, img, descripcion FROM POSTS')
    return posts.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

const createNewPost = async (titulo, img, descripcion) => { 
  try { 
    const newPost = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
    [titulo, img, descripcion])
    return newPost.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

export {getPost, createNewPost};