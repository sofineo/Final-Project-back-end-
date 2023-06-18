const { decode } = require("jsonwebtoken")
const SessionRepository = require("../repositories/SessionRepository")
const SessionService = require("../services/SessionService")

class SessionController {

  async create(request, response) {
    const { email, password } = request.body

    const sessionRepository = new SessionRepository()
    const sessionService = new SessionService(sessionRepository)
    const { user, token } = await sessionService.execute({ email, password})

    return response.json({ user, token })
  }
}

module.exports = SessionController