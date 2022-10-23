import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// İmport user model
import UserController from '../controller/user.js'
// use body-parser and cors
const app = express();
app.use(bodyParser.json());
app.use(cors());



// All user
app.get('/', UserController.allUser)


// Register user
app.post('/register', UserController.register)

// User Setting
app.get('/setting/:id', UserController.getUserSetting)



export default app;