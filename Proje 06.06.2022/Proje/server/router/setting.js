import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// İmport Login
import SiteSetting from '../controller/sitesetting.js'
// use body-parser and cors
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', SiteSetting.getConfig);


export default app;