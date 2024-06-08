import { app } from '../server'
import request from 'supertest'

describe('endpoint testing', () => {
  const server = request(app)
  it('loads document at home route', async () => {
    const res = await server
      .get('/')
      .expect(200)

    expect(res.body.docName).toStrictEqual('hotelsdotcom')

  })
})