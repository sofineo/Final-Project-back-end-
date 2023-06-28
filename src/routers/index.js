const { Router } = require('express')
const routes = Router()

const userRouter = require('./users.routes')
const sessionRouter = require('./session.routes')
const dishesRouter = require('./dishes.routes')
const favoriteRouter = require('./favorite.routes')

routes.use('/users', userRouter)
routes.use('/session', sessionRouter)
routes.use('/dishes', dishesRouter)
routes.use('/favorite', favoriteRouter)

module.exports = routes