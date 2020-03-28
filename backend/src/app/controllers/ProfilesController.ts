import { Request, Response } from 'express'

import connection from '../../database/connection'

import Incident from '../interfaces/Incident'

class ProfilesController {
  async index(req: Request, res: Response) {
    const ong_id = req.headers.authorization || ''

    const incidents = await connection<Incident>('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}

export default new ProfilesController()
