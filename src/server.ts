import express, {Express, Request, Response} from 'express'

import { connectToDatabase } from "./services/database.service"
import usersRouter from "./routers/users";
import gamesRouter from './routers/games';

const app: Express = express()
const port = 3000;

// Get method

app.use(express.json())

connectToDatabase().then(() => {
    app.get('/', (req: Request, res: Response) => {
        res.send('This was a GET request!')
    })
    
    // Post method
    
    app.get('/resource/:resourceId', (req: Request, res: Response) => {
    
        res.send('This was a GET to resource ' + req.params.resourceId)
    })
    
    // Getting with param
    
    app.post('/', (req: Request, res: Response) => {
        res.send('This was a POST request!')
    })
    
    // Serving a static resource
    app.use(express.static('public'))
    
    app.use('/users', usersRouter)
    app.use('/games', gamesRouter)
    
    // App start listening
    
    app.listen(port, () => {
        console.log(`[Server]: I am runningcl at https://localhost:${port}`)
    })
})
.catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
});

