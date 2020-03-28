import { Request, Response, response } from 'express'
import crypto from 'crypto'

import connection from '../../database/connection'

import Ong from '../interfaces/Ong'

class OngsController {
  async create(req: Request, res: Response): Promise<Response<{ id: string }>> {
    const { name, email, whatsapp, city, uf }: Ong = req.body

    const id = crypto.randomBytes(8).toString('HEX')

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ id })
  }

  async index(req: Request, res: Response): Promise<Response<Ong[]>> {
    const ongs = await connection<Ong>('ongs').select('*')

    return res.json(ongs)
  }
}

export default new OngsController()
