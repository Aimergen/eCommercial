import express from "express";
import { deleteModel } from "mongoose";
import { createUser, getUserId, getUsers, updateUser } from "../services/usersService";

const usersRouter= express.Router();

usersRouter.get('/', async(req, res)=>{
    res.json(await getUsers());
});

usersRouter.get('/:id', async(req, res)=>{
    const {id}= req.params;
    res.json( await getUserId(id));
});

usersRouter.post('/', async(req, res)=>{
    const user= req.body;
    res.json(await createUser(user));
});

usersRouter.put('/:id', async(req, res)=>{
    const {id}= req.params;
    const user =req.body;
    res.json( await updateUser(id, user));
});

usersRouter.delete('/:id', async(req, res)=>{
    const {id}= req.params;
    res.json(await deleteModel(id));
});

export default usersRouter;