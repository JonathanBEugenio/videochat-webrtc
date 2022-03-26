const bcryptjs = require("bcryptjs");
const User = require("../../models/user-model");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user by email
        const user = await User.findOne({email: email.toLowerCase()});

        if(!user) {
            // http status not found
            return res.status(404).send('Invalid e-mail.');
        }

        // compare password with hashed one
        const passwordValid = await bcryptjs.compare(password, user.password);

        if (!passwordValid) {
            // http status unauthorized
            return res.status(401).send('Invalid password.');
        }

        res.status(200).json({
            userDatails: {
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500);
    }
};

module.exports = login;