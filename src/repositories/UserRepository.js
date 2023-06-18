const knex = require('../database/knex')

class UserRepository {
  async findUserByEmail(email) {
    const user = await knex.select().from('users').where({ email }).first()

    return user
  }

  async create({ name, email, password }) {
    const userID = await knex('users').insert({
      name,
      email,
      password
    })

    return { id: userID }
  }
}

module.exports = UserRepository