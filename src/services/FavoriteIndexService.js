class FavoriteIndexService {
  constructor(favoriteRepository) {
    this.favoriteRepository = favoriteRepository
  }

  async execute({ user_id }) {
    const favorites = await this.favoriteRepository.index({ user_id })

    return favorites
  }  

}

module.exports = FavoriteIndexService