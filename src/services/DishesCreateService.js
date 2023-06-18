class DishesCreateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute({ avatar, name, category, description, price, ingredients,created_by }) {
    await this.dishesRepository.create({avatar, name, category, description, price, ingredients, created_by })
  }  

}

module.exports = DishesCreateService