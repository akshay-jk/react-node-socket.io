import mongoose from 'mongoose';
const schema = mongoose.Schema;

const usermodel = new schema({
    username: {
        type: String,
        required: true
    },
    temp_pass: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: new Date()
    }
}, { versionKey: false });

const User = mongoose.model('user', usermodel);

export default User;