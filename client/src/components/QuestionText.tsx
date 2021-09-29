import { useDispatch, useSelector } from "react-redux";
import { selectQuestion } from "../redux/features/question/questionSlice";

const QuestionText = () =>{
    const dispatch = useDispatch();
    const question = useSelector(selectQuestion);

return  <textarea className="form-control" placeholder="Type a question using LaTex"/>
}

export default QuestionText;