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
    return <div className="row mb-3">
    <div className="col-md-12" >
    <label>{`Answer Choice ${letter}`}</label>
        <div className="form-floating">
            <textarea className="form-control"  placeholder={letter} onChange={handleChange}></textarea>
            <label >{questionAnswerChoices[letter] ? <MathPreview text={questionAnswerChoices[letter]} />: letter}</label>
            </div>
        </div>

    </div>
}
export default QuestionInput;