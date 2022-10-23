// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
// Live Sport Schema
export const liveSportSchema = new Schema({
    live_sport_id: {
        type: Number
    },
    name: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }

});