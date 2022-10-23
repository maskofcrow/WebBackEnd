import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// İmport Login
import LoginController from '../controller/login.js'
// use body-parser and cors
const app = express();
app.use(bodyParser.json());
app.use(cors());



// Login user || Login client
app.post('/', LoginController.login)

// Log out user || Log out client
app.post('/logout', LoginController.logout)



export default app;