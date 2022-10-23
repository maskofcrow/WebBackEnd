// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
// User MBS Schema
export const userMBSchema = new Schema({
    mbs_id: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    value: {
        type: Number,
        trim: true
    }
});