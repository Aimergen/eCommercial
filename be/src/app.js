import express, {json} from 'express';
import cors from 'cors';
import * as mongooseConfig from './configs/mongoose-config';
import usersRouter from './routers/usersRouters';
import userRolesRouter from './routers/userRolesRouter';
import { loginUser, registerUser } from './services/usersService';

const PORT = 8080;
const app =express();

app.use(json());
app.use(cors());

app.get('/api/', (req, res)=>{
    res.json("Hei E-commecial");
});

app.use('/api/users/',usersRouter);
app.use('api/userRoles', userRolesRouter);

//sign up hiigdeg api
app.post('/api/register', async(req, res)=>{
    const {email, password, repassword} = req.body;
    if(password !==repassword){
        return res
            .status(400)
            .json({success: false, message: "Password did not match"});
    }
    const user = await registerUser({email, password});
    console.log('user:', user);
    return res
        .status(200)
        .json({succes: true, message: 'Register successful'});
} );

//login hiih ueiin api
app.post('/api/login', async(req, res)=>{
    const {email, password} =req.body;
    const response= await loginUser({email, password});
    res.status(response.status).json(response);
});

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
});