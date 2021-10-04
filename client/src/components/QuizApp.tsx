
// import QuestionBlock from "./QuizBlock";
// /* import QuestionSidebar from "./QuestionSidebar"; */
// import React from "react";
// import axios from "axios";
// import ClockTime from "../functions/ClockTime";
// import MathPreview from "./MathPreview";

// class QuizApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             questions: [],
//             currentQuestion: {},
//             answers: Array(),
//             counter: 0,
//             markedQuestions: Array(),
//             questions: {},
//             buttons: ["", "NEXT", "MARK"],
//             timer: null,
//             realContent: {},
//             results: null,
//             timeDisplay: null,
//             timerVisibility: true
//         };
//     }
//     setVisible(selector, visible) {
//         document.querySelector(selector).style.display = visible
//             ? "block"
//             : "none";
//     }

//     startTimer = () => {
//         this.setVisible(".page", true);
//         this.setVisible("#loading", false);
//         ClockTime(
//             timeDisplay => {
//                 this.setState({ timeDisplay });
//             },
//             (time, timer) => {
//                 this.setState({ timer });
//                 time < 60 ? this.setState({ countdown: time }) : null;
//                 time < 0 ? this.submitAnswers(true) : null;
//             },
//             70
//         );
//     };
//     componentDidMount() {
//         axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/question`).then(response => {
//                 let questions = response.data;
//                 this.setState({
//                     questions,
//                     currentQuestion: 0
//                 });
//             },
//             error => {
//                 this.setState({ error, loading: false });
//             }
//         );
//     }

//     componentDidUpdate() {}
//     submitAnswers = (timesUp = false) => {
//         let submit = timesUp ? true : window.confirm("Submit Answers?");
//         let obj = {};

//     };

//     changeNavButtons = ({ counter, buttons, questions }) => {
//         if (counter === 0) {
//             buttons = ["", "NEXT", buttons[2]];
//         } else if (counter === questions.length - 1) {
//             buttons = ["BACK", "FINISH", buttons[2]];
//         } else {
//             buttons = ["BACK", "NEXT", buttons[2]];
//         }
//         this.setState({ buttons });
//     };
//     handleClick = j => {
//         let { counter, questions, mode, results } = this.state;
//         let { submitAnswers, changeNavButtons } = this;
//         j ? counter++ : counter--;
//         if (j === 2) {
//             submitAnswers(false);
//             return;
//         }
//         if (counter > questions.length - 1 || counter < 0) return;
//         let currentQuestion = questions[counter];
//         mode ? "" : (currentQuestion.result = results[counter]);
//         this.setState({ counter, currentQuestion }, () =>
//             changeNavButtons(this.state)
//         );
//     };
//     sideBarClick = counter => {
//         let { questions } = this.state;
//         let currentQuestion = questions[counter];
//         this.setState({ counter, currentQuestion }, () =>
//             this.changeNavButtons(this.state)
//         );
//     };
//     handleAnswerClick = (number, answer) => {
//         const answers = [...this.state.answers];
//         answers[number - 1] = answer;
//         this.setState({ answers });
//     };
//     eliminateAnswerChoice = (number, choice) => {
//         let { questions } = this.state;
//         let eliminations = questions[number - 1].eliminations;
//         eliminations.includes(choice)
//             ? eliminations.splice(eliminations.indexOf(choice), 1)
//             : eliminations.push(choice);
//         eliminations.sort();
//         questions[number - 1].elimations = eliminations;
//         this.setState({ questions });
//     };
//     markQuestion = number => {
//         let markedQuestions;
//         let { buttons } = this.state;
//         if (this.state.markedQuestions.includes(number)) {
//             markedQuestions = this.state.markedQuestions.filter(
//                 e => e != number
//             );
//         } else {
//             markedQuestions = [...this.state.markedQuestions, number].sort();
//         }

//         this.setState({ markedQuestions, buttons });
//     };
//     sendReady = () => this.startTimer();
//     hideTimer = () =>
//         this.setState(state => ({ timerVisibility: !state.timerVisibility }));
//     render() {
//         const {
//             handleClick,
//             handleAnswerClick,
//             markQuestion,
//             sideBarClick,
//             eliminateAnswerChoice,
//             hideTimer,
//             startTimer,
//             sendReady
//         } = this;
//         const {
//             currentQuestion,
//             answers,
//             questions,
//             markedQuestions,
//             buttons,
//             realContent,
//             mode,
//             results,
//             timeDisplay,
//             countdown,
//             timerVisibility
//         } = this.state;
//         let marked = currentQuestion
//             ? markedQuestions.includes(currentQuestion.number)
//             : false;
//         return (
//             Array.isArray(questions) &&
//             questions.length && (
//                 <div className="question-app-container">
//                     <QuestionBlock
//                         handleClick={handleClick}
//                         handleAnswerClick={handleAnswerClick}
//                         markQuestion={markQuestion}
//                         currentQuestion={currentQuestion}
//                         realContent={realContent}
//                         marked={marked}
//                         answers={answers}
//                         buttons={buttons}
//                         mode={mode}
//                         time={timeDisplay}
//                         eliminateAnswerChoice={eliminateAnswerChoice}
//                         countdown={countdown}
//                         timerVisibility={timerVisibility}
//                         hideTimer={hideTimer}
//                         startTimer={startTimer}
//                         sendReady={sendReady}
//                     />

//                     {/* <QuestionSidebar
//                         onClick={sideBarClick}
//                         questions={questions}
//                         markedQuestions={markedQuestions}
//                         mode={mode}
//                         results={results}
//                     /> */}
//                 </div>
//             )
//         );
//     }
// }
// QuestionApp.propTypes = {};
// QuestionApp.defaultProps = {};
// export default QuestionApp;
