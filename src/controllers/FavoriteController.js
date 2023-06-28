const FavoriteRepository = require("../repositories/FavoriteRepository")
const FavoriteCreateService = require("../services/FavoriteCreateService")
const FavoriteIndexService = require("../services/FavoriteIndexService")
const FavoriteDeleteService = require("../services/FavoriteDeleteService")

class FavoriteController {

  async create(request, response) {
    const { id } = request.params
    const user_id = request.user.id

    const favoriteRepository = new FavoriteRepository()
    const favoriteCreateService = new FavoriteCreateService(favoriteRepository)
    await favoriteCreateService.execute({ user_id, dish_id: id })

    return response.status(201).json()
  }

  async index(request, response) {
    const user_id = request.user.id

    const favoriteRepository = new FavoriteRepository()
    const favoriteIndexService = new FavoriteIndexService(favoriteRepository)
    const favorites = await favoriteIndexService.execute({ user_id })

    return response.status(201).json(favorites)
  }

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.user.id

    const favoriteRepository = new FavoriteRepository()
    const favoriteDeleteService = new FavoriteDeleteService(favoriteRepository)
    await favoriteDeleteService.execute({ user_id, dish_id: id })

    return response.status(200).json()
  }

}

module.exports = FavoriteController