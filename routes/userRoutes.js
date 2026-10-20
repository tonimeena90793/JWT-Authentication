const express = require('express')
const router = express.Router()
const {
  // createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController')
const {registerUser, loginUser} = require('../controllers/authController')
router.post('/register', registerUser)
router.post('/login', loginUser)
const {authToken} = require('../middlewares/authToken')
router.get('/',authToken, getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
