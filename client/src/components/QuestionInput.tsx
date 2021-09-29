import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAnswerChoices, selectQuestionAnswerChoices } from "../redux/features/question/questionSlice";
import MathPreview from "./MathPreview";

const QuestionInput = ({letter})=>{
    const dispatch = useDispatch();
    const questionAnswerChoices = useSelector(selectQuestionAnswerChoices);

    const handleChange = (e) => {
        const newQuestionAnswerChoices = {...questionAnswerChoices, [letter]:e.target.value}
        dispatch(changeAnswerChoices(newQuestionAnswerChoices))
    }
    return <div className="mb-3">
    <label>{letter}</label>
    <input type="text" className="form-control" placeholder={letter} onChange={handleChange}/> 
    <MathPreview text={questionAnswerChoices[letter]} />
</div>
}
export default QuestionInput;