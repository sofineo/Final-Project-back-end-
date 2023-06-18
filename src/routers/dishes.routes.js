const { Router } = require('express')
const dishesRouter = Router()

const multer = require('multer')
const uploadConfig = require('../configs/upload')
const upload = multer(uploadConfig.MULTER)
const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const ensureAdmin = require('../middleware/ensureAdmin')

const DishesController = require('../controllers/DishesController')
const dishesController = new DishesController()
const AvatarController = require('../controllers/AvatarController')
const avatarController = new AvatarController()

dishesRouter.use(ensureAuthenticated)

dishesRouter.get('/', dishesController.index)
dishesRouter.post('/', ensureAdmin, upload.single('avatar'), dishesController.create)
dishesRouter.patch('/avatar', ensureAdmin, upload.single('avatar'), avatarController.create)
dishesRouter.patch('/avatar/:id', ensureAdmin, upload.single('avatar'), avatarController.update)
dishesRouter.get('/:id', dishesController.show)
dishesRouter.put('/:id', ensureAdmin, dishesController.updated)
dishesRouter.delete('/:id', ensureAdmin, dishesController.delete)

module.exports = dishesRouter 