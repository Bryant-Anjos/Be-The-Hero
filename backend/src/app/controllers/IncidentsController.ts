import { Request, Response } from 'express'

import connection from '../../database/connection'

import Incident from '../interfaces/Incident'

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
    const incidents = await connection<Incident>('incidents').select('*')

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
