const Router = require('express').Router()
const controller = require('../controllers/TellerController.js')

Router.post('/login', controller.LoginTeller)

module.exports = Router