// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('hello, world')
//     return response.end()
// }
// )

// server.listen(3000)

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', () =>{
    database.create({
        title: 'Video 01',
        description: "Esse é o vídeo 01",
        duration: 180,
    })

    console.log(database.list())
})

server.get('/videos', () =>{
    return 'Hello, Soraia!'
})

server.put('/videos/:id', () =>{
    return 'Hello, node.js!'
})

server.put('/videos/:id', () =>{
    return 'Hello, node.js!'
})

server.listen({
    port: 3000,
})
