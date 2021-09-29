/* import React, { Component } from "react";
import AnswerChoicesInput from "./AnswerChoicesInput";
import QuestionText from "./QuestionText";
import MathJax from "react-mathjax2";
import axios from "axios";
import getSubjects from "../functions/getSubjects";
import MathCalculator from "./MathCalculator";
const NUMBER_OF_CHOICES = 4;
class CreateQuestionApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {
                topics: null,
                questionTextMath: "",
                answerChoices: {},
                answerChoicesMath: {},
                correctAnswer: null,
                numberOfChoices: NUMBER_OF_CHOICES,
                answerType: 0
            }
        };
    }
    componentDidMount() {
    }
    convertStringtoMathBlock = (s:string) => {
        let regex = new RegExp("\\$\\$(.*?)\\$\\$", "g");
        return s.split(regex).map((item, i) => {
            return i % 2 === 1 ? (
                <MathJax.Node key={i} inline>
                    {item}
                </MathJax.Node>
            ) : (
                <span key={i}>{item}</span>
            );
        });
    };

    convertStringtoMathInline= (s:string) => {
        return <MathJax.Node inline>{s}</MathJax.Node>;
    };
    handleQuestionInput = event => {
        let { convertStringtoMath } = this,
            { question } = this.state;
        question.realText = event.target.value;
        question.questionTextMath = convertStringtoMath(event.target.value);
        this.setState({ question });
    };
    handleAnswerInput = (event, letter) => {
        let { convertStringtoMath } = this;
        let { question } = this.state;

        question.answerChoicesMath[letter] = convertStringtoMath(
            event.target.value
        );
        question.answerChoices[letter] = event.target.value;
        console.log("run");
        this.setState({ question });
    };

    handleNewAnswerInput = (mathString, letter) => {
        let { question } = this.state;

        question.answerChoices[letter] = "$$" + mathString + "$$";
        console.log(question);
        this.setState({ question });
    };
    handleTypeChange = (event, numberOfChoices) => {
        let { question } = this.state;
        question.answerType = parseInt(event.target.value, 10);
        question.numberOfChoices = numberOfChoices;
        this.setState({ question });
    };
    addAnswerChoice = () => {
        let { question } = this.state;
        question.numberOfChoices++;
        this.setState({ question });
    };
    check = e => {
        let { question } = this.state;
        question.correctAnswer = e.target.value;
        this.setState({ question });
    };
    getTopics = event => {
        let { app } = this.state;
        axios
            .get(`/api/subjects/${parseInt(event.target.value, 10)}`)
            .then(response => {
                app.topics = response.data;
                this.setState({ app });
            });
    };
    changeTopics = event => {
        let { question } = this.state;
        question.topics = $(event.target).val();
        this.setState({ question });
    };
    submit = e => {
        e.preventDefault();
        let question = {
            questionText: this.state.question.realText,
            topics: this.state.question.topics,
            correctAnswer: this.state.question.correctAnswer,
            answerChoices: this.state.question.answerChoices,
            answerType: this.state.question.answerType
        };
        let { app } = this.state;
        axios
            .post("/admin/questions", question)
            .then(response => {
                app.response = parseInt(response.data, 10);
                this.setState({ app });
                setTimeout(() => {
                    app.response = null;
                    this.setState({ app });
                }, 5000);
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    render() {
        const {
            handleQuestionInput,
            handleAnswerInput,
            handleNewAnswerInput,
            addAnswerChoice,
            handleTypeChange,
            submit,
            check,
            getTopics,
            changeTopics
        } = this;
        const {
            questionTextMath,
            answerChoices,
            numberOfChoices,
            answerType,
            answerChoicesMath
        } = this.state.question;
        const { subjects, topics } = this.state.app;
        const msg =
            this.state.app.response !== null &&
            this.state.app.response !== undefined ? (
                <div
                    className={
                        this.state.app.response === 1
                            ? "success msg"
                            : "error msg"
                    }
                >
                    {this.state.app.response === 1
                        ? "Question successfully submitted!"
                        : "Something went wrong"}
                </div>
            ) : (
                ""
            );

        var csrfVar = $('meta[name="csrf-token"]').attr("content");
        let answerChoiceInputs = [];
        for (let i = 0; i < NUMBER_OF_CHOICES; i++) {
            answerChoiceInputs[i] = (
                <MathInput
                    key={i}
                    onChange={handleNewAnswerInput}
                    letter={String.fromCharCode(65 + i)}
                    check={check}
                />
                /* <AnswerChoiceInput
                    key={i}
                    onChange={onChange}
                    letter={String.fromCharCode(65 + i)}
                    value={i + 1}
                    answer={answerChoicesMath[String.fromCharCode(65 + i)]}
                    answerText={answerChoices[String.fromCharCode(65 + i)]}
                    check={check}
                /> 
            );
        }
        return (
            <div style={{ gridArea: "content" }}>
                {msg}
                <MathJax.Context input="tex">
                    <QuestionText
                        onChange={handleQuestionInput}
                        questionText={questionTextMath}
                        getTopics={getTopics}
                        changeTopics={changeTopics}
                        subjects={subjects}
                        topics={topics}
                    />
                </MathJax.Context>
                {answerChoiceInputs}
                <form method="POST" onSubmit={submit}>
                    <input name="_token" value={csrfVar} type="hidden" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default CreateQuestionApp;
 */

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectQuestion } from "../redux/features/question/questionSlice";
import Question from "../types/Question";
import MathPreview from "./MathPreview";
import MyComponent from "./MyComponent";
import QuestionInput from "./QuestionInput";
import QuestionPreview from "./QuestionPreview";
import RadioButtons from "./RadioButtons";



const CreateQuestion = () => {

    const question = useSelector(selectQuestion);
    /* const form = {
        QuestionTextInput: useRef() as React.MutableRefObject<HTMLTextAreaElement>,
        AnswerChoiceAInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        AnswerChoiceBInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        AnswerChoiceCInput: useRef() as React.MutableRefObject<HTMLInputElement>,
        AnswerChoiceDInput: useRef() as React.MutableRefObject<HTMLInputElement>,
    } 
    const [question, setQuestion] = useState({} as Question); */
  
    
  


     const createQuestion = (event:any):void => {
         event.preventDefault();
         console.log(question)
        /* event.preventDefault();
        const newQuestion = {
            questionText: form.QuestionTextInput.current.value,
            answerChoiceA: form.AnswerChoiceAInput.current.value,
            answerChoiceB: form.AnswerChoiceBInput.current.value,
            answerChoiceC: form.AnswerChoiceCInput.current.value,
            answerChoiceD: form.AnswerChoiceDInput.current.value,
            created_at: new Date()
        }
        console.log(newQuestion)
        setQuestion(newQuestion) */

    } 

    return (
    <div className="container border  rounded bg-light  border-5 m-2 p-2" >
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={createQuestion} >
                    <h3>Add New Question</h3>
                    {/* <div className="mb-3">
                        <label>Question Text</label>
                        <textarea className="form-control" ref={form.QuestionTextInput}
                        placeholder="Type a question using LaTex"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Answer Choice A</label>
                        <input type="text" className="form-control" placeholder="Answer Choice A"  ref={form.AnswerChoiceAInput}/>
                    </div>
                    <div className="mb-3">
                        <label>Answer Choice B</label>
                        <input type="text" className="form-control" placeholder="Answer Choice B"  ref={form.AnswerChoiceBInput}/>
                    </div>
                    <div className="mb-3">
                        <label>Answer Choice C</label>
                        <input type="text" className="form-control" placeholder="Answer Choice C"  ref={form.AnswerChoiceCInput}/>
                    </div>
                    <div className="mb-3">
                        <label>Answer Choice D</label>
                        <input type="text" className="form-control" placeholder="Answer Choice D"  ref={form.AnswerChoiceDInput}/>
                    </div> */}

                    <QuestionInput letter={'A'} />
                    <QuestionInput letter={'B'} />
                    <QuestionInput letter={'C'} />
                    <QuestionInput letter={'D'} />
            <button className="btn btn-outline-primary">Create</button>
        </form></div>
        <div className="col-md-6">
        <MyComponent />
            
        </div>
        </div></div>)
}
export default CreateQuestion; 