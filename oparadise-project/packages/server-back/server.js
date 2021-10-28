import express from 'express'
import cors from 'cors'
const server = express()

const PORT = 3000

server.use(cors())
server.use('/api', (req, res) => {
    res.send({message:`bienvenue dans l'api de Oparadise sur le port ${PORT}`})
})

server.listen(PORT, () => {
  console.log('server listening on : ',PORT)
})