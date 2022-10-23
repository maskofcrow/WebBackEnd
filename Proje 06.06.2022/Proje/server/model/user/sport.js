// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
// Sport Schema
export const sportSchema = new Schema({
    sport_id: {
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