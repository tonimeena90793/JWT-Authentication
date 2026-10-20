const Product = require('../models/Product')
 
// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const {name, category, price, description, stock} = req.body
 
    const product = new Product({
      name,
      category,
      price,
      description,
      stock,
    })
 
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}
 
// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const filter  = {};
    if(req.query.minPrice) {
      filter.price = { $gte: Number(req.query.minPrice) };
    }
    if(req.query.maxPrice) {
      filter.price ={$lte: Number(req.query.maxPrice) };
    }
    if(req.query.category) {
      filter.category = req.query.category;
    }
    if(req.query.search) {
    filter.name = { $regex: req.query.search, $options: 'i' };
    }
    let sortObj = {};

    if(req.query.sortBy) {
      const order = req.query.order === 'desc' ? -1 : 1;
      sortObj[req.query.sortBy] = order;
    }

    const products = await Product.find(filter).sortBy(sortObj);
 
    res.status(200).json({
      count: products.length,
      products,
    })
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
 
// GET PRODUCT BY ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
 
    if (!product) {
      return res.status(404).json({message: 'Product not found'})
    }
 
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
 
// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
 
    if (!product) {
      return res.status(404).json({message: 'Product not found'})
    }
 
    res.status(200).json(product)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}
 
// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
 
    if (!product) {
      return res.status(404).json({message: 'Product not found'})
    }
 
    res.status(200).json({message: 'Product deleted successfully'})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
 
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}