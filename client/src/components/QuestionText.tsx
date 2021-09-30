import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuestionText, selectQuestion, selectQuestionText } from "../redux/features/question/questionSlice";
import MathPreview from "./MathPreview";

const QuestionText = () =>{
    const dispatch = useDispatch();
    const questionText = useSelector(selectQuestionText);

    const handleChange = (e) => {
        const newQuestionText = e.target.value;
        dispatch(changeQuestionText(newQuestionText))
    }
    
return  <div className="row mb-3">
    <div className="col-md-12" >
        <label>Question Text</label>
        <div className="form-floating"> 
        <textarea className="form-control"  placeholder="Question Text" onChange={handleChange}></textarea>
        <label>{questionText ? <MathPreview text={questionText} /> : "Question Text"}</label>
        </div>
    </div>
    </div>
}

export default QuestionText;