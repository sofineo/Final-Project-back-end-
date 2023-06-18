const AppError = require("../utils/AppError")

class SessionService {
  constructor(sessionRepository) {
    this.sessionRepository = sessionRepository
  }

  async execute({ email, password}) {
    const user = await this.sessionRepository.findUserByEmail(email)

    if(!user) {
      throw new AppError('Email or password incorrect', 401)
    }

    const validPassword = await this.sessionRepository.checkPassword({ user, password})
  
    if(!validPassword) {
      throw new AppError('Email or password incorrect', 401)
    }

    const createdSession = await this.sessionRepository.create({user})

    return createdSession
  }


}

module.exports = SessionService