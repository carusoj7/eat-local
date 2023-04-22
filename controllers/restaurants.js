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
  Restaurant.findByIdAndUpdate(req.params.restaurantId)
  .then(restaurant => {
    if (restaurant.owner.equals(req.user.profile._id)) {
      restaurant.updateOne(req.body)
      .then(() => {
        res.redirect(`/restaurants/${restaurant._id}`)
      })
    } else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/restaurants')
  })
}

function deleteRestaurant(req, res) {
  Restaurant.findByIdAndDelete(req.params.restaurantId)
  .then(restaurant => {
    if (restaurant.owner.equals(req.user.profile._id)) {
      restaurant.deleteOne()
      .then(() => {
        res.redirect('/restaurants')
      })
    } else {
      throw Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/restaurants')
  })
}

function addReview(req, res){
  Restaurant.findById(req.params.restaurantId)
  .then(restaurant => {
    req.body.author = req.user.profile._id
    restaurant.reviews.push(req.body)
    restaurant.save()
    .then(() => {
      res.redirect(`/restaurants/${restaurant._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/restaurants')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/restaurants')
  })
}


export {
  index,
  newRestaurant as new,
  create,
  show,
  edit,
  update,
  deleteRestaurant as delete,
  addReview
}