import  express  from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import  cors  from 'cors';
import { PostController, UserController } from './controllers/controllers.js';
import {handleErrros, checkAuth} from './utils/utils.js'
import {loginValidator, postValidator, registerValidator} from './validations/validators.js'

mongoose
    .connect('mongodb+srv://Nemdod:kZuCOVJXUuJGmITm@cluster0.3szuq.mongodb.net/blog?retryWrites=true&w=majority')
    .then( () => {console.log('Db is OK')})
    .catch((err) => { console.log(err)});
    
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('./backend/uploads'))


// User

app.post('/auth/register', registerValidator, handleErrros, UserController.register);
app.post('/auth/login', loginValidator, handleErrros, UserController.login )
app.get('/auth/me', checkAuth, UserController.getUser )


// Post

app.get('/tags',  PostController.getLastTags);
app.get('/posts',  PostController.getAll);
app.get('/posts/tags',  PostController.getLastTags);
app.get('/posts/:id',  PostController.getOne);
app.delete('/posts/:id', checkAuth,  PostController.remove);
app.post('/posts', checkAuth ,  postValidator, handleErrros, PostController.createPost);
app.patch('/posts/:id',checkAuth, postValidator, handleErrros,  PostController.update);


// Upload image

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      
      cb(null, './backend/uploads');
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({storage: storage});

app.post('/upload', checkAuth, upload.single('image'),  (req, res) => {
    try {
      console.log(req.file)
      res.json({
          url: `/uploads/${req.file.originalname}`
      })
    } catch (error) {
      res.status(500).json({
        message: 'Error upload img'
    })
    }   
})
app.post('/uploadMultiple', checkAuth, upload.array('image', 6),  (req, res) => {
  try {
    const files = req.files;
    if (Array.isArray(files) && files.length > 0) {
      res.json(files)
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error upload img'
  })
  }   
})

app.listen(PORT, () => {
    return console.log(`Server started on Port ${PORT}`);
});