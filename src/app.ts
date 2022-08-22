import * as express from 'express'
import * as cors from 'cors'
import {createConnection} from 'typeorm'

createConnection().then(db =>{const app= express()
    const port = 8000
    
    app.use(cors({
        origin: ['http://localhost:3000','http://localhost:8080','http://localhost:4200']
    }))
    
    app.use(express.json())
    
    console.log('listening to port :8000')
    
    app.listen(port)})


