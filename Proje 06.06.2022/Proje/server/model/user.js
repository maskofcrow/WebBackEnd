// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
import dotenv from 'dotenv';
dotenv.config();

// Password Hash
import bcrypt from 'bcrypt'
import { langue } from "../lang/lang.js";
// Create Validate Language
const lang = process.env.DEFAULT_LANG;
const error = langue[lang].error;


// create admin Schema
const adminSchema = new Schema({
    admin_type: {
        type: String,
        enum: ['root', 'super', 'admin', 'bayi', 'user'],
        default: 'user'
    },
    limit: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 100
    },
    admin_created_at: {
        type: String,
        default: new Date().toLocaleString()
    },
    admin_updated_at: {
        type: String,
        default: new Date().toLocaleString()
    },
    admin_created_by: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'User',
        validate(value) {
            // is empty
            if (!value) {
                throw new Error(error.admin.isEmpty);
            }
        }
    }
});


// Create User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, error.username.required],
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (value.length < 3) {
                throw new Error(error.username.min);
            }
            if (value.length > 15) {
                throw new Error(error.username.max);
            }
            // only letters and numbers
            if (!/^[a-zA-Z0-9ğçşüöı]+$/.test(value)) {
                throw new Error(error.username.format);
            }
        }
    },
    password: {
        type: String,
        required: [true, error.password.required],
        trim: true,
        validate(value) {
            if (value.length < 4) {
                throw new Error(error.password.min);
            }
        }
    },
    name: {
        type: String,
        required: false,
        trim: true
    },
    surname: {
        type: String,
        required: false,
        trim: true
    },
    balance: {
        type: Number,
        required: false,
        trim: true,
        default: 0,
        min: 0,
        max: 1000000
    },
    admin: adminSchema,
    isActive: {
        type: Boolean,
        default: true
    },
    account_expire: {
        type: String,
        default: new Date().toLocaleString(),
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

// Hash password before save
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    // user admin
    if (user.admin === undefined || user.admin === null) {
        user.admin = {
            admin_type: 'user',
            limit: 0,
            admin_created_at: new Date().toLocaleString(),
            admin_updated_at: new Date().toLocaleString(),
            admin_created_by: user._id
        }
    }

    next();
});




// Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}


// Export User Model
export default mongoose.model('User', userSchema);