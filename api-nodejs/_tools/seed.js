import dotenv from 'dotenv';
import mongoose from 'mongoose';
import FurnituresModel from "../models/Furnitures.js";
import data from '../_data/furnitures.json' assert { type: 'json' }

try {
  // @todo: Vider la collection "products"
  await FurnituresModel.deleteMany({})
  console.log(`✅ Furnitures collection cleaned`)

  // @todo: Remplir la collection "products" avec les données dans '_data/products.json'
  await FurnituresModel.create(data)

  // @todo: Afficher un message de confirmation
  console.log(`✅ Database successfully seeded`)
}
catch (err) {
  console.log(`❌ Erreur d'insertion :`, err.message)
}

process.exit(0)

