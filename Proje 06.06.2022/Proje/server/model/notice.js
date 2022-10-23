// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;


// Create Notification Schema
const notificationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    user_type: {
        type: String,
        required: true,
        trim: true
    },
    notification_message: {
        type: String,
        required: true,
        trim: true
    },
    notification_date: {
        type: String,
        default: new Date().toLocaleString()
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

// Export notification model
export default mongoose.model("Notification", notificationSchema);