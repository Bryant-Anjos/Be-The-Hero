import request from 'supertest'
import app from '../../app'

import connection from '../../database/connection'

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD',
        email: 'contato@apad.com.br',
        whatsapp: '17912345678',
        city: 'Rio do Sul',
        uf: 'SC',
      })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(16)
  })
})
