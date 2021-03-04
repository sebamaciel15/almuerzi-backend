const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Orders = mongoose.models('Order', new Schema({
  meal_id: { type: Schema.Types.ObjetId, ref: 'Meal' },
  user_id: String, 
}))

module.exports = Orders
