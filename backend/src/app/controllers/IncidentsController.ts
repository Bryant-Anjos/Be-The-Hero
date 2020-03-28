import { Request, Response, response } from 'express'

import connection from '../../database/connection'

import Incident from '../interfaces/Incident'
import Ong from '../interfaces/Ong'

class IncidentsController {
  async create(req: Request, res: Response): Promise<Response<{ id: string }>> {
    const { title, description, value }: Incident = req.body
    const ong_id = req.headers.authorization

    const [id] = await connection<Incident>('incidents').insert({
      title,
      description,
      value,
      ong_id,
    })

    return res.json({ id })
  }

  async index(req: Request, res: Response): Promise<Response<Incident[]>> {
    const { page = 1 }: { page: number } = req.query

    const [count] = await connection<Incident>('incidents').count()

    res.header('X-Total-Count', count['count(*)'])

    const incidents = await connection<Incident>('incidents')
      .join<Ong>('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])

    return res.json(incidents)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incident = await connection<Incident>('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident?.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permited.' })
    }

    await connection<Incident>('incidents')
      .where('id', id)
      .delete()

    return res.status(204).send()
  }
}

export default new IncidentsController()
