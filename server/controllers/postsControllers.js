import { postModel, createPostModel } from "../model/postsModel.js";

export const posts = async (_, res) => {
  try {
    const likes = await postModel();
    if (!likes) {
      res.status(404).send("This entity does not exist");
  }
    return res.status(200).json(likes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      res.status(400).json({ message: "You should enter all the fields" });
      return;
  }else{    
    const newPost = await createPostModel(titulo, url, descripcion);
    return res.status(200).json(newPost);
  }
  } catch (error) { 
    return res.status(500).json({ message: error.message });
   }
};