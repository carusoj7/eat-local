import { Router } from 'express'

import * as restaurantsCtrl from '../controllers/restaurants.js'

import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/restaurants
router.get('/', restaurantsCtrl.index)

router.get('/new', isLoggedIn, restaurantsCtrl.new)

router.get('/:restaurantId', restaurantsCtrl.show)

router.get('/:restaurantId/edit', isLoggedIn, restaurantsCtrl.edit)

//POST localhost:3000/restaurants

router.post('/', isLoggedIn, restaurantsCtrl.create)

router.post('/:restaurantId/reviews', isLoggedIn, restaurantsCtrl.addReview)

// PUT localhost:3000/restaurants/:restaurantId

router.put('/:restaurantId', isLoggedIn, restaurantsCtrl.update)

// DELETE localhost:3000/restaurants/:restaurantId
router.delete('/:restaurantId', isLoggedIn, restaurantsCtrl.delete)



export{ router }