import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        type: String,
        default: null
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
},
{ timestamps: true }

);

export default mongoose.model('User', userSchema);