import Notification from '../model/notice.js';


// Create Notification
const createNotice = async(req, res) => {
    try {
        // Find site setting
        const notice = await Notification.create({
            user_id: req.body.user_id,
            username: req.body.username,
            user_type: req.body.user_type,
            notification_message: req.body.notification_message,
            isActive: req.body.isActive
        });
        if (notice) {
            res.status(200).json(notice);
        } else {
            res.status(400).json({
                message: "Bildirim kaydedilemedi",
                status: false,
                code: 400,
                error: true
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

// Get All Notifications
const getAllNotifications = async(req, res) => {
    try {
        // Find site setting
        const notifications = await Notification.find({ isActive: true });
        if (notifications) {
            res.status(200).json(notifications);
        } else {
            res.status(400).json({
                message: "Bildirimler bulunamadı",
                status: false,
                code: 400,
                error: true
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}


// Export
export default {
    createNotice,
    getAllNotifications
}