import React, { useState } from 'react'
import Question from '../types/Question'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward} from '@fortawesome/free-solid-svg-icons'
import QuestionPreview from './QuestionPreview'
const QuestionViewer = ({questions}:{questions:Question[]}) => {
    const [state, setState] = useState(0);
    const handleBack = () => {
        setState((state)=> state > 0 ? state-1: state)
    }
    const handleNext = () => {
        setState((state)=>state < questions.length -1 ? state+1: state)
    }

    return <>
    <ul>
    <button onClick={handleBack}><FontAwesomeIcon icon={faBackward} /></button>
    <button onClick={handleNext}><FontAwesomeIcon icon={faForward} /></button>
    </ul>
    <QuestionPreview question={questions[state]} />
        
    </>


}

export default QuestionViewer;