// Furnitures
// -----------
// id_furniture
// title
// category : 'table' // ou 'chaise'
// materials: ['ebene', 'acajou', ...]
import mongoose from 'mongoose';
import MaterialModel from "../models/Materials.js";

const FurnituresSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ['Armoire', 'Étagère'],
      required: true,
    },
    materials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material',
      }
    ]
  }
);

const FurnituresModel = mongoose.model('Furniture', FurnituresSchema, 'furnitures');

export default FurnituresModel;