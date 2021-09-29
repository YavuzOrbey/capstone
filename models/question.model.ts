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
    answerChoiceA: {
        type:String,
        required: true,
        trim: true,
        minlength: 3
    },
    answerChoiceB: {
        type:String,
        required: true,
        trim: true,
        minlength: 3
    },
    answerChoiceC: {
        type:String,
        required: true,
        trim: true,
        minlength: 3
    },
    answerChoiceD: {
        type:String,
        required: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

export {Question};