import React, { useState } from 'react'
import Question from '../types/Question'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward,faTrash} from '@fortawesome/free-solid-svg-icons'
import QuestionPreview from './QuestionPreview'
import axios from 'axios'
const QuestionViewer = ({questions}:{questions:Question[]}) => {
    const [state, setState] = useState(0);
    const [questionSet, setQuestions] = useState(questions);
    const handleBack = () => {
        setState((state)=> state > 0 ? state-1: state)
    }
    const handleNext = () => {
        setState((state)=>state < questionSet.length -1 ? state+1: state)
    }
    const handleDelete = (state) => {
        //confirmation box 
        let deleteQuestion = window.confirm("Delete Question from database?")
        //delete from the database 
        if(!deleteQuestion){
            return;
        }
        const newQuestionSet = questionSet.filter((question, index)=>index!==state)
        console.log(newQuestionSet)
        setQuestions(newQuestionSet)
    }
    return <>
    <div className="row justify-content-between">
    <div className="col-1">
    <button onClick={handleBack}><FontAwesomeIcon icon={faBackward} /></button>
    </div>
    <div className="col-1">
    <button onClick={()=>handleDelete(state)}><FontAwesomeIcon icon={faTrash} /></button>
    </div>
    <div className="col-1">
    <button onClick={handleNext}><FontAwesomeIcon icon={faForward} /></button>
    </div>
  </div>
    {questionSet.length > 0 ? <QuestionPreview question={questionSet[state]} />: null}
        
    </>


}

export default QuestionViewer;