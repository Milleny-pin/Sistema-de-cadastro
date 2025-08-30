import express from 'express';
import { PrismaClient } from '@prisma/client';  

const prisma = new PrismaClient();

const app = express()
app.use(express.json())


app.post('/usuarios',async (req, res)=>{
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            address: req.body.address
        }
    })
    })

app.get('/usuarios', async (request, response)=> {
    const users = await prisma.user.findMany()
}) 

app.put('/usuarios/:id',async (req, res)=>{
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            address: req.body.address
        }
    })
    })
app.listen(3000)