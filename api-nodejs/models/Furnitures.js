// Furnitures
// -----------
// id_furniture
// title
// category : 'table' // ou 'chaise'
// materials: ['ebene', 'acajou', ...]
import mongoose from 'mongoose';

const FurnituresSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ['Armoire', 'Etagère'],
      required: true,
    },
    materials: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Material',
      },
    ],
  },
  { versionKey: false }
);

const FurnituresModel = mongoose.model('Furniture', FurnituresSchema);

export default FurnituresModel;