import Question from "../types/Question";
import MathPreview from "./MathPreview";

const QuestionPreview = ({question}:{question:Question}) => {
    if(Object.keys(question).length === 0){
        return <></>
    }
    else{
        return <>
            <MathPreview text={question.questionText} />
            <MathPreview text={question.answerChoiceA} />
            <MathPreview text={question.answerChoiceB} />
            <MathPreview text={question.answerChoiceC} />
            <MathPreview text={question.answerChoiceD} /></>
    }
}
export default QuestionPreview;