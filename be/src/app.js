import express, {json} from 'express';
import cors from 'cors';
import * as mongooseConfig from './configs/mongoose-config';
import usersRouter from './routers/usersRouters';

const PORT = 8080;
const app =express();

app.use(json());
app.use(cors());

app.get('/api/', (req, res)=>{
    res.json("Hei E-commecial");
});

app.use('/api/users/',usersRouter);

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
});