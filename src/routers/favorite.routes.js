const { Router } = require('express')
const favoriteRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const FavoriteController = require('../controllers/FavoriteController')
const favoriteController = new FavoriteController()

favoriteRoutes.use(ensureAuthenticated)

favoriteRoutes.get('/', favoriteController.index)
favoriteRoutes.post('/:id', favoriteController.create)
favoriteRoutes.delete('/:id', favoriteController.delete)

module.exports = favoriteRoutes