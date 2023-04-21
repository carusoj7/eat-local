import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: String,
  location: String,
  specialty: {
    type: String,
    enum: ['Breakfast', 'Brunch', 'Lunch', 'Dinner']
  },
  foodType: String,
  fancy: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}