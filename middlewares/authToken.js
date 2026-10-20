const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = authHeader?.split(' ')[1]
  if (!token) {
    return res.status(401).json({message: 'Access Denied : No Token Provided'})
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({message: 'Token expired'})
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(403).json({message: 'Invaild Token'})
      } else {
        return res.status(401).json({message: 'Token Error'})
      }
    }
    req.user = payload
    next()
  })
}

module.exports = {authToken}
