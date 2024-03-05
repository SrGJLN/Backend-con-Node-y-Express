import { getPost, createNewPost } from "../model/postsModel.js";

const getAllPosts = async (_, res) => {
  try {
    const posts = await getPost();
    if (!posts) {
      res.status(404).send("This entity does not exist");
  }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addNewPosts = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      res.status(400).json({ message: "You should enter all the fields" });
      return;
  }else{    
    const newPost = await createNewPost(titulo, url, descripcion);
    return res.status(200).json(newPost);
  }
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};

export {getAllPosts, addNewPosts};