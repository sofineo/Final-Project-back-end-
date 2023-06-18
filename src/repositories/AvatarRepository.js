const { diskStorage } = require('multer')
const knex = require('../database/knex')
const DiskStorage = require('../providers/DiskStorage')


class AvatarRepository {
  async create(avatarFileName){
    const diskStorage = new DiskStorage()

    const filename = await diskStorage.saveFile(avatarFileName)

    return filename
  }

  async update({ avatarFileName, id }) {
    const diskStorage = new DiskStorage()

    const dish = await knex('dishes').select().where({ id }).first()

    if(dish.avatar) {
      await diskStorage.deleteFile(dish.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFileName)

    dish.avatar = filename

    await knex('dishes').update(dish).where({ id })
  }
    
  }

module.exports = AvatarRepository 