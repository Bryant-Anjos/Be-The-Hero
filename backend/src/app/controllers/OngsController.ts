import { Request, Response } from 'express'

import generateUniqueId from '../../utils/generateUniqueId'
import connection from '../../database/connection'

import Ong from '../interfaces/Ong'

class OngsController {
  async create(req: Request, res: Response): Promise<Response<{ id: string }>> {
    const { name, email, whatsapp, city, uf }: Ong = req.body

    const id = generateUniqueId()

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
