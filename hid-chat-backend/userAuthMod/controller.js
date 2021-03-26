import User from './userModel.js';

function signInorLogIn(req, res) {
    res.status(200).json({
        err: false,
        msg: 'Working fine'
    })
}

export default {
    signInorLogIn
}