import express, { Application } from 'express'
import { Data } from './types'
import { config } from 'dotenv'

config()

const app: Application = express()

const data: Data = {
  stays: [{ id: 'new hotel' }],
  articles: ['first article'],
}

app.get('/', (req, res) => {
  console.log(data)
  console.log('ugh', process.env)
  res.status(200).json({ secret: process.env.DAIN_SECRET })
})

app.get('*', function (_req, res) {
  res.status(404).send('Not found, real sorry')
})

export { app }