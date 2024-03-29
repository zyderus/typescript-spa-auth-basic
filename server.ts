import express, { Request, Response } from 'express'
import path from 'path'

const server = express()
const port: string | number = process.env.PORT || 5000

server.use(express.static(path.join(__dirname, '/public')))

server.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

server.listen(port, () => console.log(`server is running @ http://localhost:${port}`))
