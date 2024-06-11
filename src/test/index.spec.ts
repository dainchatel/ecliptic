import { app } from '../server'
import request from 'supertest'
import { Article, Stay } from '../types'

describe('endpoint testing', () => {
  const server = request(app)
  it('loads document at home route', async () => {
    const res = await server
      .get('/')
      .expect(200)

    expect(res.body.articles?.length).toBeGreaterThan(2)

    res.body.articles.forEach((article: Article) => {
      expect(article.title).toBeDefined()
      expect(article.author).toBeDefined()
      expect(article.text).toBeDefined()
    })

    expect(res.body.stays?.length).toBeGreaterThan(2)

    res.body.stays.forEach((stay: Stay) => {
      expect(stay.name).toBeDefined()
      expect(stay.location).toBeDefined()
      expect(stay.description).toBeDefined()
      expect(stay.coordinates).toBeDefined()
      expect(stay.type).toBeDefined()
      expect(stay.link).toBeDefined()
    })

  })
})