import express from 'express';

import { addOrderItems } from '../controllers/orderController.js';

const router = express.Router();

//@description CREATE all new Order
//@route POST /api/orders
//@access PUBLIC

router.route('/').post(addOrderItems);

export default router;
