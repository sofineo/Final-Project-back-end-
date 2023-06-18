const AppError = require('../utils/AppError')
const knex = require('../database/knex')

async function ensureAdmin(request, response, next) {
  const admin = request.user.admin

  try {

    if(!admin) {
      throw new AppError('Operação não permitida, não é um administrador', 403)
    }

    return next()

  } catch {
    throw new AppError('Operação não permitida, não é um administrador', 403)
  }
}

module.exports = ensureAdmin