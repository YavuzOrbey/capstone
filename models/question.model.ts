import { QuestionDoc } from "../interfaces.types/QuestionDoc";
import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema

const questionSchema =  new Schema<QuestionDoc>({
    questionText: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,

    },
    A: {
        type:String,
        required: true,
        trim: true,
    },
    B: {
        type:String,
        required: true,
        trim: true,
    },
    C: {
        type:String,
        required: true,
        trim: true,
    },
    D: {
        type:String,
        required: true,
        trim: true,
    },
    correctAnswer: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1
    }
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

export {Question};