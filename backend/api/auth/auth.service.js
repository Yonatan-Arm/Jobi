const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(username, password) {
    logger.debug(`auth.service - login with name: ${username}`)
    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid name or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid name or password')
    delete user.password
    return user
}

async function signup(username, password, jobs ) {
    const saltRounds = 10
    logger.debug(`auth.service - signup with name: ${username}, fullname: ${username}`)
    if (!username || !password) return Promise.reject('fullname, name and password are required!')
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash ,jobs})
}

module.exports = {
    signup,
    login,
}