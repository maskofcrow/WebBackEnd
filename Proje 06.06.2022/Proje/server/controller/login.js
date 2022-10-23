import User from '../model/user.js';
import { verifyToken } from './verify.js';
import jwt from 'jsonwebtoken'
const { sign } = jwt;
const { SECRET_KEY } = process.env;

// Login User
const login = async(req, res) => {
    try {
        // Get data from body
        const { username, password } = req.body;
        // if password is empty
        if (!password) {
            return res.status(404).json({
                message: "Şifre boş olamaz",
                status: false,
                code: 404,
                error: true,
                time: new Date().toLocaleString()
            });
        }

        // Find user
        const user = await User.findOne({ username });


        // If user is found
        if (user) {
            // If user is found and password compare
            const isMatch = await user.comparePassword(password);
            if (isMatch) {
                // Create token
                const token = sign({ id: user._id }, SECRET_KEY, { expiresIn: "10h" });
                user.isOnline = true;
                await user.save();
                res.status(200).json({
                    message: "Kullanıcı başarıyla giriş yaptı",
                    username: user.username,
                    aday: user.account_expire,
                    balance: user.balance,
                    type: user.admin.admin_type,
                    status: false,
                    online: user.isOnline,
                    time: new Date().toLocaleString(),
                    expiresIn: "10h",
                    token

                });
            } else {
                res.status(404).json({
                    message: "Kullanıcı adı veya şifre hatalı",
                    status: false,
                    code: 404,
                    error: true,
                    time: new Date().toLocaleString()
                });
            }
        } else {
            res.status(404).json({
                message: "Kullanıcı bulunamadı",
                status: false,
                code: 404,
                error: true,
                time: new Date().toLocaleString()
            });
        }


    } catch (err) {
        res.status(404).json(err)
    }


}

// Logout User || Logout Client
const logout = async(req, res) => {

    const tokenHeader = req.headers.authorization ? req.headers.authorization : null;
    // Check token

    if (!tokenHeader) {
        return res.status(400).json({
            message: "Token bulunamadı",
            status: false,
            code: 400,
            error: true,
            time: new Date().toLocaleString()
        });
    }

    // Verify token
    const token = tokenHeader.split(" ")[1];
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(400).json({
            message: "Token geçersiz",
            status: false,
            code: 400,
            error: true,
            time: new Date().toLocaleString()
        })
    } else {

        // Get user
        const user = await User.findById(decoded.id);
        // If user is found
        if (user) {
            // Update user online status
            user.isOnline = false;
            await user.save();
        }


        res.status(200).json({
            message: "Kullanıcı başarıyla çıkış yaptı",
            status: false,
            time: new Date().toLocaleString()
        });

    }

}



export default {
    login,
    logout
}