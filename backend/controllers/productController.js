import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//description GET all products
//@route /api/products
//acess PUBLIC

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//description GET single product by id
//@route /api/products/:id
//acess PUBLIC

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id); //comes from URL

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//description DELETE single product by id
//@route /api/products/:id
//acess PRIVATE
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id); //comes from URL

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, deleteProduct };
