import { UserDoc } from "../interfaces.types/UserDoc";
import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema

const userSchema =  new Schema<UserDoc>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,

    },
    password: {
        type:String,
        required: true,
        trim: true,
        minlength: 3
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export {User};