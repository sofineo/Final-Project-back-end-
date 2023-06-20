const knex = require('../database/knex')


class DishesRepository {
  async create({ avatar, name, category, description, price, ingredients, created_by}) {
    const [dish_id] = await knex('dishes').insert({
      avatar,
      name, 
      category, 
      description, 
      price,
      created_by
    })

    const ingredientsInserted = ingredients.map(name => {
      return {
        dish_id,
        name
      }
    })
    
    await knex('ingredients').insert(ingredientsInserted)
  }

  async show({ id }) {
    const dish = await knex('dishes').where({ id }).first()
    const ingredients = await knex('ingredients').where({ dish_id: id})

    return { ...dish, ingredients}
  }

  async update({ id, avatar, name, category, description, price, ingredients, updated_by }) {

    await knex('dishes').where({ id }).update({
      avatar, 
      name, 
      category, 
      description, 
      price, 
      updated_at: knex.fn.now(),
      updated_by
    })

    await knex('ingredients').where({ dish_id: id}).delete()

    const ingredientsInserted = ingredients.map(name => {
      return {
        dish_id: id,
        name
      }
    })
    
    await knex('ingredients').insert(ingredientsInserted)
  }
  
  async delete({ id }) {
    await knex('dishes').where({ id }).delete()
  }

  async index({ search }) {

    const dishes = await knex('ingredients').select([
      'dishes.id',
      'dishes.avatar',
      'dishes.name',
      'dishes.category',
      'dishes.price',
      'dishes.description'
    ]) 
    .whereLike('dishes.name', `%${search}%`)
    .orWhereLike('ingredients.name', `%${search}%`)
    .innerJoin('dishes', 'dishes.id', 'ingredients.dish_id')
    .groupBy('dishes.category', 'dishes.id' )
    .orderBy('dishes.name')

    return dishes
  }
}

module.exports = DishesRepository 