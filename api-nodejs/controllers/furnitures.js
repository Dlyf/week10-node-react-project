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

// export default async function PostFurnitures(req, res) {
  
  
// }