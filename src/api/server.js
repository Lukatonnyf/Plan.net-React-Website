import express from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const server = express()
server.use(express.json())
server.use(cors())

server.post('/user', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    })

    res.status(201).json(req.body)


})

server.get('/user', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

server.listen(3000)