import { pool } from '../db/db.js';

const getPostModel = async () => { 
    const query = await pool.query('SELECT id , titulo, img, descripcion FROM POSTS')
    return query.rows;
}

const createPostModel = async (titulo, img, descripcion) => { 
    const query = await pool.query('INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3, $4) RETURNING *',
    [titulo, img, descripcion])
    return query.rows;
}

const updatePostModel = async (id, likes) => {
    const query = await pool.query('UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *',
    [likes, id])
    return query.rows;
}


const deletePostModel = async (id) => {
    const query = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *',
  [id])
  return query.rows;
};



export {getPostModel, createPostModel, updatePostModel, deletePostModel};