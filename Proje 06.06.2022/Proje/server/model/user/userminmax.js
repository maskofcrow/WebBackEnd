// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
// User Min Max Cupon Schema
export const userMinMaxCuponSchema = new Schema({
    userminmax_id: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    min: {
        type: Number,
        trim: true
    },
    max: {
        type: Number,
        trim: true
    }

});