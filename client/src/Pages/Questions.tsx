import axios from "axios";
import { useEffect, useState } from "react"
import QuestionViewer from '../components/QuestionViewer';
const Questions = ()=> {

    const [questions, setQuestions] = useState([]);

useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/question`).then(res => {
            setQuestions(res.data);
        })
    }
    ,[])
return questions.length > 0 ? <QuestionViewer questions={questions} />: null;

}

export default Questions;