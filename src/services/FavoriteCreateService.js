class FavoriteCreateService {
  constructor(favoriteRepository) {
    this.favoriteRepository = favoriteRepository
  }

  async execute({ user_id, dish_id }) {
    await this.favoriteRepository.create({ user_id, dish_id })
  }
}

module.exports = FavoriteCreateService