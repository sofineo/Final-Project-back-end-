class DishesShowService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute({ id }) {
    const dish = await this.dishesRepository.show({ id })

    return dish
  }  

}

module.exports = DishesShowService