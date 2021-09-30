import express from 'express';
import { Question } from '../models/question.model.js';
const router = express.Router(); //mini app
router.route("/").get((req, res) => {
    Question.find().then((questions) => res.json(questions.map((question) => {
        return {
            questionText: question.questionText,
            A: question.A,
            B: question.B,
            C: question.C,
            D: question.D
        };
    }))).catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
    Question.findById(req.params.id)
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json('Error ' + err));
});
router.route("/").post((req, res) => {
    const { questionText, answerChoices } = req === null || req === void 0 ? void 0 : req.body;
    console.log("questionText", questionText);
    if (questionText.length == 0) {
        return res.status(200).json('Question Text field must not be blank ');
    }
    console.log(Object.assign({ questionText }, answerChoices));
    const newQuestion = new Question(Object.assign(Object.assign({ questionText }, answerChoices), { correctAnswer: 'A' }));
    console.log(newQuestion);
    newQuestion.save()
        .then(() => res.json({ type: "success", text: "Question added!" }))
        .catch((saveErr) => {
        return res.status(400).json('Error ' + saveErr);
    });
});
/* app.put("/todo/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, { content: req.body.content })
        .then(() => res.json("Todo updated"))
        .catch((err) => res.status(400).json('Error ' + err))
})

app.delete("/todo/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json("Todo deleted"))
        .catch((err) => res.status(400).json('Error ' + err))
}); */
export { router };
