import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const slice = createSlice({
    name: 'question',
    initialState: {
        currentQuestion: {
            questionText: "",
            answerChoices: {}
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
        }
    }
})

export const {changeQuestion, changeAnswerChoices, changeQuestionText} = slice.actions;

export const selectQuestion = (state: RootState) => state.question.currentQuestion;
export const selectQuestionText = (state: RootState) => state.question.currentQuestion.questionText;
export const selectQuestionAnswerChoices = (state: RootState) => state.question.currentQuestion.answerChoices;
export default slice.reducer;