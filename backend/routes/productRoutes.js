import express from 'express';

import { getProducts } from '../controllers/productController.js';

const router = express.Router();

//@description GET all products
//@route GET /api/products
//@access PUBLIC

router.route('/').get(getProducts);

export default router;
