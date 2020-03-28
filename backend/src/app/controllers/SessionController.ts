import { Request, Response } from 'express'

import connection from '../../database/connection'

import Ong from '../interfaces/Ong'

class SessionController {
  async create(req: Request, res: Response) {
    const { id }: Ong = req.body

    const ong = await connection<Ong>('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID' })
    }

    return res.json(ong)
  }
}

export default new SessionController()
