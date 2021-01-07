const Router = require('express').Router()
const controller = require('../controllers/TellerController')

Router.post('/login', controller.LoginTeller)
Router.post('/create', controller.CreateTeller)

module.exports = Router