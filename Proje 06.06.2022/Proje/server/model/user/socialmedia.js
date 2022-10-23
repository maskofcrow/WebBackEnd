// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
// Social Media Schema
export const socialMediaSchema = new Schema({
    social_media_type: {
        type: String,
        enum: ['phone', 'telegram', 'watsapp'],
        default: 'watsapp'
    },
    social_media_link: {
        type: String,
        trim: true
    }

});