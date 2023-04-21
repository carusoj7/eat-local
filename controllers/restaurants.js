import { Restaurant } from '../models/restaurant.js'

function index(req, res) {
  Restaurant.find({})
  .then(restaurants => {
    res.render('restaurants/index', {
    restaurants,
    title: 'All Restaurants'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new', {
    title: 'Add Restaurant'
  })
}

export {
  index,
  newRestaurant as new,
}