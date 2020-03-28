import { Request, Response } from 'express'
import crypto from 'crypto'

import connection from '../../database/connection'

import Ong from '../interfaces/Ong'

class OngsController {
  async store(req: Request, res: Response) {
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
}

export default new OngsController()
