const express = require('express')
const { getUsers, getUserById, addUser, updateUser, removeUser } = require('./user.controller')
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/',   addUser)
router.put('/:id',  updateUser)
router.delete('/:id', removeUser)

module.exports = router