const knex = require('../database/knex')

class FavoriteRepository {
  async create({ user_id, dish_id }) {
    await knex('favorites').insert({
      user_id,
      dish_id
    })
  }

  async index({ user_id }) {
    const favorites = await knex('favorites').select([
      'dishes.id',
      'dishes.avatar',
      'dishes.name'
    ]) 
    .where('favorites.user_id', `${user_id}`)
    .innerJoin('dishes', 'dishes.id', 'favorites.dish_id')
    .groupBy('dishes.id')
    .orderBy('dishes.name')

    return favorites
  }

  async delete({ user_id, dish_id }) {
    await knex('favorites').where({ dish_id }).andWhere({ user_id }).delete()
  }
}

module.exports = FavoriteRepository