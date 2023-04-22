import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  content: String,
  rating: {
    type: Number, min: 1, max: 5},
  goAgain: Boolean
})

const restaurantSchema = new Schema({
  name: String,
  location: String,
  specialty: {
    type: String,
    enum: ['Breakfast', 'Brunch', 'Lunch', 'Dinner']
  },
  foodType: String,
  fancy: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  reviews: [reviewSchema]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}