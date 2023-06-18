class AvatarCreateService {
  constructor(avatarRepository) {
    this.avatarRepository = avatarRepository
  }

  async execute(avatarFileName) {
      const filename = await this.avatarRepository.create(avatarFileName)

      return filename
  }  

}

module.exports = AvatarCreateService 