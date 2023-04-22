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
function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.fancy = !!req.body.fancy
  Restaurant.create(req.body)
  .then(restaurant => {
    res.redirect('/restaurants')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Restaurant.findById(req.params.restaurantId)
  .then(restaurant => {
    res.render('restaurants/show', {
      restaurant,
      title: 'Restaurant Details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/restaurants')
  })
}

function edit(req, res) {
  Restaurant.findById(req.params.restaurantId)
  .then(restaurant => {
    res.render('restaurants/edit', {
    restaurant,
    title: 'Edit Restaurant'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/restaurants')
  })
}

function update(req, res) {
  console.log("this works")
  console.log(req.body)
  console.log(req.params);
}

export {
  index,
  newRestaurant as new,
  create,
  show,
  edit,
  update,
}