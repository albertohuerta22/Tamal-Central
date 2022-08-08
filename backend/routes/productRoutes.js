import express from 'express';

import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

//@description GET all products
//@route GET /api/products
//@access PUBLIC

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
