const DishesRepository = require('../repositories/DishesRepository')
const DishesCreateService = require('../services/DishesCreateService')
const DishesShowService = require('../services/DishesShowService')
const DishesUpdateService = require('../services/DishesUpdateService')
const DishesDeleteService = require('../services/DishesDeleteService')
const DishesIndexService = require('../services/DishesIndexService')

class DishesController {

  async create(request, response) {
    const { avatar, name, category, description, ingredients } = request.body
    const user_id = request.user.id
    let { price } = request.body

    if(price.endsWith(',', Number(price.length)-1)) {
      price = price.padEnd(Number(price.length)+1,'0')
    }
    if(price.endsWith(',', price.length)) {
      price = price.padEnd(Number(price.length)+2,'00')
    }
    if(!price.includes(',')) {
      price = price.padEnd(Number(price.length)+3,',00')
    }

    const dishesRepository = new DishesRepository()
    const dishesCreateService = new DishesCreateService(dishesRepository)
    await dishesCreateService.execute({ avatar, name, category, description, price, ingredients, created_by: user_id })

    return response.status(201).json()
  }

  async show(request, response) {
    const { id } = request.params

    const dishesRepository = new DishesRepository()
    const dishesShowService = new DishesShowService(dishesRepository)
    const dish = await dishesShowService.execute({ id })

    return response.status(200).json(dish)
  }

  async updated(request, response) {
    const { id } = request.params
    const user_id = request.user.id
    const { avatar, name, category, description, price, ingredients } = request.body

    const dishesRepository = new DishesRepository()
    const dishesUpdateService = new DishesUpdateService(dishesRepository)
    await dishesUpdateService.execute({ id, avatar, name, category, description, price, ingredients, updated_by: user_id})

    return response.status(200).json()
  }

  async delete(request, response) {
    const { id } = request.params

    const dishesRepository = new DishesRepository()
    const dishesDeleteService = new DishesDeleteService(dishesRepository)
    await dishesDeleteService.execute({ id })

    return response.status(200).json()
  }

  async index(request, response) {
    const { search } = request.query

    const dishesRepository = new DishesRepository()
    const dishesIndexService = new DishesIndexService(dishesRepository)
    const dishes = await dishesIndexService.execute({ search })

    return response.status(200).json(dishes)
  }
}

module.exports = DishesController