import mongoose from 'mongoose';
import CompaniesModel from './Companies.js';

const MaterialSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: { type: String, required: true },
    company: { type:  mongoose.Schema.Types.ObjectId, ref: 'Companies' }
  }
);

const MaterialModel = mongoose.model('Material', MaterialSchema, 'Materials');

export default MaterialModel;