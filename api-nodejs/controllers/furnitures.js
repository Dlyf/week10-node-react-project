import FurnituresModel from "../models/Furnitures.js";

export default async function furnitures(req, res) {
  try {
    const furnitures = await FurnituresModel.find({}).populate("materials")
    res.json({ furnitures });
  }
  catch (err) {
    res.status(500).json({message: err.mess});
  }
}