import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// İmport Login
import Notification from '../controller/notice.js'
// use body-parser and cors
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create Notification
app.post('/', Notification.createNotice);
// Get All Notifications
app.get('/', Notification.getAllNotifications);


export default app;