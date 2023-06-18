const { param } = require('express/lib/router')
const AvatarRepository = require('../repositories/AvatarRepository')
const AvatarCreateService = require('../services/AvatarCreateService')
const AvatarUpdateService = require('../services/AvatarUpdateService')

class AvatarController {

  async create(request, response) {
    const avatarFileName = request.file.filename 
    const dish_id = request.params
    console.dir(request)

    const avatarRepository = new AvatarRepository()
    const avatarCreateService = new AvatarCreateService(avatarRepository)
    const filename = await avatarCreateService.execute(avatarFileName)


    return response.status(201).json(filename)
  }

  async update(request, response) {
    const avatarFileName = request.file.filename 
    const { id } = request.params
    console.dir(id)

    const avatarRepository = new AvatarRepository()
    const avatarUpdateService = new AvatarUpdateService(avatarRepository)
    const filename = await avatarUpdateService.execute({avatarFileName, id })


    return response.status(200).json(filename)
  }
}

module.exports = AvatarController