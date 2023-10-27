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
        type: String
      },
    ],
  },
  { versionKey: false }
);

const CompaniesModel = mongoose.model('Companies', CompaniesSchema, 'Companies');

export default CompaniesModel;