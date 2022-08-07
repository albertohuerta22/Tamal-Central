import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//description GET all products
//@route /api/products
//acess PUBLIC

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

export { getProducts };
