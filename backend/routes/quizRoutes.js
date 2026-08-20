import express from "express";
import Quiz from "../models/Quiz.js";
const router = express.Router();
router.post("/add-quiz", async (req, res) => {
  const data = req.body;
  const newQuiz = new Quiz(data);
  const newQuizData = await newQuiz.save();
  res.send({
    success: true,
    message: "Quiz Added Successfully",
    data: newQuizData,
  });
});

router.post("/delete-quiz", async (req, res) => {
  const { quizId } = req.body;
  await Quiz.findByIdAndDelete(quizId);
  res.send({ success: true, message: "Quiz Deleted Successfully" });
});
export default router;
