import jwt from 'jsonwebtoken'
const { SECRET_KEY } = process.env;


// Verify
export const verifyToken = (token) => {

    // Verify token
    const decoded = jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            if (err.message) {
                return false;
            }
        }
        return decoded;
    });

    if (decoded) {
        // Token expired
        if (decoded.exp < Date.now() / 1000) {
            return false;
        }

        // Token id
        if (decoded.id) {
            return decoded;
        } else {
            return false;
        }


    } else {
        return false;
    }






}