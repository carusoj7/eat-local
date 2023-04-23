import { Router } from 'express'

import * as restaurantsCtrl from '../controllers/restaurants.js'

import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/restaurants
router.get('/', restaurantsCtrl.index)

router.get('/new', isLoggedIn, restaurantsCtrl.new)

router.get('/:restaurantId', restaurantsCtrl.show)

router.get('/:restaurantId/edit', isLoggedIn, restaurantsCtrl.edit)

router.get('/:restaurantId/reviews/:reviewId/edit', isLoggedIn, restaurantsCtrl.editReview)

//POST localhost:3000/restaurants

router.post('/', isLoggedIn, restaurantsCtrl.create)

router.post('/:restaurantId/reviews', isLoggedIn, restaurantsCtrl.addReview)

// PUT localhost:3000/restaurants/:restaurantId

router.put('/:restaurantId', isLoggedIn, restaurantsCtrl.update)

router.put('/:restaurantId/reviews/:reviewId', isLoggedIn, restaurantsCtrl.updateReview)

// DELETE localhost:3000/restaurants/:restaurantId
router.delete('/:restaurantId', isLoggedIn, restaurantsCtrl.delete)

// DELETE localhost:3000/restaurants/:restaurantId/reviews/:reviewId

router.delete('/:restaurantId/reviews/:reviewId', isLoggedIn, restaurantsCtrl.deleteReview)



export{ router }