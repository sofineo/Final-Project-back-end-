class DishesIndexService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute({ search }) {
    const dish = await this.dishesRepository.index({ search })

    return dish
  }  

}

module.exports = DishesIndexService