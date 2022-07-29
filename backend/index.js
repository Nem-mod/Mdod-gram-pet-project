import  express  from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import path from 'path';
import registerValidator from './validations/registerValidator.js'
import checkAuth from './utils/checkAuth.js'
import loginValidator from './validations/loginValidator.js';

import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'
import postValidator from './validations/postValidator.js';

mongoose
    .connect('mongodb+srv://Nemdod:kZuCOVJXUuJGmITm@cluster0.3szuq.mongodb.net/blog?retryWrites=true&w=majority')
    .then( () => {console.log('Db is OK')})
    .catch((err) => { console.log(err)});
    
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());



// User

app.post('/auth/register', registerValidator,  UserController.register);
app.post('/auth/login', loginValidator, UserController.login )
app.get('/auth/me', checkAuth, UserController.getUser )


// Post
app.get('/posts',  PostController.getAll);
app.get('/posts/:id',  PostController.getOne);
app.delete('/posts/:id', checkAuth,  PostController.remove);
app.post('/posts', checkAuth ,  postValidator, PostController.createPost);
app.patch('/posts/:id',checkAuth ,  PostController.update);


const storage = multer.diskStorage({
    destination: (_, __,    cb) => {
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {

        cb(null, path.extname(file.originalname));
    },
})


const upload = multer({storage: storage});

app.post('/upload', checkAuth, upload.single('image'),  (req, res) => {
    try {
        res.json({
            url: `/uploads/${req.file.originalname}`
        })
    } catch (error) {
        
    }   
})

app.listen(PORT, () => {
    return console.log(`Server started on Port ${PORT}`);
});