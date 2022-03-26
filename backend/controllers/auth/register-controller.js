const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../../models/user-model');

const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // check if user already exists
        const userExists = await User.exists({ email: email.toLowerCase() });

        if(userExists) {
            // http status conflict
            return res.status(409).send('E-mail already in use.')            
        }

        // encrypt password
        const encryptedPassword = await bcryptjs.hash(password, 10);
        
        // create document and save it in database
        const user = await User.create({
            username,
            password: encryptedPassword,
            email: email.toLowerCase()
        });

        // create jwt
        const token = jwt.sign(
            {
                email,
                userId: user._id
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'  
            }
        );

        return res.status(201).json({
            userDatails: {
                token,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500);
    }
};

module.exports = register;