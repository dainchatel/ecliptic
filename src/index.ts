import express, { Application } from 'express'
import { Data } from './types'

const app: Application = express()
const port = process.env.PORT ?? 3045

const data: Data = {
  stays: [{ id: 'new hotel' }],
  articles: ['first article'],
}

app.get('/', (req, res) => {
  res.status(200).json(data)
})

app.get('*', function (_req, res) {
  res.status(404).send('Not found, real sorry')
})

app.listen(port, () => {
  console.log(`We're up! Listening on port ${port}`)
})