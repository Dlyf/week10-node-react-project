import FurnituresModel from "../models/Furnitures.js";

export default async function furnitures(req, res) {
  try {
    const furnitures = await FurnituresModel.find({}).populate({
      path: 'materials',
      populate: {
        path: 'company'
      }
    })
    console.log(furnitures);
    res.json({ furnitures });
  }
  catch (err) {
    console.log(err);
    res.status(500).json({message: err.mess});
  }
}

export async function PostFurnitures(req, res) {
  console.log("########")

  console.log("test", req.body)
  try {
    const { title, category } = req.body;
    // console.log(req.body.title, req.body.category );
      const newFurniture = new FurnituresModel({ title, category });

      const createdFurniture = await newFurniture.save();
      res.status(201).json(createdFurniture);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du meuble.' });
}

}