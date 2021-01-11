const Router = require('express').Router()
const controller = require('../controllers/TellerController')
const { getToken, createToken, verifyToken } = require('../middleware/JwtHandler')

Router.post('/login', controller.LoginTeller)
Router.post('/create', controller.CreateTeller)
// Router.get('/session', getToken, verifyToken, controller.RefreshSession)

module.exports = Router