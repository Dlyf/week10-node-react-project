import mongoose from 'mongoose';

const MaterialSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: { type: String, required: true },
    company: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Company',
    },
  },
  { versionKey: false }
);

const MaterialModel = mongoose.model('Material', MaterialSchema);

export default MaterialModel;