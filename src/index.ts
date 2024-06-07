import { app } from './server'

const port = process.env.PORT ?? '3043'
console.log('ugh', process.env)
app.listen(port, () => {
  console.log(`We're up! Listening on port ${port}`)
})