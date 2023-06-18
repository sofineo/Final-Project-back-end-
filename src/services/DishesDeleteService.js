class DishesDeleteService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute({ id }) {
    await this.dishesRepository.delete({ id })

  }  

}

module.exports = DishesDeleteService