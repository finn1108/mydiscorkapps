const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let userInfo = await User.findOne({ email: email.toLowerCase() })
        let checkPassword = await bcrypt.compare(password, userInfo.password)
        if (userInfo && checkPassword) {
            //send new token
            const token = jwt.sign({
                userId: userInfo._id,
                email
            },
                process.env.JWT_SECRET,
                {
                    expiresIn: '72h'
                }
            )

            return res.status(201).json({
                userLoginDetails: {
                    username: userInfo.username,
                    email: userInfo.email,
                    token,
                    _id: userInfo._id
                }


            })
        }
        return res.status(400).send("Bad credentials.Please try with your valid email or password.")

    } catch (err) {
        return res.status(500).send("Something went wrong. Please try again with your valid email or password.")
    }
}
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        //check if user exist
        let check = await User.exists({ email: email.toLowerCase() })
        if (check) {
            return res.status(409).send("Email already in use.")
        }

        //encrypt password
        const encryptedPassword = await bcrypt.hash(password, 15)
        // save user
        const registeredUser = await User.create({
            email: email.toLowerCase(),
            password: encryptedPassword,
            username
        })

        //create jwt token
        const token = jwt.sign({
            userId: registeredUser._id,
            email
        },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        )


        return res.status(201).json({
            userDetails: {
                email: registeredUser.email,
                username: registeredUser.username,
                token: token,
                _id: registeredUser._id
            }
        })

    } catch (err) {
        return res.status(500).send("Something went wrong. Please try again.")
    }


}

module.exports = {
    login,
    register
}