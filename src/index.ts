import express, {Request, Response} from 'express'
import { errorHandler } from './handlers/errors';
import usersRouter from './routes/users'
import callsRouter from './routes/calls'

const PORT = 8080;

const app = express();

app.use('/api/users', usersRouter)
app.use('/api/calls', callsRouter)
app.use(errorHandler)

app.get('*', function(request: Request, response: Response) {
    response.status(404).send("Not found");
})

app.listen(PORT, () => {
    console.log(`Currently running on ${PORT}`)
})

