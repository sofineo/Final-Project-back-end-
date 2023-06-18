const AppError = require("../utils/AppError")
const { hash } = require('bcryptjs')

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute({ name, email, password}) {
    const checkIfUserExists = await this.userRepository.findUserByEmail(email)

    if (checkIfUserExists) {
      throw new AppError('This email is already in use.')
    }

    const hashedPassword = await hash(password, 8)

    const userCreated = await this.userRepository.create({ name, email, password: hashedPassword})

    return userCreated
  }
}

module.exports = UserCreateService