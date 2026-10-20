const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// regsternew Users
const registerUser = async (req, res) => {
  try {
    const {name, email, password} = req.body
    const hashpassword = await bcrypt.hash(password, 10)
    const user = new User({
      name,
      email,
      password: hashpassword,
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}
// login users
const loginUser = async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})
  if (!user) {
    return res.status(400).send('Invaild Credentials')
  }
  const isPassword = await bcrypt.compare(password, user.password)
  if (!isPassword) {
    return res.status(400).send('incorrect Password')
  }
  const token = jwt.sign(
    {id: user._id, role: user.role},
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  )
  res.json({token})
}
module.exports = {registerUser, loginUser}
