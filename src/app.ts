import * as express from 'express'
import { Request,Response } from 'express' 
import * as cors from 'cors'
import {createConnection} from 'typeorm'
import {Product} from './Entity/product'

createConnection().then(db =>{
    const productRepository= db.getRepository(Product);
    const app= express()
    const port = 8000
    
    app.use(cors({
        origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200']
    }))
    
    app.use(express.json())
    
    app.get('/api/products', async (req:Request,res:Response)=>{
        const products = await productRepository.find();
        res.json(products)
    })

    app.get('/api/products', async (req:Request,res:Response)=>{
        const products = await productRepository.find();
        res.json(products)
    })

    app.get('/api/products/:id', async (req:Request,res:Response)=>{
        const product = await productRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
        return res.send(product)
    })

    console.log('listening to port :8000')
    
    app.listen(port)})


