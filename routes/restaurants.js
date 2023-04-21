import { Router } from 'express'

import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

// GET localhost:3000/restaurants
router.get('/', restaurantsCtrl.index)

router.get('/new', restaurantsCtrl.new)

//POST localhost:3000/restaurants

router.post('/', restaurantsCtrl.create)





export{ router }