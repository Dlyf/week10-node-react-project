// Companies
// ----------
// id_company
// name
// materials: ['fer, metal']

import mongoose from 'mongoose';

const CompaniesSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: { type: String, required: true },
    materials: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Material',
      },
    ],
  },
  { versionKey: false }
);

const CompaniesModel = mongoose.model('Companies', CompaniesSchema);

export default CompaniesModel;