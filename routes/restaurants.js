import { Router } from 'express'

import * as restaurantsCtrl from '../controllers/restaurants.js'

import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, restaurantsCtrl.index)

router.get('/new', isLoggedIn, restaurantsCtrl.new)

router.get('/:restaurantId', isLoggedIn, restaurantsCtrl.show)

router.get('/:restaurantId/edit', isLoggedIn, restaurantsCtrl.edit)

router.get('/:restaurantId/reviews/:reviewId/edit', isLoggedIn, restaurantsCtrl.editReview)

router.post('/', isLoggedIn, restaurantsCtrl.create)

router.post('/:restaurantId/reviews', isLoggedIn, restaurantsCtrl.addReview)

router.put('/:restaurantId', isLoggedIn, restaurantsCtrl.update)

router.put('/:restaurantId/reviews/:reviewId', isLoggedIn, restaurantsCtrl.updateReview)

router.delete('/:restaurantId', isLoggedIn, restaurantsCtrl.delete)

router.delete('/:restaurantId/reviews/:reviewId', isLoggedIn, restaurantsCtrl.deleteReview)

export{ router }