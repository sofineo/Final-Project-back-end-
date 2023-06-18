class DishesUpdateService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository
  }

  async execute({ id, avatar, name, category, description, price, ingredients, updated_by: user_id}) {
    await this.dishesRepository.update({ id, avatar, name, category, description, price, ingredients, updated_by: user_id})
  }  

}

module.exports = DishesUpdateService