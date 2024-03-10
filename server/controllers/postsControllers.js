import { getPostModel, 
  createPostModel, 
  updatePostModel, 
  deletePostModel } from "../model/postsModel.js";

const getPostController = async (_, res) => {
  try {
    const posts = await getPostModel();
    if (!posts) {
      return res.status(404).send({ message: "This entity does not exist" });
  }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPostController = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ message: "You should enter all the fields" });
  }else{    
    const newPost = await createPostModel(titulo, url, descripcion);
    return res.status(200).json(newPost);
  }
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};

const updatePostController = async (req, res) => {
  try {
    const {id} = req.params;
    if (!id) {
      return res.status(400).json({ message: "Post not found" });
  }
    const updatePost = await updatePostModel(id);
    return res.status(201).json(updatePost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deletePostController = async (req, res) => {
  try {
    const {id} = req.params;
    if (!id) {
      return res.status(400).json({ message: "Post not found" });
  }
    const deletePost = await deletePostModel(id);
    return res.status(204).json({ message: "Post deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export {getPostController, createPostController, updatePostController, deletePostController};