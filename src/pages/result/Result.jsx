import React from "react";
import "./result.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Result() {
	const { ques, score } = useSelector((state) => state.category);
	const { quiz } = ques;
	const scoreData = {
		50: "5",
		35: "4",
		20: "3",
		5: "2",
		"-10": "1",
	};
	const correctCount = scoreData[score.toString()];
	return (
		<div className="result-score text text-lg">
			<div className="final-score text p-8 w-50p m-auto">
				Score:
				<span className="score-text-span font-extrabold pl-4">{score}</span>
				/50
			</div>
			<div className="correct-text mt-4 pr-16">
				Correct:{" "}
				<span className="score-text-span font-extrabold pl-4">
					{correctCount}
				</span>
				/5
			</div>
			{quiz.map((item) => (
				<div
					key={item.question}
					className="correct-ques-listing text p-4 text-xmd"
				>
					<h4 className="mb-4 text-lg">{item.question}</h4>
					{item.options.map((option) => (
						<div key={option.answer}>
							<div
								className={`quiz-answer-result ${
									option.isClick & (option.isCorrect === true) && `correct`
								} ${
									(option.isClick === true) & (option.isCorrect === false) &&
									`wrong`
								} ${option.isCorrect === true && `correct`}`}
							>
								{option.answer}
							</div>
						</div>
					))}
				</div>
			))}
			<div className="play-again-container flex items-center justify-center mt-16">
				<Link to="/home">
					<button type="button" className="btn btn-primary border-12 p-4 w-64">
						Play Again
					</button>
				</Link>
			</div>
		</div>
	);
}

export { Result };
