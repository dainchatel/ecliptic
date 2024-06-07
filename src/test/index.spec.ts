import { app } from '../server'
import request from 'supertest'

describe('my block', () => {
  it('does my stuff ', async () => {
    const res = await request(app)
      .get('/')
      .expect(200)

    expect(res.body.secret).toStrictEqual('heheheheh')

  })
})