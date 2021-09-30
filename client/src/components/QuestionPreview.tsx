import Question from "../types/Question";
import MathPreview from "./MathPreview";

const QuestionPreview = ({question}:{question:Question}) => {
    const keys = ['A', 'B', 'C', 'D'];
    if(Object.keys(question).length === 0){
        return <></>
    }
    else{
        return<div className="mb-3">
        <div className="row">
            <div className="col-md-12 text-center" >
                <MathPreview text={question.questionText} />
            </div>
        </div>
        <hr />
        {keys.map((key)=>{
            return <div className="row p-3">
            <div className="col-md-2">
                <div style={{width: '30px', height: '30px', border: '1px solid black', textAlign: 'center'}}>{key}</div>
            </div>
            <div className="col-md-10">
                <MathPreview text={question[key]} />
            </div>
        </div>
        })}
        
        </div>
    }
}
export default QuestionPreview;