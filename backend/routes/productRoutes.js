import express from 'express';

import { getProudcts } from '../controllers/productControllers.js';

const router = express.router();

//@description GET all products
//@route GET /api/products
//@access PUBLIC

router.route('/').get(getProudcts);

export default router;
