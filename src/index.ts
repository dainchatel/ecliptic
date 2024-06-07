import { app } from './server'

const port = process.env.PORT ?? '3043'

app.listen(port, () => {
  console.log(`We're up! Listening on port ${port}`)
})