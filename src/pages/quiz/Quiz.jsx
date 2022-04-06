import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Warning } from "../../components/Warning";
import { useCategory } from "../../context/category-context";
import "./quiz.css";

function Quiz() {
	const { getCategory, setGetCategory } = useCategory();
	const [showWarning] = useState(false);
	const [showScore, setShowScore] = useState(10);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	let { quiz, title } = getCategory;
	const navigate = useNavigate();

	useEffect(() => {
		setGetCategory((value) => ({ ...value, score: 0 }));
	}, [setGetCategory]);

	function answerHandler(item) {
		let totalScore = 0;
		if (item.isCorrect) {
			totalScore = showScore + 10;
			setShowScore(totalScore);
		} else {
			totalScore = showScore - 5;
			setShowScore(totalScore);
		}
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < quiz.length) {
			item.isClick = true;
			setCurrentQuestion(nextQuestion);
		} else {
			setGetCategory({ showScore, quiz });
			navigate("/result");
		}
	}

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
