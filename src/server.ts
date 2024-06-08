import express, { Application } from 'express'
import { fetchDocument } from './fetchDocument'
import { config } from 'dotenv'

config()

const app: Application = express()

app.get('/', async (req, res) => {
  const doc = await fetchDocument()
  res.status(200).json({ docName: doc })
})

app.get('*', function (_req, res) {
  res.status(404).send('Not found, real sorry')
})

export { app }