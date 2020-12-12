const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    post: {
        async login(req, res) {
            const { email, password } = req.body;

            if(email == '' || password == '') {
                return res.json({ error: 'The email and password is required!' });
            }

            const user = await User.findOne({ email });

            if(!user) {
                return res.json({ error: 'The email or password is wrong!' });
            }
            
            const isCompares = await bcrypt.compare(password, user.password);

            if(!isCompares) {
                return res.json({ error: 'The email or password is wrong!' });
            }

            const token = await jwt.sign({ user }, 'secret');

            res.json({ token, username: user.username, email: user.email });
        },

        async register(req, res) {
            const { username, email, password } = req.body;

            if(email == '' || password == '' || username == '') {
                return res.json({ error: 'The username, email and password is required!' });
            }

            const user = await User.findOne({ email });

            if(user) {
                return res.json({ error: 'This user already exists!' });
            }

            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);

            const createdUser = await User.create({ username, email, password: passwordHash });

            res.json({ createdUser });
        }
    }
}