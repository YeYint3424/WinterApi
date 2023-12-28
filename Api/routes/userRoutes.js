const route = require('express').Router()
const userController = require('../controller/userController')
route.post('/create',userController.createUser)
route.get('/:userId', userController.getUserById)
route.put('/update/:userId', userController.userUpdate)
route.put('/delete/:userId', userController.userDelete)

module.exports = route;