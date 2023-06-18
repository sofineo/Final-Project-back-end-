const { Router } = require('express')
const routes = Router()

const userRouter = require('./users.routes')
const sessionRouter = require('./session.routes')
const dishesRouter = require('./dishes.routes')

routes.use('/users', userRouter)
routes.use('/session', sessionRouter)
routes.use('/dishes', dishesRouter)

module.exports = routes