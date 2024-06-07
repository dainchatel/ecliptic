import { app } from '../server'
import request from 'supertest'

describe('endpoint testing', () => {
  it('loads document at home route', async () => {
    const res = await request(app)
      .get('/')
      .expect(200)

    expect(res.body.docName).toStrictEqual('hotelsdotcom')

  })
})