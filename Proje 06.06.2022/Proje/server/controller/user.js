import User from '../model/user.js'
import UserSetting from '../model/usersetting.js'



const getUserSetting = async(req, res) => {
    try {
        const usersettings = await UserSetting.find({ user_id: req.params.id });
        if (usersettings) {
            res.status(200).json(usersettings);
        } else {
            res.status(400).json({
                message: "Kullanıcı ayarları bulunamadı",
                status: false,
                code: 400,
                error: true
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}


// All User
const allUser = async(req, res) => {
    try {

        // All Users
        const users = await User.find({});
        if (users) {
            const user = users.map(user => {
                    return {
                        _id: user._id,
                        username: user.username,
                        password: user.password,
                        name: user.name,
                        surname: user.surname,
                        balance: user.balance,
                        admin: user.admin,
                        isActive: user.isActive,
                        account_expire: user.account_expire,
                        isOnline: user.isOnline,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                })
                // if user length is 0
            if (user.length === 0) {
                res.status(404).json({
                    message: "Herhangi bir user bulunamadı",
                    status: false,
                    code: 400,
                    error: true,
                    time: new Date().toLocaleString()

                })
            } else {
                res.status(200).json({ users: user });
            }

        } else {
            res.status(400).json({
                message: "Kayıtlı kullanıcı bulunamadı",
                status: false,
                code: 400,
                error: true
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}


// Register User
const register = async(req, res) => {
    try {
        // Request Ip Address
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userIp = ip.split(':')[3];
        // User Browser 
        const userDevice = req.headers['user-agent'];
        const userBrowser = userDevice.split('(')[1].split(')')[0];

        // Get data from body
        const { username, password, name, surname, balance, admin } = req.body;

        // Create new user
        const users = await User.create({
            username,
            password,
            name,
            surname,
            balance,
            admin
        });
        // User Save
        await users.save();

        if (users) {
            let usersettings = await UserSetting.create({
                user_id: users._id,
                user_admin_type: users.admin.admin_type,
                user_admin_username: users.username,
                ip_adress: userIp,
                browser: userBrowser,
                device: userDevice
            });
            await usersettings.save();
            res.status(200).json(users)
        } else {
            res.status(400).json({
                message: "Kullanıcı kaydedilemedi",
                status: false,
                code: 400,
                error: true
            })
        }
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({
                message: "Bu kullanıcı adı kullanılıyor...",
                status: false,
                code: 400,
                error: true
            })
        } else {

            res.status(400).json({
                message: err.message,
                status: false,
                code: 400,
                error: true
            })
        }

    }
}


export default {
    allUser,
    register,
    getUserSetting
}