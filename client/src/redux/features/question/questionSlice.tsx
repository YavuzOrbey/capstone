import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const slice = createSlice({
    name: 'createQuestion',
    initialState: {
        currentQuestion: {
            questionText: "",
            answerChoices: {},
            correctAnswer: ""
        },
    },
    reducers: {
        changeQuestion: (state, action) =>{
            state.currentQuestion = action.payload;
        },
        changeAnswerChoices: (state, action)=>{
            state.currentQuestion.answerChoices = action.payload;
        },
        changeQuestionText: (state, action)=>{
            state.currentQuestion.questionText = action.payload;
        },
        changeCorrectAnswer: (state, action)=> {
            state.currentQuestion.correctAnswer = action.payload;
        }
    }
})

export const {changeQuestion, changeAnswerChoices, changeQuestionText, changeCorrectAnswer} = slice.actions;

export const selectQuestion = (state: RootState) => state.createQuestion.currentQuestion;
export const selectQuestionText = (state: RootState) => state.createQuestion.currentQuestion.questionText;
export const selectQuestionAnswerChoices = (state: RootState) => state.createQuestion.currentQuestion.answerChoices;
export const selectCorrectAnswer = (state: RootState) => state.createQuestion.currentQuestion.correctAnswer;
export default slice.reducer;