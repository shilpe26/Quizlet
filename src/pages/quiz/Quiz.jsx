import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Warning } from "../../components/Warning";
import { useDispatch, useSelector } from "react-redux";
import {
	setQuiz,
	resetScore,
	setScore,
	updateUserClick,
} from "../../redux/categorySlice";
import "./quiz.css";

function Quiz() {
	const ques = useSelector((state) => state.category.ques);
	const dispatch = useDispatch();
	const [showWarning] = useState(false);
	const [showScore, setShowScore] = useState(10);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	let { quiz, title } = ques;
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(resetScore());
	}, []);

	const answerHandler = (item) => {
		let totalScore = 0;
		if (item.isCorrect) {
			totalScore = showScore + 10;
			setShowScore(totalScore);
			dispatch(updateUserClick(item.id));
		} else {
			totalScore = showScore - 5;
			setShowScore(totalScore);
			dispatch(updateUserClick(item.id));
		}
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < quiz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			dispatch(setScore(showScore));
			dispatch(setQuiz(quiz));
			navigate("/result");
		}
	};

	return (
		<div>
			{showWarning && <Warning />}
			<div>
				<h2 className="question-text text mt-12 text-slg p-4">
					Welcome to {title} quiz
				</h2>

				<h3 className="text mt-24 p-4">
					Q{currentQuestion + 1}. {quiz[currentQuestion].question}
				</h3>
				{quiz[currentQuestion].options.map((item) => (
					<div
						key={item.answer}
						className="answer-options inline-block mt-4 w-50p pb-8 text"
					>
						<button
							className="options-btn p-4 w-50p border-12 text-md"
							onClick={() => answerHandler(item)}
						>
							{item.answer}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export { Quiz };
