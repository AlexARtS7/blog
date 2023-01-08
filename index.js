import express from "express";
import mongoose from "mongoose";
import checkAuth from './utils/checkAuth.js'
import { registerValidation } from "./validations/auth.js"
import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'
import { postCreateValidation } from "./validations/post.js";

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.xouwvst.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log("DB CONNECT"))
    .catch(() => console.log("DB ERROR"))

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('is Ok!')
})

app.post('/auth/register', registerValidation, UserController.register)
app.post('/auth/login', UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

app.get('/posts', PostController.getAll)
//app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, PostController.create)
//app.delete('/posts', PostController.remove)
//app.patch('/posts', PostController.update)

app.listen(4444, (err) => {
    if(err) {
        return console.log(err)
    } 
    console.log("Server start on port: 4444");
});