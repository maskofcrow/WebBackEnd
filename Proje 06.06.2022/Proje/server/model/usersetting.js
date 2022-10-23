// Mongo User Shema
import mongoose from "mongoose";
const { Schema } = mongoose;
import dotenv from 'dotenv';
dotenv.config();

// Import Another Model
import { liveSportSchema } from "./user/livesport.js";
import { userMinMaxCuponSchema } from "./user/userminmax.js";
import { userMBSchema } from "./user/mbs.js";
import { sportSchema } from "./user/sport.js";
import { socialMediaSchema } from "./user/socialmedia.js";


// Import lang file from lang folder
import { langue } from "../lang/lang.js";

// Create Validate Language
const lang = process.env.DEFAULT_LANG;
const error = langue[lang].error;

// create UserSetting Schema
const UserSetting = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'User'
    },
    user_admin_type: {
        type: String,
        required: true,
        enum: ['root', 'super', 'admin', 'bayi', 'user'],
        default: 'user'
    },
    user_admin_username: {
        type: String,
        required: true,
        trim: true,
    },
    language: {
        type: String,
        trim: true,
        default: 'tr',
        enum: ['tr', 'en']
    },
    theme: {
        type: String,
        trim: true,
        default: 'light',
        enum: ['light', 'dark']
    },

    curency: {
        type: String,
        trim: true,
        default: 'TR',
        enum: ['TR', 'USD', 'EUR', 'GBP'],
    },
    curency_symbol: {
        type: String,
        trim: true,
        default: '₺',
        enum: ['₺', '$', '€', '£']
    },
    social_media: [socialMediaSchema],
    sport: [sportSchema],
    live_sport: [liveSportSchema],
    user_min_max_cupon: [userMinMaxCuponSchema],
    user_mbs: [userMBSchema],
    banned: {
        type: Boolean,
        default: false
    },
    ip_adress: {
        type: String,
        trim: true,
        default: ''
    },
    browser: {
        type: String,
        trim: true,
        default: ''
    },
    device: {
        type: String,
        trim: true,
        default: ''
    },
    canli: {
        type: Boolean,
        default: true
    },
    bulten: {
        type: Boolean,
        default: true
    },
    sanal: {
        type: Boolean,
        default: true
    },
    casino: {
        type: Boolean,
        default: true
    },
    rulet: {
        type: Boolean,
        default: true
    },
    tombala: {
        type: Boolean,
        default: true
    },
    print_type: {
        type: String,
        trim: true,
        default: 'termal',
        enum: ['termal', 'A4', 'A5', 'A6']
    },
    oran_min: {
        type: Number,
        trim: true,
        min: 1,
        max: 50000,
        default: 1
    },
    oran_max: {
        type: Number,
        trim: true,
        min: 1,
        max: 50000,
        default: 50000
    },
    kupon_sure: {
        type: Number,
        trim: true,
        min: 60,
        max: 300,
        default: 120
    },
    canli_sure: {
        type: Number,
        trim: true,
        min: 0,
        max: 30,
        default: 5
    },
    kupon_sayi: {
        type: Number,
        trim: true,
        min: 1,
        max: 20,
        default: 1
    },
    canli_halftime_played: {
        type: Number,
        trim: true,
        min: 1,
        max: 45,
        default: 45
    },
    canli_secondhalf_played: {
        type: Number,
        trim: true,
        min: 1,
        max: 45,
        default: 45
    }





});

// Before Save UserSetting
UserSetting.pre('save', function(next) {
    // Insert Sport
    if (this.sport.length === 0) {
        let sportArray = [{
                name: 'Futbol',
                sport_id: 1,
                isActive: true
            },
            {
                name: 'Basketbol',
                sport_id: 2,
                isActive: true
            },
            {
                name: 'Voleybol',
                sport_id: 3,
                isActive: true
            },
            {
                name: 'Hentbol',
                sport_id: 4,
                isActive: true
            },
            {
                name: 'Beyzbol',
                sport_id: 5,
                isActive: true
            },
            {
                name: 'Tenis',
                sport_id: 6,
                isActive: true
            },
            {
                name: 'Masa Tenisi',
                sport_id: 7,
                isActive: true
            },

            {
                name: 'A. Futbolu',
                sport_id: 8,
                isActive: true
            },
            {
                name: 'Buz Hokeyi',
                sport_id: 9,
                isActive: true
            },
            {
                name: 'Bisiklet',
                sport_id: 10,
                isActive: true
            },
            {
                name: 'Su Topu',
                sport_id: 11,
                isActive: true
            },
            {
                name: 'Boks',
                sport_id: 12,
                isActive: true
            },
            {
                name: 'Golf',
                sport_id: 13,
                isActive: true
            },
            {
                name: 'Dart',
                sport_id: 14,
                isActive: true
            }


        ];
        this.sport = sportArray;
    }

    // Insert Live Sport
    if (this.live_sport.length === 0) {
        let liveSportArray = [{
                name: 'Futbol',
                live_sport_id: 1,
                isActive: true
            },
            {
                name: 'Basketbol',
                live_sport_id: 2,
                isActive: true
            },
            {
                name: 'Voleybol',
                live_sport_id: 3,
                isActive: true
            },
            {
                name: 'Hentbol',
                live_sport_id: 4,
                isActive: true
            },
            {
                name: 'Tenis',
                live_sport_id: 5,
                isActive: true
            },
            {
                name: 'Masa Tenisi',
                live_sport_id: 6,
                isActive: true
            },
            {
                name: 'Buz Hokeyi',
                live_sport_id: 7,
                isActive: true
            }

        ];
        this.live_sport = liveSportArray;
    }
    // Insert User Min Max Cupon
    if (this.user_min_max_cupon.length === 0) {
        let userMinMaxCuponArray = [{
                userminmax_id: 1,
                name: 'Kupon Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 2,
                name: 'Canlı Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 3,
                name: 'Sanal Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 4,
                name: 'Casino Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 5,
                name: 'Rulet Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 6,
                name: 'Tombala Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 7,
                name: 'Tek Canlı Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 8,
                name: 'Aynı Kupon Tutar',
                min: 1,
                max: 15000
            },
            {
                userminmax_id: 9,
                name: 'Maximum User Tutar',
                min: 1,
                max: 150000000000000
            }

        ];
        this.user_min_max_cupon = userMinMaxCuponArray;
    }
    // Insert User MBS
    if (this.user_mbs.length === 0) {
        let userMBSArray = [{
                mbs_id: 1,
                name: 'Futbol',
                value: 1
            },
            {
                mbs_id: 2,
                name: 'Canlı Futbol',
                value: 1
            },
            {
                mbs_id: 3,
                name: 'Basketbol',
                value: 1
            },
            {
                mbs_id: 4,
                name: 'Canlı Basketbol',
                value: 1
            },
            {
                mbs_id: 5,
                name: 'Voleybol',
                value: 1
            },
            {
                mbs_id: 6,
                name: 'Canlı Voleybol',
                value: 1
            },
            {
                mbs_id: 7,
                name: 'Tenis',
                value: 1
            },
            {
                mbs_id: 8,
                name: 'Canlı Tenis',
                value: 1
            },
            {
                mbs_id: 9,
                name: 'Masa Tenisi',
                value: 1
            },
            {
                mbs_id: 10,
                name: 'Canlı Masa Tenisi',
                value: 1
            },
            {
                mbs_id: 11,
                name: 'Hentbol',
                value: 1
            },
            {
                mbs_id: 12,
                name: 'Canlı Hentbol',
                value: 1
            },
            {
                mbs_id: 13,
                name: 'Beyzbol',
                value: 1
            },
            {
                mbs_id: 14,
                name: 'Canlı Beyzbol',
                value: 1
            },
            {
                mbs_id: 15,
                name: 'Buz Hokeyi',
                value: 1
            },
            {
                mbs_id: 16,
                name: 'Canlı Buz Hokeyi',
                value: 1
            },
            {
                mbs_id: 17,
                name: 'Boks',
                value: 1
            },
            {
                mbs_id: 18,
                name: 'Canlı Boks',
                value: 1
            },
            {
                mbs_id: 19,
                name: 'Golf',
                value: 1
            },
            {
                mbs_id: 20,
                name: 'Canlı Golf',
                value: 1
            },
            {
                mbs_id: 21,
                name: 'Dart',
                value: 1
            },
            {
                mbs_id: 22,
                name: 'Canlı Dart',
                value: 1
            }


        ];
        this.user_mbs = userMBSArray;

    }

    next();

})





// Export User Model
export default mongoose.model('UserSetting', UserSetting);