class AvatarUpdateService {
  constructor(avatarRepository) {
    this.avatarRepository = avatarRepository
  }

  async execute({avatarFileName, id }) {
      await this.avatarRepository.update({avatarFileName, id })
  }  

}

module.exports = AvatarUpdateService 