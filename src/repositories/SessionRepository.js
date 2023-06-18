const knex = require('../database/knex')
const authConfig = require('../configs/auth')
const { sign, verify } = require('jsonwebtoken')
const { compare } = require('bcryptjs')
const AppError = require('../utils/AppError')

class SessionRepository {
  async findUserByEmail(email) {
    const user = await knex('users').where({ email }).first()

    return user
  }

  async checkPassword({ user, password }) {
    const matchedPassword = await compare(password, user.password)

    return matchedPassword
  }

  async create({ user }) {
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({
      admin: user.admin
    }, secret, {
      subject: String(user.id),
      expiresIn
    })

    return { user, token }
  }
}

module.exports = SessionRepository