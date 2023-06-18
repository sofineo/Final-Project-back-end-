const { Router } = require('express')
const sessionRouter = Router()

const SessionController = require('../controllers/SessionController')
const sessionController = new SessionController()

sessionRouter.post('/', sessionController.create)

module.exports = sessionRouter