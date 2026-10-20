const express = require('express')
 
const router = express.Router()
 
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')
 
// CREATE PRODUCT
router.post('/add-product', createProduct)
 
// GET ALL PRODUCTS
router.get('/', getAllProducts)
 
// GET PRODUCT BY ID
router.get('/:id', getProductById)
 
// UPDATE PRODUCT
router.put('/:id', updateProduct)
 
// DELETE PRODUCT
router.delete('/:id', deleteProduct)
 
module.exports = router