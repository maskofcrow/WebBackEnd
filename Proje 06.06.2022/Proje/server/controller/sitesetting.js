import SiteSetting from '../model/setting.js';
import dotenv from 'dotenv';

// Environment
dotenv.config();

const { SITE_URL, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } = process.env;


const getConfig = async(req, res) => {
    try {
        // Find site setting
        const siteSetting = await SiteSetting.findOne({});
        if (siteSetting) {
            res.status(200).json(siteSetting);
        } else {
            let newsiteSetting = await SiteSetting.create({
                site_name: SITE_NAME,
                site_url: SITE_URL,
                site_keywords: SITE_KEYWORDS,
                site_description: SITE_DESCRIPTION
            })
            if (newsiteSetting) {
                res.status(200).json(newsiteSetting);
            } else {
                res.status(400).json({
                    message: "Site ayarları kaydedilemedi",
                    status: false,
                    code: 400,
                    error: true
                })
            }
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

// Export
export default {
    getConfig
}