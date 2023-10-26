// Furnitures
// -----------
// id_furniture
// title
// category : 'table' // ou 'chaise'
// materials: ['ebene', 'acajou', ...]
import mongoose from 'mongoose';

const FurnitureSchema = new mongoose.Schema(
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

const FurnitureModel = mongoose.model('Furniture', FurnitureSchema);

export default FurnitureModel;