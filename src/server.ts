import express, { Application } from 'express'
import { fetchFromGoogleAPI } from './google'
import { filterRawStays, mapRawStays } from './stays'
import { filterRawArticles, mapRawArticles } from './articles'
import { config } from 'dotenv'
config()
const app: Application = express()

const STAYS = 'Stays'
const ARTICLES = 'Articles'

app.get('/', async (req, res) => {
  const rawDocument = await fetchFromGoogleAPI()

  const sheets = rawDocument.sheetsByTitle
  const rawStays = await sheets[STAYS].getRows()
  const stays = rawStays
    .filter(filterRawStays)
    .map(mapRawStays)

  const rawArticles = await sheets[ARTICLES].getRows()
  const articles = rawArticles
    .filter(filterRawArticles)
    .map(mapRawArticles)

  res.status(200).json({ stays, articles })
})

app.get('*', function (_req, res) {
  res.status(404).send('Not found, real sorry')
})

export { app }