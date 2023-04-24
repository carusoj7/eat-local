import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
  content: String,
  rating: {
    type: Number, min: 1, max: 5},
  visitAgain: Boolean
})

const restaurantSchema = new Schema({
  name: String,
  location: String,
  specialty: {
    type: String,
    enum: ['Breakfast', 'Brunch', 'Lunch', 'Dinner']
  },
  foodType: String,
  attire: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  reviews: [reviewSchema]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}